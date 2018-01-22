import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    // flex: 1,
    fontSize: 20,
},
viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width:2, height:2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
}
});

export default Header;
