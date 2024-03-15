import React, { useEffect, useCallback, useState } from "react";
import { View, Text, FlatList } from "react-native";
import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation }) => {
  const [palette, setPalette] = useState([]);
  const fetchPalette = useCallback(async () => {
    let url = "https://color-palette-api.kadikraman.now.sh/palettes";
    let response = await fetch(url);
    let commits = await response.json();
    setPalette(commits);
  }, []);

  useEffect(() => {
    fetchPalette();
  }, []);

  return (
    <FlatList
      data={palette}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate("ColorPalette", item);
          }}
          colorPalette={item}
        />
      )}
    />
  );
};

export default Home;
