import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Card = (props) => {

    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
        );
};

const styles = StyleSheet.create({
  containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,

      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 2,

      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
},
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
});

export default Card;
