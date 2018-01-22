import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

const CardSection = (props) => {

    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
        );
};

const styles = StyleSheet.create({
  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
}
});

export default CardSection;
