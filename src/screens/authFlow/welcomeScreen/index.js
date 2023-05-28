import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ButtonColored, ButtonGradiantColored, ImageBackgroundWrapper, ImageRound, ImageSquared, KeyboardAvoidingScrollView, LineHorizontal, MainWrapper, MediumText, RegularText, RowWrapper, SmallTitle, Spacer, Wrapper } from '../../../components'
import { appIcons, appImages, appStyles, colors, sizes } from '../../../services'
import { height, totalSize, width } from 'react-native-dimension'
import { routes } from '../../../services/constants'

const WelcomeScreen = ({ navigation }) => {
    const { navigate } = navigation
    return (
        <MainWrapper style={appStyles.mainContainer}>
            <KeyboardAvoidingScrollView>
                <Wrapper style={[appStyles.center]}>
                    <ImageBackgroundWrapper
                        style={[{ height: height(65), width: width(100) }, appStyles.center]}
                        source={appImages.welcomeBG} >
                        <ImageSquared
                            source={appImages.logo}
                            height={width(50)}
                            width={width(50)}
                        />

                    </ImageBackgroundWrapper>
                </Wrapper>
                <Spacer height={sizes.doubleBaseMargin} />
                <ButtonGradiantColored
                    onPress={() => navigate(routes.authStack)}
                    text={'Log in to Your account'}
                />
                <Spacer height={sizes.baseMargin * 1.5} />
                <Wrapper style={appStyles.center}>
                    <MediumText>Create an account</MediumText>
                    <Spacer height={sizes.baseMargin * 1.5} />
                    <LineHorizontal color={colors.appColor2} height={1} width={'80%'} />
                    <Spacer height={sizes.baseMargin * 1.5} />
                    <RegularText>Or continue with</RegularText>
                </Wrapper>
                <Spacer height={sizes.baseMargin} />
                <RowWrapper style={styles.socialRowWrapper}>
                    <Wrapper style={styles.socialButtonWrapper}>
                        <ImageRound size={totalSize(3.5)} source={appIcons.google} />
                    </Wrapper>
                    <Wrapper style={styles.socialButtonWrapper}>
                        <ImageRound size={totalSize(3.5)} source={appIcons.facebook} />
                    </Wrapper>
                </RowWrapper>
                <Spacer height={sizes.doubleBaseMargin / 1.5} />
                <ButtonColored text={'Browse Talent'} />
                <Spacer height={sizes.doubleBaseMargin} />
            </KeyboardAvoidingScrollView>
        </MainWrapper>
    )
}

export default WelcomeScreen
const styles = StyleSheet.create({
    socialButtonWrapper: {
        backgroundColor: colors.appColor1,
        height: totalSize(6),
        width: totalSize(6),
        borderRadius: totalSize(3),
        ...appStyles.center,
        ...appStyles.shadow,
    },
    socialRowWrapper: {
        alignSelf: 'center',
        width: 120
    },
})