import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ViewPropTypes, ImageBackground } from 'react-native'
import { Icon } from "@rneui/themed";
import { height, totalSize, width } from 'react-native-dimension';
import { colors, sizes, appStyles, appImages } from '../../services';
import PropTypes from 'prop-types'
import { Wrapper, AbsoluteWrapper, RowWrapperBasic, ComponentWrapper } from '../wrappers';
import { color } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { IconWithText } from '../icons';

export const ImageRound = props => {
    const { style, size, source } = props
    const defaultSize = totalSize(4)
    return (
        <Image
            source={source}
            style={[{ height: size ? size : defaultSize, width: size ? size : defaultSize, borderRadius: 150 }, style]}
        />
    );
}
export const BackgroundImage = props => {
    const { children, height, width, style, size, source } = props
    const defaultSize = totalSize(14)
    return (
        <ImageBackground
            source={source}
            style={[{ height: height ? height : defaultSize, width: width ? width : defaultSize }, style]}
        >
            {children}
        </ImageBackground>
    );
}

export const ImageSqareRound = props => {
    const { style, size, source } = props
    const defaultSize = totalSize(5)
    return (
        <Image
            source={source}
            style={[{ height: size ? size : defaultSize, width: size ? size : defaultSize, borderRadius: 15 }, style]}
        />
    );
}
export const ImageSquared = props => {
    const { style, height, width, source } = props
    const defaultSize = totalSize(10)
    return (
        <Image
            // resizeMode='cover'
            source={source}
            style={[style, { height: height ? height : defaultSize, width: width ? width : defaultSize }]}
        />
    );
}

export const ImageProfile = ({ imageStyle, source, size, containerStyle, animation, onPress, tapToAdd }) => {
    const defaultSize = totalSize(15)
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress}>
            {
                tapToAdd ?
                    <Wrapper style={[styles.ImageProfile, appStyles.center, appStyles.shadow, { backgroundColor: colors.appBgColor3, height: size ? size : defaultSize, width: size ? size : defaultSize, }, imageStyle]}>
                        <ComponentWrapper>
                            <IconWithText
                                text="Tap to add profile image"
                                direction="column"
                                textStyle={[appStyles.textCenter]}
                                iconName="camera-outline"
                                tintColor={colors.appTextColor4}
                                onPress={onPress}
                            />
                        </ComponentWrapper>
                    </Wrapper>
                    :
                    <Wrapper animation={animation ? animation : 'zoomIn'} style={[styles.ImageProfileContainer, containerStyle]}>
                        <Image
                            source={source}
                            style={[styles.ImageProfile, { height: size ? size : defaultSize, width: size ? size : defaultSize, }, imageStyle]}
                        />
                    </Wrapper>
            }
        </TouchableOpacity>
    );
}

export const ImageBackgroundTop = ({ animation, imageStyle, source, containerStyle }) => {
    return (
        <AbsoluteWrapper animation={animation ? animation : null} style={[containerStyle]}>
            <Image
                source={source}
                style={[{ width: width(100), height: height(25) }, imageStyle]}
            />
            <AbsoluteWrapper style={{ top: 0, right: 0, bottom: 0, left: 0, }} >
                <LinearGradient colors={colors.gradiant2} style={{ flex: 1 }} />
            </AbsoluteWrapper>
        </AbsoluteWrapper>
    );
}

export const ImageMarker = props => {
    const { imageStyle, source, containerStyle, animation, onPress } = props
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress}>

            <Wrapper animation={animation ? animation : 'zoomIn'} style={[styles.imageMarkerContainer, containerStyle]}>
                <AbsoluteWrapper style={{ bottom: -totalSize(1.5), alignSelf: 'center', }}>
                    <Icon
                        name="location"
                        type="ionicon"
                        size={sizes.icons.medium}
                        color={colors.appTextColor6}
                    />
                </AbsoluteWrapper>
                <ImageRound
                    source={{ uri: source ? source : appImages.noUser }}
                    size={totalSize(4)}
                />
            </Wrapper>
        </TouchableOpacity>
    );
}

export const ImageGroup = ({ images, size }) => {
    const defaultSize = totalSize(5)
    return (
        <Wrapper>
            <RowWrapperBasic>
                {
                    images.map((item, key) => {
                        return (
                            <ImageRound
                                source={{ uri: item.image ? item.image : appImages.noUser }}
                                size={size ? size : defaultSize}
                                style={[{ marginLeft: size ? -(size / 3) : -(defaultSize / 3), borderWidth: 2, borderColor: colors.appBgColor1 }]}
                            />
                        )
                    })
                }
            </RowWrapperBasic>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    ImageProfileContainer: {
        ...appStyles.shadowColored,
        // backgroundColor:'transparent',
        borderRadius: 100,
        backgroundColor: colors.appBgColor1
    },
    ImageProfile: {
        width: totalSize(15),
        height: totalSize(15),
        borderRadius: 100,
        borderWidth: 5,
        borderColor: colors.appBgColor1,

    },
    ImageProfileOverlay: {
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    ImageCollectionItem: {
        width: width(32.5),
        height: height(20),
        borderRadius: 15,
    },
    imageMarkerContainer: {
        ...appStyles.shadow,
        // backgroundColor:'transparent',
        borderRadius: 100,
        backgroundColor: colors.appBgColor1,
        padding: 3
    },
})
