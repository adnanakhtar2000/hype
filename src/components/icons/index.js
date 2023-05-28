import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from "@rneui/themed";
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, sizes, fontFamily } from '../../services';
import * as Animatable from 'react-native-animatable';
import { SmallText } from '../text';

export const BackIcon = props => {
    const { style, onPress, size } = props
    return (
        <Icon
            name="chevron-left"
            type="material"
            size={size ? size : totalSize(2.5)}
            //raised
            reverse
            reverseColor={colors.appColor1}
            color={colors.appBgColor1}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const NextIcon = props => {
    const { style, onPress, size } = props
    return (
        <Icon
            name="chevron-forward-outline"
            type="ionicon"
            size={size ? size : totalSize(3)}
            color={colors.appButton3}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const IconButton = ({ style, onPress, shadow, shadowColored, iconSize, iconColor, iconName, iconType, buttonColor, buttonSize }) => {
    const defaultButtonsize = totalSize(5)
    return (
        <TouchableOpacity
            onPress={onPress}
            style={
                [styles.IconButtonContainer,
                {
                    height: buttonSize ? buttonSize : defaultButtonsize,
                    width: buttonSize ? buttonSize : defaultButtonsize,
                    backgroundColor: buttonColor ? buttonColor : colors.appButton4
                },
                shadow ? appStyles.shadow : null,
                shadowColored ? appStyles.shadowColored : null,
                    style]
            }
        >
            <Icon
                name={iconName ? iconName : "heart-outline"}
                type={iconType ? iconType : "material-community"}
                size={iconSize ? iconSize : sizes.icons.large}
                color={iconColor ? iconColor : colors.appColor1}
            />
        </TouchableOpacity>
    );
}
export const MenuIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="menu"
            type="entypo"
            size={size ? size : totalSize(2.5)}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor3}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const EditLineIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="edit-3"
            type="feather"
            size={size ? size : totalSize(2.5)}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor3}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const ShareIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="share-2"
            type="feather"
            size={size ? size : totalSize(2.5)}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor3}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const MenuDotsIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="dots-horizontal"
            type="material-community"
            size={size ? size : totalSize(2.5)}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor3}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const PhoneIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="phone"
            type="material-community"
            size={size ? size : totalSize(2.5)}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor3}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const FilterIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="options"
            type="ionicon"
            size={size ? size : totalSize(2.5)}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor3}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const SearchIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="search"
            type="feather"
            size={size ? size : totalSize(2.5)}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor4}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const CloseIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="close"
            //  type="ionicon"
            size={size ? size : sizes.icons.large}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor4}
            iconStyle={style}
            onPress={onPress}
        />
    );
}

export const NotificationIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name={"bell"}
            type={'feather'}
            size={size ? size : sizes.icons.large}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor1}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const MessageIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name={"chatbubble-outline"}
            type={'ionicon'}
            size={size ? size : sizes.icons.large}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor1}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const CheckIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="check"
            //  type="ionicon"
            size={size ? size : sizes.icons.large}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor4}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const ChevronLeftIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="chevron-left"
            type="material"
            size={size ? size : sizes.icons.large}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor4}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const CurrentLocationIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="my-location"
            type="material"
            size={size ? size : sizes.icons.medium}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor4}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const AddIcon = props => {
    const { style, onPress, color, size } = props
    return (
        <Icon
            name="add"
            type="material"
            size={size ? size : sizes.icons.large}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={color ? color : colors.appTextColor4}
            iconStyle={style}
            onPress={onPress}
        />
    );
}

export const CustomIcon = props => {
    const { icon, size, animation, duration, color } = props
    const defaulSize = totalSize(5)
    return (
        <Animatable.View animation={animation} duration={duration}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{ height: size ? size : defaulSize, width: size ? size : defaulSize, tintColor: color }}
            />
        </Animatable.View>
    );
}
export const TouchableCustomIcon = props => {
    const { icon, size, animation, duration, color, onPress } = props
    const defaulSize = totalSize(5)
    return (
        <TouchableOpacity onPress={onPress}>
            <CustomIcon
                icon={icon}
                size={size}
                animation={animation}
                duration={duration}
                color={color}
            />
        </TouchableOpacity>
    );
}

export const IconWithText = ({ text, containerStyle, title, customIcon, onPress, tintColor, iconName, iconType, iconSize, textStyle, titleStyle, direction, iconStyle }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={[{ flexDirection: direction ? direction : 'row', alignItems: 'center', }, containerStyle]}>
            {
                customIcon ?
                    <CustomIcon icon={customIcon} size={iconSize ? iconSize : totalSize(2)} />
                    :
                    <Icon name={iconName ? iconName : 'email'} type={iconType ? iconType : 'material-community'} size={iconSize ? iconSize : totalSize(2)} color={tintColor ? tintColor : colors.appIcon1} iconStyle={iconStyle} />
            }
            <View style={direction === 'column' ? { marginVertical: height(1.5) } : { marginHorizontal: width(1) }}>
                {
                    title ?
                        <Text style={[appStyles.textRegular, { color: tintColor ? tintColor : colors.appTextColor1, fontFamily: fontFamily.appTextBold, marginBottom: 5 }, titleStyle]}>{title}</Text>
                        :
                        null
                }
                <SmallText style={[{ color: tintColor ? tintColor : colors.appTextColor1, }, textStyle]}>{text}</SmallText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    IconButtonContainer: {
        borderRadius: 100,
        ...appStyles.center,
    }
})