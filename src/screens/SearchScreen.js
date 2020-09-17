import React, { useState } from "react";
import { View, Text, StyleSheet ,ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [SearchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    // <View style={{flex:1}}>
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={SearchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text> Found {results.length} results</Text>
      <ScrollView>
      <ResultsList  results={filterResultByPrice("$")} title="Cost Effective" />
      <ResultsList  results={filterResultByPrice("$$")} title="Bit Pricer" />
      <ResultsList  results={filterResultByPrice("$$$")} title="Big Spender!" />
      </ScrollView>
    {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
