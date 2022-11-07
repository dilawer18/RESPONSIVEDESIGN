//import liraries
import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import { moderateScaleVertical } from '../../styles/responsiveSize';
import styles from './styles';

const Login = ({ navigation }) => {
    const [isVisible, setVisible] = useState(true)
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.ImageStyle}
                source={{ uri: 'https://img.freepik.com/free-photo/newborn-little-cute-likeable-baby-boy-laying-little-cute-yellow-animal-shaped-hat-inside-brown-basket-along-with-green-leafs-wooden-brown-room_179666-129.jpg?w=360' }}
            >
                <Text style={styles.loginTextStyle}>LOGIN</Text>
            </ImageBackground>
            <View style={styles.mainStyle}>

                <TextInputWithLabel
                    label="Email Address"
                    placeHolder="Enter Your Email"
                    inputStyle={{ marginBottom: moderateScaleVertical(28) }}
                    keyboardType='email-address'

                />
                <TextInputWithLabel
                    label="Email Password"
                    placeHolder="Enter Your Password"
                    secureTextEntry={isVisible}
                    rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                    onPressRight={() => setVisible(!isVisible)}

                />
                <TouchableOpacity style={{ alignSelf: "flex-end", marginTop: moderateScaleVertical(24), }}>
                    <Text>Forget Password</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
export default Login;
