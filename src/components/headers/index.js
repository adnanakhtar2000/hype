import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AbsoluteWrapper, ImageBackgroundWrapper, RowWrapper, RowWrapperBasic, Wrapper } from '../wrappers'
import { Icon } from "@rneui/themed";
import { appImages, appStyles, colors, sizes } from '../../services';
import { height, totalSize, width } from 'react-native-dimension';
import { SmallText, SmallTitle, TinyTitle } from '../text';
import { ImageRound, ImageSqareRound, ImageSquared } from '../images';
import { Spacer } from '../spacers';
import { MessageIcon, NotificationIcon } from '../icons';
import LinearGradient from 'react-native-linear-gradient';
import { LineHorizontal } from '../lines';
import { TextInputSearchColored } from '../textInput';

export const AuthHeader = ({ style, onPress, size, title }) => {
    return (
        <Wrapper>
            <Spacer height={sizes.smallMargin} />
            <RowWrapper>
                <Wrapper flex={1} style={{ alignItems: 'flex-start' }}>
                    <TouchableOpacity onPress={onPress} style={[appStyles.center, { height: totalSize(4), width: totalSize(4) }, style]}>
                        <Icon
                            name="chevron-back"
                            type="ionicon"
                            size={size ? size : sizes.icons.large}
                            color={colors.appButton3}
                        />
                    </TouchableOpacity>
                </Wrapper>
                <Wrapper flex={4} style={{ alignItems: 'center' }}>
                    <TinyTitle style={{ fontWeight: '700' }}>{title}</TinyTitle>
                </Wrapper>
                <Wrapper flex={1} />
            </RowWrapper>
            <Spacer height={sizes.smallMargin} />
            <LineHorizontal width={width(100)} height={1} color={colors.appBorder3} />
        </Wrapper>
    )
}

export const AppHeader = ({ onPressProfile, onPressMessages, onPressNotification, imageSource, notificationCount, messageCount }) => {
    return (
        <ImageBackgroundWrapper source={appImages.loginBG} style={{ flex: null }}>
            <Wrapper style={{ backgroundColor: colors.appBgColor6 }}>
                <Spacer height={sizes.baseMargin} />
                <RowWrapper style={{ alignItems: 'flex-start' }}>
                    <Wrapper flex={1.5} style={{ alignItems: 'flex-start' }}>
                        <TouchableOpacity onPress={onPressProfile} style={[appStyles.center,
                        { backgroundColor: colors.appBorder1, borderRadius: totalSize(3), padding: 2 }]}>
                            <ImageRound source={imageSource} size={totalSize(5)} />
                        </TouchableOpacity>
                    </Wrapper>
                    <Wrapper flex={4} style={{ alignItems: 'center' }}>
                        <ImageSquared
                            style={{ marginTop: 20 }}
                            source={appImages.homeLogo}
                            height={71}
                            width={125} />
                    </Wrapper>
                    <Wrapper flex={1.5} >
                        <RowWrapperBasic style={{
                            marginTop: 10,
                            alignItems: 'center', width: '100%',
                            justifyContent: 'space-around'
                        }}>
                            <Wrapper>
                                <NotificationIcon onPress={onPressNotification} />
                                <AbsoluteWrapper style={{ top: -5, right: -5 }}>
                                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={colors.gradiant1} style={[appStyles.center,
                                    { borderRadius: sizes.buttonRadius, width: totalSize(2), height: totalSize(2) }]}>
                                        <SmallText style={{ color: colors.appTextColor4 }}>{notificationCount}</SmallText>
                                    </LinearGradient>
                                </AbsoluteWrapper>
                            </Wrapper>
                            <Wrapper>
                                <MessageIcon onPress={onPressMessages} />
                                <AbsoluteWrapper style={{ top: -5, right: -5 }}>
                                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={colors.gradiant1} style={[appStyles.center,
                                    { borderRadius: sizes.buttonRadius, width: totalSize(2), height: totalSize(2) }]}>
                                        <SmallText style={{ color: colors.appTextColor4 }}>{messageCount}</SmallText>
                                    </LinearGradient>
                                </AbsoluteWrapper>
                            </Wrapper>
                        </RowWrapperBasic>
                    </Wrapper>
                </RowWrapper>
                <Spacer height={sizes.baseMargin} />
                <TextInputSearchColored
                    placeholder={"Search for artists or genres"} />
                <Spacer height={sizes.baseMargin} />
                <LineHorizontal width={width(100)} height={1} color={colors.appBorder3} />
            </Wrapper>
        </ImageBackgroundWrapper>
    )
}

