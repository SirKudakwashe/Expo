import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text } from "react-native";
import ColorBox from "../components/ColorBox";

const ColorPalette = ({ route }) => {
  const { paletteName, colors } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={colors}
        // keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ColorBox color={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={() => <Text>{paletteName}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});

export default ColorPalette;
