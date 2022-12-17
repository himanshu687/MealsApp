import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.8,
    textAlign: "center",
  },
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: "5%",
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#e2b497",
  },
});
