import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { AppHeader, BrowseTalentList, KeyboardAvoidingScrollView, LineHorizontal, MainWrapper, NextIcon, RecentTelentList, RowWrapper, Spacer, TextInputSearchColored, TinyTitle, Wrapper } from '../../../components'
import { appImages, colors, routes, sizes } from '../../../services'
import { width } from 'react-native-dimension'
import { RenderBrowseTalent, RenderRecentTalents } from '../../../components/renders'

const Home = ({ navigation }) => {
    const { navigate } = navigation
    const [recentTalents, setRecentTalents] = useState([
        { id: '1', image: appImages.user01, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
        { id: '2', image: appImages.user02, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
        { id: '3', image: appImages.user01, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
        { id: '4', image: appImages.user02, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
    ])
    return (
        <MainWrapper>
            <KeyboardAvoidingScrollView>

                <AppHeader
                    imageSource={appImages.user}
                    notificationCount={'5'}
                    messageCount={'3'} />
                <RowWrapper >
                    <TinyTitle>Recent Talents</TinyTitle>
                    <NextIcon onPress={() => navigate(routes.recentTelent)} />
                </RowWrapper>
                <Spacer height={sizes.smallMargin} />
                <RenderRecentTalents data={recentTalents} />
                <Spacer height={sizes.baseMargin * 1.5} />
                <RowWrapper>
                    <TinyTitle>Browse Talent</TinyTitle>
                </RowWrapper>
                <Spacer height={sizes.smallMargin} />
                <RenderBrowseTalent data={recentTalents} />
            </KeyboardAvoidingScrollView>
        </MainWrapper>
    )
}

export default Home