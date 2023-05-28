import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from "@rneui/themed";
import { height, totalSize, width } from 'react-native-dimension';
import { colors } from '../../services';

export const LineHorizontal = props => {
    const { style, height, color, width } = props
    return (
        <View style={[{ height: height ? height : 0.5, backgroundColor: color ? color : colors.appTextColor5, width: width ? width : null }, style]} />
    );
}