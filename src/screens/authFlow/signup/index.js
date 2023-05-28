import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AbsoluteWrapper, AuthHeader, ButtonGradiantColored, KeyboardAvoidingScrollView, MainWrapper, RegularText, RowWrapper, Spacer, TextInputBordered, TouchableText, Wrapper } from '../../../components'
import { appStyles, colors, sizes } from '../../../services'
import { routes } from '../../../services/constants'
import RoundCheckbox from '../../../components/roundCheckBox'

const SignUp = ({ navigation }) => {
    const [termsConditions, setTermsConditions] = useState(false)
    const { navigate } = navigation
    const HandleRegister = () => {
        navigate(routes.enableNotification)
    }
    return (
        <MainWrapper style={appStyles.mainContainer}>
            <KeyboardAvoidingScrollView>
                <AuthHeader title={'Create an account'}
                    onPress={() => navigation.goBack()} />
                <Spacer height={sizes.doubleBaseMargin} />
                <TextInputBordered
                    placeholder={'Enter name'}
                    title={'Username'} />
                <Spacer height={sizes.baseMargin} />
                <TextInputBordered
                    placeholder={'johndoe@email.com'}
                    title={'Email'} />
                <Spacer height={sizes.baseMargin} />
                <TextInputBordered
                    placeholder={'******'}
                    title={'Password'} />
                <Spacer height={sizes.baseMargin} />
                <TextInputBordered
                    placeholder={'******'}
                    title={'Password'} />
                <Spacer height={sizes.baseMargin} />
                <RowWrapper>
                    <Wrapper flex={1}>
                        <RoundCheckbox
                            size={24}
                            checked={termsConditions}
                            onValueChange={(newValue) => setTermsConditions(newValue)}
                            borderColor={colors.appButton2}
                            backgroundColor={colors.appButton2}
                            styles={{ justifyContent: 'center', alignItems: 'center' }}
                        />
                    </Wrapper>
                    <Wrapper flex={8}>
                        <RegularText>I accept the
                            <TouchableText onPress={() => navigate(routes.termsAndConditions)}
                                style={styles.termsText}> Terms and Conditions </TouchableText>
                            and
                            <TouchableText onPress={() => navigate(routes.privacyPolicy)}
                                style={styles.termsText}> Privacy Policy</TouchableText>
                        </RegularText>
                    </Wrapper>
                </RowWrapper>
                <Spacer height={sizes.doubleBaseMargin * 4} />
                <ButtonGradiantColored
                    onPress={HandleRegister}
                    text={'Register'} />
                <Spacer height={sizes.baseMargin} />
            </KeyboardAvoidingScrollView>
        </MainWrapper>
    )
}
export default SignUp
const styles = StyleSheet.create({
    termsText: {
        color: colors.appTextColor3,
        fontWeight: '700'
    }
})