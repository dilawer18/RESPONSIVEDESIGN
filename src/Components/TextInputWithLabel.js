import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical, scale } from '../styles/responsiveSize'

const TextInputWithLabel = ({
    label,
    placeHolder,
    onChangeText = () => { },
    inputStyle = {},
    rightIcon,
    onPressRight,
    ...props
}) => {
    return (
        <View style={{ ...styles.inputStyle, ...inputStyle }}>
            <Text style={styles.labelTextStyle}>{label}</Text>
            <View style={styles.flexView}>
                <TextInput
                    placeholder={placeHolder}
                    style={styles.inLineStyle}

                    {...props}
                />
                {!!rightIcon ? <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onPressRight}
                >
                    <Image style={{ tintColor: "rgba(0,0,0,0.3)" }} source={rightIcon} />
                </TouchableOpacity> : null}

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.08)',
        borderRadius: moderateScale(4)
    },
    inLineStyle: {
        paddingVertical: moderateScaleVertical(8),
        fontSize: scale(16),
        color: 'rgba(0,0,0.8)',
        flex: 1
    },
    labelTextStyle: {
        fontSize: scale(14),
        color: 'rgba(0,0,0.5)'
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: "space-between"
    }

})
export default TextInputWithLabel
