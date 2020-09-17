import React from "react";
import { View, Text, StyleSheet, FlatList ,TouchableOpacity} from "react-native";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({ title, results,navigation }) => {

    if(!results.length){
        return null;
    }
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
              <TouchableOpacity onPress={() =>navigation.navigate('ResultShow' ,{id: item.id})} >
          <ResultsDetail result={item} />
          </TouchableOpacity>);
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft:15,
    marginBottom:5,
  },
  container:{
      marginBottom:10,
  }
});

export default withNavigation(ResultsList);
