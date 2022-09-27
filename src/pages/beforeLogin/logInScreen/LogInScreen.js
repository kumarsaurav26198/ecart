import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/common/CustomTextInput';
import CustomButton from '../../../components/common/CustomButton';

export default function LogInScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState('');

  const onPressFacebook = () => {
    navigation.navigate("SignUpScreen");
  };

  const onPressLogin = () => {
    if (email == '')
    {
      setBadEmail(true);
    } else
    {
      setBadEmail(false);

    }
    if (password == '')
    {
      setBadPassword(true);
    } else
    {
      setBadPassword(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Log In</Text>
      <View style={styles.imageContainer}>

      </View>
      <CustomTextInput value={email} onChange={setEmail} placeholder="E-mail" icon={require("../../../assets/images/email.png")} />
      {
        badEmail === true && (
          <>
            <Text style={styles.warning}> Plesase Enter Email Id</Text>
          </>
        )
      }
      <CustomTextInput placeholder="Password" value={password} onChange={setPassword} icon={require("../../../assets/images/padlock.png")} />
      {
        badPassword === true && (
          <>
            <Text style={styles.warning}> Plesase Enter Email Id</Text>
          </>
        )
      }
      <CustomButton title={"LogIn"} onPress={onPressLogin} textColor={"#fff"} bgColor={"#ff5a66"} />
      <Text style={styles.accountText} onPress={onPressFacebook}> Create New Account ?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#ff5a66",
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  imageContainer: {
    height: 140,
    borderWidth: 0.3,
    width: 140,
    borderRadius: 500,
    marginBottom: 70,
    marginTop: 40
  },
  accountText: {
    marginTop: 30,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#878786",
    textDecorationLine: "underline"
  },
  warning: {
    marginTop: 10,
    right: "18%",
    color: "red",
  }
});

