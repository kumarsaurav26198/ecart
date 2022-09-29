import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

export function Product({ name, price, image, onPress, onClick }) {
  return (
    <View style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10, paddingRight: 10 }}>

          <Text style={styles.price}>Rs..  {price} ₹</Text>
          <TouchableOpacity style={{ marginTop: 5, borderWidth: 0.2, padding: 5, borderRadius: 15 }}>

            <Text>Add cart</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onClick={onClick}>
          <Image
            style={{ height: 24, width: 24 }}
            source={require("../../assets/images/heart.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});
