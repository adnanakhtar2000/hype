import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from "@rneui/themed";
import { height, totalSize, width } from 'react-native-dimension';
import { colors } from '../../services';

export const Spacer = props => {
    const { style, width, height } = props
    return (
        <View style={[{ height: height, width: width }, style]} />
    );
}