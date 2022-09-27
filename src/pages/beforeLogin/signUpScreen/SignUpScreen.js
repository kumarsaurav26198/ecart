import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/common/CustomTextInput';
import CustomButton from '../../../components/common/CustomButton';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [phone, setPhone] = useState('');
  const [badPhone, setBadPhone] = useState(false);
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState('');

  const onPressSignUp = () => {
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
    <>
      <View style={styles.container}>
        {/* <Text style={[styles.title, styles.leftTitle]}>Sign Up</Text> */}
        <View style={styles.imageContainer}>

        </View>
        <Text style={styles.accountText}> Create New Account</Text>
        <CustomTextInput placeholder="Name" value={name} onChange={setName} icon={require("../../../assets/images/user.png")} />
        <CustomTextInput placeholder="Email" value={email} onChange={setEmail} icon={require("../../../assets/images/email.png")} />
        <CustomTextInput placeholder="Phone" value={phone} onChange={setPhone} keyboardType="numeric" icon={require("../../../assets/images/phone.png")} />
        <CustomTextInput placeholder="Password" value={password} onChange={setPassword} icon={require("../../../assets/images/padlock.png")} />
        <CustomButton title={"SignUp"} onPress={onPressSignUp} textColor={"#fff"} bgColor={"#ff5a66"} />
        <Text style={styles.accountText2} onPress={() => {
          navigation.goBack();
        }}>Already have account !</Text>
      </View>
    </>
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
    marginBottom: 40,
    marginTop: 40
  },
  accountText: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "#000"

  },
  accountText2: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#878786",
    textDecorationLine: "underline"
  }
});