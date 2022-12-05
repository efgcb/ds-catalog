import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
Quando a Felxdirection é row, o justify content alinha horizontalmente,
quando é Column alinha verticalmente


*/

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Hello Word</Text>
      <Text style={styles.h2}>Eduardo Fernandes</Text>
      <Text style={styles.h3}>Aluno do Curso de React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#069",
    flex: 1,
    flexDirection: "column",
    alignItems: "center", //horizontal
    justifyContent: "center", //alinhamento vertical
  },
  h1: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
  h2: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  },
  h3: {
    fontSize: 14,
    color: "#ccc",
  },
});

export default App;
