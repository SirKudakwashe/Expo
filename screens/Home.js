import React, { useEffect, useCallback, useState } from "react";
import { TouchableOpacity, FlatList, Text } from "react-native";
import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation, route }) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [palette, setPalette] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const fetchPalette = useCallback(async () => {
    let url = "https://color-palette-api.kadikraman.now.sh/palettes";
    let response = await fetch(url);
    let colors = await response.json();
    setPalette(colors);
  }, []);

  useEffect(() => {
    fetchPalette();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchPalette();
    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setPalette((palette) => [newColorPalette, ...palette]);
    }
  }, [newColorPalette]);

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
      refreshing={isRefreshing}
      onRefresh={() => {
        handleRefresh();
      }}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ColorPaletteModal");
          }}
        >
          <Text>Add Color Scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default Home;
