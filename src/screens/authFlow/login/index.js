import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AbsoluteWrapper, BackArrowButton, BackgroundImage, ButtonColored, ButtonGradiantColored, ComponentWrapper, ImageBackgroundWrapper, ImageSquared, KeyboardAvoidingScrollView, MainWrapper, MediumText, MediumTitle, SmallText, Spacer, TextInputBordered, TinyTitle, Wrapper } from '../../../components'
import { appImages, appStyles, routes, sizes } from '../../../services'
import { height, width } from 'react-native-dimension'

const Login = ({ navigation }) => {
    const { navigate } = navigation
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const HandleLogin = () => {
        console.log('user :', userName, password)
        navigate(routes.appStack)
    }
    return (
        <MainWrapper style={appStyles.mainContainer}>
            <KeyboardAvoidingScrollView>
                <ImageBackgroundWrapper
                    style={[{ height: height(30), width: width(100) }, appStyles.center]}
                    source={appImages.loginBG} >
                    <ImageSquared
                        source={appImages.logo}
                        height={width(28)}
                        width={width(28)}
                    />

                </ImageBackgroundWrapper>
                <Spacer height={sizes.doubleBaseMargin} />
                <Wrapper style={appStyles.center}>
                    <MediumTitle>Log in to your account</MediumTitle>
                    <Spacer height={sizes.doubleBaseMargin} />
                </Wrapper>
                <TextInputBordered
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                    placeholder={'Enter name'}
                    title={'Username'} />
                <Spacer height={sizes.baseMargin} />
                <TextInputBordered
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder={'******'}
                    secureTextEntry
                    title={'Password'} />
                <Spacer height={sizes.baseMargin * 1.5} />
                <ButtonGradiantColored
                    onPress={HandleLogin}
                    text={'Log In'} />
                <Spacer height={sizes.doubleBaseMargin} />
                <Wrapper style={appStyles.center}>
                    <TinyTitle
                        onPress={() => navigate(routes.forgotPassword)}
                    >Forgot Password?</TinyTitle>
                    <Spacer height={sizes.doubleBaseMargin * 2} />
                    <MediumText>Don’t have an account yet?</MediumText>
                    <Spacer height={sizes.baseMargin} />
                </Wrapper>
                <ButtonColored onPress={() => navigate(routes.signup)}
                    text={'Create an account'} />
                <Spacer height={sizes.baseMargin} />
            </KeyboardAvoidingScrollView>
            <AbsoluteWrapper flex={1} style={styles.absoluteWrapper}>
                <BackArrowButton onPress={() => navigation.goBack()} />
            </AbsoluteWrapper>
        </MainWrapper>
    )
}

export default Login
const styles = StyleSheet.create({
    absoluteWrapper: {
        top: 20, left: 10
    }
})