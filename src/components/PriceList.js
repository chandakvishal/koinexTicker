import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';
import axios from 'axios';
import Currency from './Currency'
import CurrencyStats from './CurrencyStats'

class PriceList extends Component {

    state = { ticker: { price: {}, stats: {} }  };

    componentWillMount() {
        axios.get('https://koinex.in/api/ticker')
             .then(response => this.setState({ ticker: response.data }))
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
        console.log(this.state)
        this.renderPrice();
        // const { textStyle, viewStyle } = styles;
        return (
            <ScrollView>
                {this.renderPrice()}
            </ScrollView>
        );
    };
}

// const styles = StyleSheet.create({
//   textStyle: {
//     // flex: 1,
//     fontSize: 20,
// },
// viewStyle: {
//     backgroundColor: '#F8F8F8',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 60,
//     paddingTop: 15,
//     shadowColor: '#000',
//     shadowOffset: { width:2, height:2 },
//     shadowOpacity: 0.5,
//     elevation: 2,
//     position: 'relative'
// }
// });

export default PriceList;
