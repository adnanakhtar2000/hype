import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import { Icon } from "@rneui/themed";
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, sizes, fontSize } from '../../services';
import { InputTitle, RegularText, MediumText, SmallText, TinyText } from '../text';
import { ComponentWrapper, Wrapper, RowWrapperBasic } from '../wrappers';
import { Spacer } from '../spacers';
//import TextInputBordered from './textInputBordered'
import * as Animatable from 'react-native-animatable'
import { IconWithText, SearchIcon, IconButton } from '../icons';
import { styles } from './styles';
import { Swipeable } from 'react-native-gesture-handler'

const TextInputColored = ({ iconName, ref, iconType, left, onPress, title, isButton, titleStyle, placeholder, editable, animation, multiline, onFocus, onBlur, onChangeText, secureTextEntry, value, iconColor, iconSize, containerStyle, inputContainerStyle, onPressIcon, inputStyle, right, keyboardType, iconStyle, placeholderTextColor }) => {
    var focused = false
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={[containerStyle]}>
            {
                title ?
                    <ComponentWrapper style={{}}>
                        <InputTitle style={[{ marginLeft: width(2.5) }, titleStyle]}>{title}</InputTitle>
                        <Spacer height={sizes.TinyMargin} />
                    </ComponentWrapper>
                    :
                    null
            }
            <Animatable.View animation={animation} style={[appStyles.inputContainerColored, {
                borderRadius: sizes.inputRadius,
                backgroundColor: colors.appBgColor1,
            }, appStyles.shadow, inputContainerStyle]}>
                {
                    left ? left : null
                }
                <View style={{ flex: 8 }}>
                    {
                        isButton ?
                            <ComponentWrapper>
                                <Spacer height={sizes.baseMargin} />
                                <RegularText style={value ? null : appStyles.textGray}>{value ? value : placeholder}</RegularText>
                                <Spacer height={sizes.baseMargin} />
                            </ComponentWrapper>
                            :
                            <TextInput
                                ref={ref}
                                onChangeText={onChangeText}
                                value={value}
                                placeholder={placeholder}
                                editable={editable}
                                multiline={multiline}
                                placeholderTextColor={placeholderTextColor ? placeholderTextColor : '#21212180'}
                                keyboardType={keyboardType}
                                onFocus={() => focused = true, onFocus}
                                onBlur={() => focused = false, onBlur}
                                secureTextEntry={secureTextEntry}
                                style={[appStyles.inputField, { width: null, height: height(6), paddingHorizontal: width(5) }, inputStyle]}
                            />
                    }
                </View>
                {
                    right ?
                        right
                        :
                        iconName ?
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <Icon name={iconName} type={iconType} size={iconSize ? iconSize : sizes.icons.medium} color={iconColor ? iconColor : colors.appTextColor5} iconStyle={iconStyle} onPress={onPressIcon} />
                            </View>
                            :
                            null
                }
            </Animatable.View>
        </TouchableOpacity>
    );
}

const TextInputBordered = ({ iconName, error, iconType, required, left, onPress, content, keyboardType, title, isButton, titleStyle, placeholder, editable, animation, multiline, onFocus, buttonContentStyle, onBlur, onChangeText, secureTextEntry, value, iconColor, iconSize, containerStyle, inputContainerStyle, onPressIcon, inputStyle, right, iconStyle }) => {
    var focused = false
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}

        >
            <Wrapper animation={animation} style={[styles.textInputBorderedContainer, containerStyle]}>
                {
                    title ?
                        <ComponentWrapper style={{ marginHorizontal: 5 }}>
                            <Spacer height={sizes.smallMargin} />
                            <InputTitle style={[titleStyle, { color: colors.appTextColor1 }]}>
                                {title}
                                {
                                    required ?
                                        <RegularText style={{ color: colors.error }}> *</RegularText>
                                        :
                                        null
                                }
                            </InputTitle>

                        </ComponentWrapper>
                        :
                        null
                }
                <RowWrapperBasic style={[{
                    borderRadius: sizes.inputRadius,
                    borderWidth: 0,
                    borderColor: colors.appTextColor5
                }, inputContainerStyle]}>
                    {
                        left ? left : null
                    }
                    <View style={{ flex: 8 }}>
                        {
                            isButton ?
                                content ?
                                    content
                                    :
                                    <ComponentWrapper style={[{ paddingVertical: sizes.baseMargin }, buttonContentStyle]}>
                                        <RegularText style={value ? null : appStyles.textGray}>{value ? value : placeholder}</RegularText>
                                    </ComponentWrapper>
                                :
                                <TextInput
                                    onChangeText={onChangeText}
                                    value={value}
                                    placeholder={placeholder}
                                    editable={editable}
                                    keyboardType={keyboardType}
                                    multiline={multiline}
                                    placeholderTextColor={'#5d5d5d'}
                                    onFocus={() => focused = true, onFocus}
                                    onBlur={() => focused = false, onBlur}
                                    secureTextEntry={secureTextEntry}
                                    style={[appStyles.inputField, { width: null, height: height(6) }, inputStyle]}
                                />
                        }
                    </View>
                    {
                        right ?
                            right
                            :
                            iconName ?
                                <View style={{ flex: 2, alignItems: 'center' }}>
                                    <Icon name={iconName} type={iconType} size={iconSize ? iconSize : sizes.icons.medium} color={iconColor ? iconColor : colors.appTextColor5} iconStyle={iconStyle} onPress={onPressIcon} />
                                </View>
                                :
                                null
                    }

                </RowWrapperBasic>
            </Wrapper>
            {
                error ?
                    <ComponentWrapper style={{ marginLeft: width(7.5) }} animation="shake">
                        <Spacer height={sizes.TinyMargin} />
                        <IconWithText
                            iconName="alert-circle-outline"
                            //title="New"
                            text={error}
                            tintColor={colors.error}
                            iconSize={sizes.icons.small}
                            textStyle={[{ fontSize: fontSize.small }]}
                        />
                    </ComponentWrapper>
                    :
                    null
            }
        </TouchableOpacity>
    );
}

