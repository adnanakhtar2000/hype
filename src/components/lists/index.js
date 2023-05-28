import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AbsoluteWrapper, ComponentWrapper, ImageBackgroundWrapper, Wrapper } from '../wrappers'
import { appImages, appStyles, colors, sizes } from '../../services'
import { ImageSquared } from '../images'
import { LargeText, MediumText, RegularText, SmallText, TinyTitle } from '../text'
import { height, totalSize, width } from 'react-native-dimension'
import { Spacer } from '../spacers'
import { IconButton, IconWithText } from '../icons'

export const RecentTelentList = ({ style, image, title, rate, location, type, onPress }) => {
    return (
        <Wrapper style={[styles.telentListWrapper, style]}>
            <TouchableOpacity activeOpacity={.8} onPress={onPress}>
                <ImageSquared width={'99.5%'} height={'56%'}
                    style={styles.telentListImage}
                    source={image} />
                <ComponentWrapper style={{ marginHorizontal: width(2) }}>
                    <Spacer height={sizes.smallMargin} />
                    <TinyTitle>{title}</TinyTitle>
                    <Spacer height={sizes.smallMargin} />
                    <RegularText style={{ color: colors.appTextColor3, fontWeight: '700' }}>${rate}/hour</RegularText>
                    <Spacer height={sizes.smallMargin} />
                    <IconWithText
                        iconName={'map-pin'}
                        iconType={'feather'}
                        text={location} />
                    <Spacer height={sizes.smallMargin} />
                    <IconWithText
                        iconName={'staro'}
                        iconType={'antdesign'}
                        text={type} />
                    <Spacer height={sizes.smallMargin} />
                </ComponentWrapper>
                <AbsoluteWrapper style={[{ top: 5, right: 5 }]}>
                    <IconButton />
                </AbsoluteWrapper>
            </TouchableOpacity>
        </Wrapper>
    )
}

export const BrowseTalentList = ({ image, type }) => {
    return (
        <Wrapper>
            <ImageBackgroundWrapper
                imageStyle={{ borderRadius: sizes.telentListRadius }}
                style={{ height: width(44), width: width(44), flex: null, margin: height(1.5) }}
                source={image} >
                <Wrapper style={[{ alignItems: 'center', height: '95%', justifyContent: 'flex-end' }]}>
                    <MediumText style={{ color: colors.appTextColor7 }}>{type}</MediumText>
                </Wrapper>
            </ImageBackgroundWrapper>

        </Wrapper>
    )
}

const styles = StyleSheet.create({
    telentListWrapper: {
        width: width(40),
        height: width(65),
        marginHorizontal: height(1),
        backgroundColor: colors.appBgColor7,
        borderRadius: sizes.telentListRadius
    },
    telentListImage: {
        borderTopLeftRadius: sizes.telentListRadius,
        borderTopRightRadius: sizes.telentListRadius,
    },
    roundBackground: {
        borderRadius: 50,
        padding: 25,
        backgroundColor: colors.appBgColor8
    }
})