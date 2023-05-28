import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { AuthHeader, ButtonGradiantColored, ComponentWrapper, ImageSqareRound, MainWrapper, MediumTitle, Spacer, TextInputBordered, TinyText, Wrapper } from '../../../components'
import { appImages, appStyles, colors, sizes } from '../../../services'
import { BottomSheetPrimary } from '../../../components/bottomSheets'
import RBSheet from "react-native-raw-bottom-sheet";
import { totalSize } from 'react-native-dimension'


const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('')

    const refRBSheetForgotPw = useRef();

    const HandleContinue = () => {
        refRBSheetForgotPw.current.close()
    }
    const HandleSendLink = () => {
        console.log('Email', email)
        refRBSheetForgotPw.current.open()
    }
    return (
        <MainWrapper style={appStyles.mainContainer}>
            <AuthHeader
                onPress={() => navigation.goBack()}
                title={'Reset Password'} />
            <Spacer height={sizes.doubleBaseMargin} />
            <ComponentWrapper>
                <MediumTitle>Enter your email to reset your password</MediumTitle>
            </ComponentWrapper>
            <Spacer height={sizes.doubleBaseMargin} />
            <TextInputBordered
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder={'johndoe@email.com'}
                title={'Email'} />
            <Spacer height={sizes.doubleBaseMargin} />
            <ButtonGradiantColored
                onPress={HandleSendLink}
                text={'Send Password Reset Link'} />
            <RBSheet
                customStyles={{ container: appStyles.rbSheetContainer }}
                ref={refRBSheetForgotPw}
                height={totalSize(40)}
            >
                <ComponentWrapper style={appStyles.center}>
                    {/* <Spacer height={sizes.baseMargin} /> */}
                    <ImageSqareRound source={appImages.Checkmark} size={totalSize(9)} />
                    <Spacer height={sizes.baseMargin} />
                    <MediumTitle>A link has been sent to your email to reset your password</MediumTitle>
                    <Spacer height={sizes.doubleBaseMargin * 1.2} />
                </ComponentWrapper>
                <ButtonGradiantColored text={'Continue'} onPress={HandleContinue} />
            </RBSheet>
        </MainWrapper>
    )
}

export default ForgotPassword