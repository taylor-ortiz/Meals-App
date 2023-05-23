import { useLayoutEffect } from 'react'
import { MEALS, CATEGORIES } from "../data/dummy-data"
import MealsList from '../components/MealsList/MealsList';

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

    return <MealsList items={displayedMeals}></MealsList>    
}

export default MealsOverviewScreen;

