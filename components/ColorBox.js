import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ColorBox = ({ color, hexCode }) => {
  const boxColor = { backgroundColor: hexCode };
  return (
    <View style={[styles.Box, boxColor]}>
      <Text style={styles.text}>
        {color}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    padding: 10,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ColorBox;
