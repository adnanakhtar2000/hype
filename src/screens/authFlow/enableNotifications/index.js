import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ButtonGradiantColored, ComponentWrapper, ImageSqareRound, KeyboardAvoidingScrollView, LargeTitle, MainWrapper, MediumText, MediumTitle, Spacer, TouchableText, Wrapper } from '../../../components'
import { appImages, appStyles, routes, sizes } from '../../../services'
import { height, totalSize } from 'react-native-dimension'

const EnableNotification = ({ navigation }) => {
    const { navigate } = navigation
    const HandleEnableNotification = () => {
        navigate(routes.appStack)
    }
    return (
        <MainWrapper style={appStyles.mainContainer}>
            <Spacer height={sizes.baseMargin} />
            <KeyboardAvoidingScrollView>
                <Spacer height={sizes.baseMargin} />
                <ComponentWrapper>
                    <LargeTitle>Enable Notifications</LargeTitle>
                    <Spacer height={sizes.baseMargin} />
                    <MediumText>By enabling notification you won’t miss any updates</MediumText>
                    <Wrapper style={[appStyles.center, { height: totalSize(50) }]}>
                        <ImageSqareRound size={totalSize(25)}
                            source={appImages.bell} />
                    </Wrapper>
                    <ButtonGradiantColored
                        onPress={HandleEnableNotification}
                        text={'Enable'} />
                    <Wrapper style={appStyles.center}>
                        <Spacer height={sizes.doubleBaseMargin} />
                        <TouchableText
                            onPress={() => navigate(routes.appStack)}
                            style={[styles.touchableText]}>Skip For Now</TouchableText>
                    </Wrapper>
                    <Spacer height={sizes.baseMargin} />
                </ComponentWrapper>
            </KeyboardAvoidingScrollView>
        </MainWrapper>
    )
}

export default EnableNotification
const styles = StyleSheet.create({
    touchableText: { fontSize: totalSize(2) }
})