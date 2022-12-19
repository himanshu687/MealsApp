import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
// import { FavouritesContext } from "../Store/Context/favourites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../Components/MealsList/MealsList";
import { useSelector } from "react-redux";

const FavouritesScreen = () => {
  // const favouriteMealsContext = useContext(FavouritesContext);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealIds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
