import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from "@rneui/themed";
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, fontSize, sizes, fontFamily } from '../../services';
import { ButtonTextRegular, ButtonTextMedium, MediumText } from '../text';
import { CustomIcon } from '../icons';
import { Wrapper, RowWrapperBasic, RowWrapper, ComponentWrapper } from '../wrappers';
import LinearGradient from 'react-native-linear-gradient';
import { TextInputBordered } from '../textInput';
import { LineHorizontal } from '../lines';
import { Spacer } from '../spacers';

export const ButtonColored = props => {
    const { text, animation, onPress, buttonStyle, textStyle, iconName, iconType, iconSize, buttonColor, iconStyle, tintColor } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <Wrapper animation={animation} style={[appStyles.buttonColord, { borderRadius: sizes.buttonRadius, height: height(7), backgroundColor: buttonColor ? buttonColor : colors.appButton1 }, appStyles.shadow, buttonStyle]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(3)}
                                color={tintColor ? tintColor : colors.appTextColor6}
                                iconStyle={[{ marginRight: width(5) }, iconStyle]}

                            />
                            :
                            null
                    }
                    <ButtonTextMedium style={[{ color: tintColor ? tintColor : colors.appTextColor1, }, textStyle]}>{text}</ButtonTextMedium>
                </View>
            </Wrapper>
        </TouchableOpacity>
    );
}

export const ButtonColoredSmall = props => {
    const { text, onPress, buttonStyle, customIcon, direction, textStyle, iconName, iconType, iconSize, iconColor, iconStyle } = props
    return (
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: sizes.buttonSmallRadius, paddingHorizontal: width(5), paddingVertical: height(1), backgroundColor: colors.appColor1 }, buttonStyle]}>
            <View style={{ flexDirection: direction ? direction : 'row', alignItems: 'center' }}>
                {
                    customIcon ?
                        <CustomIcon
                            icon={customIcon}
                            size={iconSize ? iconSize : totalSize(2)}
                            color={iconColor ? iconColor : colors.appTextColor6}
                        />
                        :
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(2)}
                                color={iconColor ? iconColor : colors.appTextColor6}
                                iconStyle={[{}, iconStyle]}
                            />
                            :
                            null
                }
                <ButtonTextRegular style={[{ color: colors.appTextColor6, }, textStyle]}>  {text}  </ButtonTextRegular>
            </View>
        </TouchableOpacity>
    );
}

export const ButtonBordered = props => {
    const { text, onPress, buttonStyle, textStyle, iconName, customIcon, iconType, iconSize, iconColor, iconStyle, tintColor } = props
    return (
        <TouchableOpacity onPress={onPress} style={[appStyles.buttonBorderd, { borderRadius: sizes.buttonRadius, height: height(7), borderColor: tintColor ? tintColor : colors.appColor1 }, buttonStyle]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    customIcon ?
                        <CustomIcon
                            icon={customIcon}
                            size={iconSize ? iconSize : totalSize(3)}
                            color={iconColor ? iconColor : null}
                            style={[{ marginRight: width(5) }, iconStyle]}
                        />
                        :
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(3)}
                                color={iconColor ? iconColor : tintColor ? tintColor : colors.appColor1}
                                iconStyle={[{ marginRight: width(5) }, iconStyle]}

                            />
                            :
                            null
                }
                <ButtonTextMedium style={[{ color: tintColor ? tintColor : colors.appColor1, }, textStyle]}>{text}</ButtonTextMedium>
            </View>
        </TouchableOpacity>
    );
}

export const ButtonBorderedSmall = props => {
    const { text, onPress, buttonStyle, rowReverse, textStyle, iconName, iconType, iconSize, iconColor, iconStyle, tintColor } = props
    return (
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: sizes.buttonSmallRadius, paddingHorizontal: width(5), paddingVertical: height(1), borderColor: tintColor ? tintColor : colors.appColor1, borderWidth: 1 }, buttonStyle]}>
            <View style={{ flexDirection: rowReverse ? 'row-reverse' : 'row', alignItems: 'center' }}>
                {
                    iconName ?
                        <Icon
                            name={iconName ? iconName : "email-outline"}
                            type={iconType ? iconType : "material-community"}
                            size={iconSize ? iconSize : totalSize(2)}
                            color={tintColor ? tintColor : colors.appColor1}
                            iconStyle={[{ marginHorizontal: width(2) }, iconStyle]}
                        />
                        :
                        null
                }
                <Text style={[appStyles.ButtonTextRegular, { color: tintColor ? tintColor : colors.appColor1, fontSize: fontSize.regular }, textStyle]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
export const ButtonArrowSimple = ({ text, onPress, animation, buttonStyle, duration, textStyle, iconName, iconType, iconSize, iconStyle, tintColor, right }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Wrapper animation={animation} duration={duration} style={[buttonStyle]} >
                <Spacer height={sizes.baseMargin} />
                <RowWrapper >
                    <Wrapper flex={1}>
                        <MediumText style={[{ color: tintColor ? tintColor : colors.appColor1, }, textStyle]}>{text}</MediumText>
                    </Wrapper>
                    <Wrapper style={[{ marginLeft: sizes.marginHorizontal }]}>
                        {
                            right ? right :
                                <Icon
                                    name={iconName ? iconName : "chevron-right"}
                                    type={iconType ? iconType : "material-community"}
                                    size={iconSize ? iconSize : sizes.icons.large}
                                    color={tintColor ? tintColor : colors.appTextColor5}
                                    iconStyle={[{}, iconStyle]}
                                />
                        }
                    </Wrapper>
                </RowWrapper>
                <Spacer height={sizes.baseMargin} />
            </Wrapper>
        </TouchableOpacity>
    );
}
export const ButtonArrowColored = props => {
    const { text, onPress, animation, buttonStyle, textStyle, iconName, iconType, iconSize, buttonColor, iconStyle, tintColor } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <ComponentWrapper animation={animation} style={[{ borderRadius: sizes.buttonRadius, backgroundColor: buttonColor ? buttonColor : colors.appButton1, paddingVertical: height(1.25) }, appStyles.shadow, buttonStyle]}>
                <RowWrapper>
                    <ButtonTextMedium style={[{ color: tintColor ? tintColor : colors.appTextColor1, }, textStyle]}>{text}</ButtonTextMedium>
                    <Icon
                        name={iconName ? iconName : "chevron-right"}
                        type={iconType ? iconType : "material-community"}
                        size={iconSize ? iconSize : sizes.icons.medium}
                        color={tintColor ? tintColor : colors.appTextColor6}
                        iconStyle={[{}, iconStyle]}
                    />
                </RowWrapper>
            </ComponentWrapper>
        </TouchableOpacity>
    );
}

