import React from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { TinyText } from '../text';

export const BottomSheetPrimary = ({ isVisible, ref }) => {
    return (
        <RBSheet
            // ref={ref}
            // closeOnDragDown={true}

            // backdropStyle={{ backgroundColor: 'green' }}
            height={300}
        >
            <TinyText>bkjhuuv</TinyText>
        </RBSheet>
    )
}
