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
    symbolTextStyle,
    currencyPriceTextStyle,
    currencyPriceViewStyle
} = styles;

return (
        <Card>
            <CardSection>
                <View style={currencySymbolStyle}>
                    <Text style={symbolTextStyle}>
                        {props.currency.symbol}
                    </Text>
                </View>
                <View style={currencyNameStyle}>
                    <Text>{GetCurrencyName(props.currency.symbol)}</Text>
                </View>
            </CardSection>
            <CardSection>
                <View style={currencyPriceViewStyle}>
                    <Text style={currencyPriceTextStyle}>
                        {props.currency.price}
                    </Text>
                </View>
            </CardSection>
            // <CardSection>
            //     <View style={currencyPriceViewStyle}>
            //         <Text>{props.currency.stats.min_24hrs}
            //         </Text>
            //     </View>
            //     <View style={currencyPriceViewStyle}>
            //         <Text style={currencyPriceTextStyle}>
            //             {props.currency.price}
            //         </Text>
            //     </View>
            // </CardSection>
        </Card>
    );
};

const styles = {
    currencySymbolStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    currencyNameStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    symbolTextStyle: {
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
    }
};

export default CurrencyStats;