const TextInputChat = ({ onSend, onChangeText, value, onRecorde, isRecording, onStartRecording, onEndRecording, onFocus, onSwipeLeft }) => {
    return (
        <TextInputBordered
            placeholder="Write a message"
            //iconName={value ? "send" : 'mic'}
            iconType="feather"
            multiline
            onFocus={onFocus}
            value={value}
            iconColor={value ? colors.appColor1 : colors.appTextColor5}
            inputStyle={{ height: null, backgroundColor: 'transparent', paddingVertical: Platform.OS === 'ios' ? height(2) : null, fontSize: fontSize.regular }}
            inputContainerStyle={[{ alignItems: 'flex-end' }]}
            containerStyle={{ marginVertical: height(2), borderColor: isRecording || value ? colors.appTextColor1 : colors.appTextColor5, }}
            iconStyle={{ marginVertical: height(2) }}
            onChangeText={onChangeText}
            onPressIcon={value ? onSend : onRecorde}
            isButton={isRecording}
            content={
                isRecording ?
                    <Swipeable
                        renderRightActions={() => <Wrapper flex={1} style={{ backgroundColor: 'transparent' }}></Wrapper>}
                        onSwipeableRightOpen={onSwipeLeft}
                    >
                        <Wrapper animation="fadeInRight" style={{ margin: totalSize(1), marginRight: 0, backgroundColor: 'transparent' }}>
                            <RowWrapperBasic>
                                <IconButton
                                    iconName="trash-2"
                                    iconType={'feather'}
                                    buttonColor={'lightpink'}
                                    buttonSize={sizes.icons.xl}
                                    iconSize={sizes.icons.medium}
                                // iconColor={colors.appTextColor4}
                                />
                                <Spacer width={sizes.smallMargin} />
                                <MediumText>00:03</MediumText>
                                <Spacer width={sizes.smallMargin} />
                                <SmallText style={[appStyles.textGray]}>Swipe left to cancel, release to send</SmallText>
                            </RowWrapperBasic>
                        </Wrapper>
                    </Swipeable>
                    :
                    null
            }
            right={
                isRecording ?
                    null
                    :
                    <Wrapper style={{ margin: totalSize(1.5), }}>
                        {
                            value ?
                                <Icon
                                    name="send"
                                    type="feather"
                                    color={value ? colors.appColor1 : colors.appTextColor5}
                                    onPress={onSend}
                                />
                                :
                                <TouchableOpacity
                                    onPressIn={onStartRecording}
                                    onPressOut={onEndRecording}
                                >

                                    <Icon
                                        name="mic"
                                        type="feather"
                                        color={colors.appTextColor5}
                                    />

                                </TouchableOpacity>
                        }
                    </Wrapper>
            }

        />
    )
}

const TextInputSimple = ({ onChangeText, autoFocus, value, error, placeholder, editable, keyboardType, multiline, onFocus, onBlur, secureTextEntry, inputStyle }) => {
    return (
        <Wrapper>
            <TextInput
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                multiline={multiline}
                placeholderTextColor={'#21212180'}
                onFocus={onFocus}
                onBlur={onBlur}
                autoFocus={autoFocus}
                secureTextEntry={secureTextEntry}
                style={[appStyles.inputField, { width: null, height: height(6), marginHorizontal: sizes.marginHorizontal }, inputStyle]}
            />
            {
                error ?
                    <ComponentWrapper style={{ marginLeft: width(7.5) }} animation="shake">
                        <Spacer height={sizes.TinyMargin} />
                        <IconWithText
                            iconName="alert-circle-outline"
                            //title="New"
                            text={error}
                            tintColor={colors.error}
                            iconSize={sizes.icons.small}
                            textStyle={[{ fontSize: fontSize.small }]}
                        />
                    </ComponentWrapper>
                    :
                    null
            }
        </Wrapper>
    )
}

const TextInputSearchColored = ({ placeholder, onChangeText, value, onPressSearch, animation }) => {
    return (
        <TextInputColored
            inputContainerStyle={{ backgroundColor: colors.appButton1, height: height(7) }}
            placeholderTextColor={colors.appColor3}
            placeholder={placeholder ? placeholder : "Search"}
            onChangeText={onChangeText}
            value={value}
            animation={animation}
            left={
                <SearchIcon
                    color={colors.appColor3}
                    style={{ marginLeft: sizes.marginHorizontal }}
                    onPress={onPressSearch}
                />
            }
        />
    )
}
export { TextInputColored, TextInputBordered, TextInputChat, TextInputSimple, TextInputSearchColored }