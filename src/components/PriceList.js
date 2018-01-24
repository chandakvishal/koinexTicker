import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native';

import axios from 'axios';
import Currency from './Currency'
import CurrencyStats from './CurrencyStats'

class PriceList extends Component {

    state = { ticker: { price: {}, stats: {} }, refreshing: false };

    componentWillMount() {
        this.dataFetch();
    }

    dataFetch() {
        axios.get('https://koinex.in/api/ticker')
            .then(response => this.setState({ ticker: response.data }))
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    // Error Code 429 is Throttling Exception
                    if (error.response.status == 429) {
                        alert("Dude, slow down!");
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log(error.message);
                }
                // Swallow the Error as we cannot do anything about throttling
                console.log(error);
            });
    }

    renderPrice() {
        var currencyTickers = this.getCurrency();
        console.log(currencyTickers);
        return currencyTickers.map(currency => <CurrencyStats key={currency.symbol} currency={currency} />);
    }

    getCurrency() {
        var prices = this.state.ticker.prices;
        var stats = this.state.ticker.stats;
        var currencyTickers = [];
        for (var key in prices) {
            var currency = new Currency();
            currency.symbol = key;
            if (prices.hasOwnProperty(key)) {
                currency.price = prices[key];
            }
            if (stats.hasOwnProperty(key)) {
                currency.stats = stats[key];
            }
            currencyTickers.push(currency);
        }
        return currencyTickers;
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }>
                {this.renderPrice()}
            </ScrollView>
        );
    }

    _onRefresh() {
        if (this.state.refreshing) {
            return;
        }

        console.log('Refreshing');

        this.dataFetch();
        this.setState({ refreshing: false });

    }
}

export default PriceList;
