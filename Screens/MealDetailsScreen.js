import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../Components/MealDetails";
import Subtitle from "../Components/MealDetails/Subtitle";
import List from "../Components/MealDetails/List";
import IconButton from "../Components/IconButton";

const MealDetailsScreen = ({ route, navigation }) => {
  const { id: mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const handleHeaderButton = () => {
    console.log("pressed");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={"star"}
            color="white"
            onPress={handleHeaderButton}
          />
        );
      },
    });
  }, [navigation, handleHeaderButton]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailsText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {},
  image: {
    width: "100%",
    height: 350,
    // resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#ffffff",
    letterSpacing: 0.8,
  },
  detailsText: {
    color: "#ffffff",
  },
  listContainer: {
    width: "85%",
  },
  listOuterContainer: {
    marginBottom: 32,
    alignItems: "center",
  },
});
