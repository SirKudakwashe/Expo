import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Switch,
  Button,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const COLORS = [
  { colorName: "AliceBlue", hexCode: "#F0F8FF", index: "1" },
  { colorName: "AntiqueWhite", hexCode: "#FAEBD7", index: "2" },
  { colorName: "Aqua", hexCode: "#00FFFF", index: "3" },
  { colorName: "Aquamarine", hexCode: "#7FFFD4", index: "4" },
];

function ColorPaletteModal({ navigation }) {
  const [name, onChangeText] = useState("");
  const [color, setColors] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert("PLease enter a name");
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: [],
      };
      navigation.navigate("Home", { newColorPalette });
    }
  }, [name]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Name of your color palette</Text>
        <TextInput
          onChangeText={onChangeText}
          value={name}
          placeholder="palette name"
          style={styles.input}
        />

        <FlatList
          data={COLORS}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <Text style={styles.text}>{item.colorName}</Text>
              <TouchableOpacity
                onPress={() => {
                  toggleSwitch();
                }}
              >
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  // onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },

  text: {
    paddingVertical: 5,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderRadius: 4,
  },

  button: {
    height: 40,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ColorPaletteModal;
