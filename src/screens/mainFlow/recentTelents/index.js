import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { AuthHeader, ComponentWrapper, MainWrapper, Spacer } from '../../../components'
import { appImages, sizes } from '../../../services'
import { RenderRecentTalentsAll } from '../../../components/renders'

const RecentTelent = ({ navigation }) => {
    const [recentTalents, setRecentTalents] = useState([
        { id: '1', image: appImages.user01, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
        { id: '4', image: appImages.user02, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
        { id: '2', image: appImages.user02, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
        { id: '3', image: appImages.user01, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
        { id: '5', image: appImages.user01, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
        { id: '8', image: appImages.user02, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
        { id: '6', image: appImages.user02, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
        { id: '7', image: appImages.user01, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
        { id: '9', image: appImages.user01, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
        { id: '10', image: appImages.user02, title: 'JNON', rate: '100', location: 'Hollywood, LA', type: 'Talents' },
    ])
    return (
        <MainWrapper>
            <AuthHeader onPress={() => navigation.goBack()}
                title={'Recent Talents'} />
            {/* <Spacer height={sizes.} /> */}
            <ComponentWrapper style={{ flex: 1 }}>
                <RenderRecentTalentsAll data={recentTalents} />
            </ComponentWrapper>
        </MainWrapper>
    )
}

export default RecentTelent