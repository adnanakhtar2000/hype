import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { ImageSquared, MainWrapper } from '../../../components'
import { appImages, appStyles, colors } from '../../../services'
import { height, width } from 'react-native-dimension'
import { routes } from '../../../services/constants'

const Splash = ({ navigation }) => {
    const { navigate } = navigation
    useEffect(() => {
        setTimeout(() => {
            navigate(routes.welcomeScreen)
        }, 1000);
    }, [])
    return (
        <MainWrapper style={[appStyles.mainContainer, appStyles.center]}>
            <StatusBar backgroundColor={colors.black} />
            <ImageSquared
                source={appImages.logo}
                height={width(50)}
                width={width(50)}
            />
        </MainWrapper>
    )
}

export default Splash