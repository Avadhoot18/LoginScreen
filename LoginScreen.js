import React from 'react';
import {View, Text, Stylesheet, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';

export default class loginScreen extends React.Component{
    login = async(email,password)=>{
        if(email && password ){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
this.props.navigation.navigate("Transaction")
                }
            }
            catch(error){
                switch (error.code) {
                    case 'auth/user-not-found':
                        Alert.alert("User Does Not Exists")
                        console.log("Does Not Exist")
                        break;
                case: 'auth/invalid-email':
                Alert.alert("Incorrect Email Or Password")
                console.log("invalid")
                    
                }
            }
        }
        else{
            Alert.alert("Enter Email and Password")
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style={{alignItems: "center", marginTop: 30}}>
                <View>
                    <Image source={require("../assets/booklogo.jpg")}
                    style={{width: 200, height: 200,}}/>
                    <Text style={{textAlign: 'center', fontSize: 30}}></Text>
                        </View>
                        <View>
                        <TextInput style={styles.loginBox}>
                            placeholder = "abc@gmail.com" keyboardType = "abc@gmail.com" onChangeText = {(Text)=>{
                                this.setState({
                                    emailId: text
                                })
                            }}
                            </TextInput>
                            <TextInput style={styles.loginBox}
                            secureTextEntry = {true}
                            placeholder = "Enter Password"
                            onChangeText = {(text)=>{
                                this.setState({
                                    password: text
                                })
                            }}>

                            </TextInput>
                </View>
                <View>
                <TouchableOpacity style={height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius:7
                onPress = {()=>{this.login(this.state.emailId, this.state.password)}}}>
                <Text style={{textAlign: "center"}}>Login
                </Text></TouchableOpacity>
</View>
            </KeyboardAvoidingView>
        ) 
    }
}
const styles= Stylesheet.create(
    {
        loginBox: {
            width: 300,
            height: 40,
            borderWidth: 1.5,
            fontSize: 20,
            margin: 10,
            paddingLeft: 10
        }
    }
)