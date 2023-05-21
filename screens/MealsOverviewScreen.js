import { useLayoutEffect } from 'react'
import { View, FlatList, StyleSheet, ScrollView } from "react-native"
import MealItem from "../components/MealItem"
import { useNavigation } from '@react-navigation/native';

import { MEALS, CATEGORIES } from "../data/dummy-data"

function MealsOverviewScreen({ route, navigation }) {

    //const navigation = useNavigation();

    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    console.log('what is the value of navigation? ', navigation)
    console.log('what is the value of route? ', route)

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    function renderMealItem(itemData) {

        const item = itemData.item;
        console.log('what is the value of item? ', item)

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }

        return <MealItem {...mealItemProps}></MealItem>
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}></FlatList>
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})