import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../Components/MealDetails";
import Subtitle from "../Components/MealDetails/Subtitle";
import List from "../Components/MealDetails/List";
import IconButton from "../Components/IconButton";
import { FavouritesContext } from "../Store/Context/favourites-context";

const MealDetailsScreen = ({ route, navigation }) => {
  const favouriteMealsContext = useContext(FavouritesContext);

  const { id: mealId } = route.params; //mealId is the main variable now

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const isMealFavourite = favouriteMealsContext.ids.includes(mealId);

  const changeFavouriteStatusHandler = () => {
    if (isMealFavourite) {
      favouriteMealsContext.removeFavourite(mealId);
    } else {
      favouriteMealsContext.addFavourite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isMealFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

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