export const ButtonGradiantColored = ({ text, animation, onPress, buttonStyle, textStyle, iconName, iconType, iconSize, buttonColors, iconStyle, tintColor }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Wrapper animation={animation} style={[appStyles.shadow]}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={buttonColors ? buttonColors : colors.gradiant1} style={[appStyles.buttonColord, { borderRadius: sizes.buttonRadius, height: height(7), }, buttonStyle]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {
                            iconName ?
                                <Icon
                                    name={iconName ? iconName : "email-outline"}
                                    type={iconType ? iconType : "material-community"}
                                    size={iconSize ? iconSize : totalSize(2.5)}
                                    color={tintColor ? tintColor : colors.appTextColor6}
                                    iconStyle={[{ marginRight: width(5) }, iconStyle]}

                                />
                                :
                                null
                        }
                        <ButtonTextMedium style={[{ color: tintColor ? tintColor : colors.appTextColor6, }, textStyle]}>{text}</ButtonTextMedium>
                    </View>
                </LinearGradient>
            </Wrapper>
        </TouchableOpacity>
    );
}
export const ButtonGradiantSmall = ({ text, buttonColors, onPress, buttonStyle, customIcon, direction, textStyle, iconName, iconType, iconSize, iconColor, iconStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <LinearGradient
                colors={buttonColors ? buttonColors : colors.gradiant1}
                style={[{ borderRadius: sizes.buttonSmallRadius, paddingHorizontal: width(5), paddingVertical: height(1), backgroundColor: colors.appColor1 }, buttonStyle]}>
                <View style={{ flexDirection: direction ? direction : 'row', alignItems: 'center' }}>
                    {
                        customIcon ?
                            <CustomIcon
                                icon={customIcon}
                                size={iconSize ? iconSize : totalSize(2)}
                                color={iconColor ? iconColor : colors.appTextColor6}
                            />
                            :
                            iconName ?
                                <Icon
                                    name={iconName ? iconName : "email-outline"}
                                    type={iconType ? iconType : "material-community"}
                                    size={iconSize ? iconSize : totalSize(2)}
                                    color={iconColor ? iconColor : colors.appTextColor6}
                                    iconStyle={[{}, iconStyle]}
                                />
                                :
                                null
                    }
                    <ButtonTextRegular style={[{ color: colors.appTextColor6, }, textStyle]}>  {text}  </ButtonTextRegular>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}
export const BackArrowButton = ({ onPress, style, size }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[appStyles.center, { borderRadius: sizes.ModalRadius, height: totalSize(5), width: totalSize(5), backgroundColor: colors.appButton4 }, style]}>
            <Icon
                name="chevron-back"
                type="ionicon"
                size={size ? size : sizes.icons.large}
                color={colors.appButton5}
            />
        </TouchableOpacity>
    )
}

export const AddButton = ({ onPress, style, size }) => {

    return (
        <TouchableOpacity onPress={onPress} style={[appStyles.center, { borderRadius: sizes.smallImageRadius, backgroundColor: colors.appBgColor2, height: totalSize(8), width: totalSize(8) }, style]}>
            <Icon
                name="add"
                type="ionicon"
                size={size ? size : sizes.icons.large}
                color={colors.appTextColor4}
            />
        </TouchableOpacity>
    )
}

export const ButtonSelectablePrimary = ({ animation, text, duration, isSelected, onPress }) => {
    return (
        <Wrapper animation={animation ? animation : "fadeInUp"} duration={duration}>
            <ButtonBordered
                text={text}
                onPress={onPress}
                buttonStyle={isSelected ? styles.selectedButtonSelectablePrimary : styles.buttonSelectablePrimary}
                tintColor={isSelected ? colors.appTextColor1 : colors.appBgColor3}
                textStyle={[{ fontFamily: fontFamily.appTextRegular }]}
            />
        </Wrapper>
    )
}


const styles = StyleSheet.create({
    //ButtonSelectablePrimary
    buttonSelectablePrimary: {
        //borderColor:colors.appBgColor3,
        marginBottom: sizes.marginBottom
    },
    selectedButtonSelectablePrimary: {
        // borderColor:colors.appTextColor1,
        backgroundColor: colors.appBgColor2,
        marginBottom: sizes.marginBottom
    }
})