import { View, Text, TextInput, TouchableOpacity } from "react-native"
import MyStyles from "../../styles/MyStyles"
import Styles from "./Styles"

const Login = () => {
    return (
        <View style={MyStyles.container}>
            <TextInput placeholder="Tên đăng nhập..."/>
            <TextInput placeholder="Mật khẩu..."/>
            <TouchableOpacity>
                <Text style={Styles.button}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
    )
    
}

export default Login