import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Card from './Card'
import { GetCurrencyName } from './Currency'
import CardSection from './CardSection'

const CurrencyStats = (props) => {

const {
    currencySymbolStyle,
    currencyNameStyle,
    currencySymbolTextStyle,
    currenctNameTextStyle,
    currencyPriceTextStyle,
    currencyPriceViewStyle,
    currencyDetailStyleKey,
    currencyDetailStyleLeft,
    currencyDetailStyleRight
} = styles;

return (
        <Card>
            <CardSection>
                <View style={currencyNameStyle}>
                    <Text style={currenctNameTextStyle}>
                        {GetCurrencyName(props.currency.symbol)}
                    </Text>
                </View>
                <View style={currencySymbolStyle}>
                    <Text style={currencySymbolTextStyle}>
                        {props.currency.symbol}
                    </Text>
                </View>
            </CardSection>
            <CardSection>
                <View style={currencyPriceViewStyle}>
                    <Text style={currencyPriceTextStyle}>
                        ₹{props.currency.price}
                    </Text>
                </View>
            </CardSection>
            <CardSection>
                <View style={currencyDetailStyleLeft}>
                    <Text style={currencyDetailStyleKey}>Min(24 Hrs): </Text><Text>₹{props.currency.stats.min_24hrs}</Text>
                </View>
                <View style={currencyDetailStyleRight}>
                    <Text style={currencyDetailStyleKey}>Max(24 Hrs): </Text><Text>₹{props.currency.stats.max_24hrs}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    currencySymbolStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    currencyNameStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    currencySymbolTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Cochin'
    },
    currenctNameTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        // fontFamily: 'Cochin'
    },
    currencyPriceViewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    currencyPriceTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    currencyDetailStyleKey: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        fontWeight: 'bold',
    },
    currencyDetailStyleLeft: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    currencyDetailStyleRight: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
};

export default CurrencyStats;
