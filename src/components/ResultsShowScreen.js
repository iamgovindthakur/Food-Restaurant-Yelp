import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
const ResultsShowScreen = ({ navigation }) => {
  const [results, SetResults] = useState(null);

  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`${id}`);
    SetResults(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!results) {
    return null;
  }

  return (
    <View>
      <Text>{results.name}</Text>
      <FlatList
        data={results.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={Styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
    image:{
        height:200,
        width:300
    }
});

export default ResultsShowScreen;
