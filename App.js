import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import ColorBox from "./components/ColorBox";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const COLORS = [
    { colorName: "Base03", hexCode: "#002b36", key: "1" },
    { colorName: "Base02", hexCode: "#073642", key: "2" },
    { colorName: "Base01", hexCode: "#586e75", key: "3" },
    { colorName: "Base00", hexCode: "#657b83", key: "4" },
    { colorName: "Base0", hexCode: "#839496", key: "5" },
    { colorName: "Base1", hexCode: "#93a1a1", key: "6" },
    { colorName: "Base2", hexCode: "#eee8d5", key: "7" },
    { colorName: "Base3", hexCode: "#fdf6e3", key: "8" },
    { colorName: "Yellow", hexCode: "#b58900", key: "9" },
    { colorName: "Orange", hexCode: "#cb4b16", key: "10" },
    { colorName: "Red", hexCode: "#dc322f", key: "11" },
    { colorName: "Magenta", hexCode: "#d33682", key: "12" },
    { colorName: "Violet", hexCode: "#6c71c4", key: "13" },
    { colorName: "Blue", hexCode: "#268bd2", key: "14" },
    { colorName: "Cyan", hexCode: "#2aa198", key: "15" },
    { colorName: "Green", hexCode: "#859900", key: "16" },
  ];
  return (
    <NavigationContainer>
      <SafeAreaView>
        <FlatList
          style={styles.container}
          data={COLORS}
          // keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ColorBox color={item.colorName} hexCode={item.hexCode} />
          )}
          ListHeaderComponent={() => <Text>Solarized</Text>}
        />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
});

export default App;
