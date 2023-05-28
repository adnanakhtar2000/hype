import { StyleSheet } from "react-native";
import { sizes, colors, appStyles } from "../../services";

export const styles = StyleSheet.create({
    //TextInputBorderd
    textInputBorderedContainer: {
        // borderRadius: sizes.inputRadius,
        borderBottomWidth: 1,
        borderColor: colors.appBorder2,
        marginHorizontal: sizes.marginHorizontal
    }
})