import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Wrapper } from '../wrappers'
import { BrowseTalentList, RecentTelentList } from '../lists'
import { appImages } from '../../services'
import { width } from 'react-native-dimension'

export const RenderRecentTalents = ({ data, onPress }) => {
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
                return (
                    <RecentTelentList
                        image={item.image}
                        title={item.title}
                        rate={item.rate}
                        location={item.location}
                        type={item.type}
                    />
                )
            }}
        />
    )
}
export const RenderBrowseTalent = ({ data, onPress }) => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
                return (
                    <BrowseTalentList
                        image={item.image}
                        type={item.type}
                    />
                )
            }}
        />
    )
}
export const RenderRecentTalentsAll = ({ data, onPress }) => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
                return (
                    <RecentTelentList
                        style={{ width: width(40), marginHorizontal: width(2), marginVertical: width(1), flex: 1 }}
                        image={item.image}
                        onPress={() => console.log(item)}
                        title={item.title}
                        rate={item.rate}
                        location={item.location}
                        type={item.type}
                    />
                )
            }}
        />
    )
}