import { StyleSheet } from "react-native";
import { moderateScale, moderateScaleVertical, scale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ImageStyle: {
        height: moderateScale(200),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginTextStyle: {
        fontSize: scale(32),
        color: 'white',
        fontWeight: 'bold'
    },
    mainStyle: {
        paddingHorizontal: moderateScale(24),
        paddingVertical: moderateScaleVertical(44)
    }
}
);
export default styles
