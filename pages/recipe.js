import Error from 'next/error'
import Link from 'next/link';
import { useRouter } from 'next/router';

import RecipeData from '../data/RecipeData';
import IngredientData from '../data/IngredientData';

import BaseContainer from '../components/BaseContainer';
import Header from '../components/Header';

const Ingredient = (props) => (
	<div>{props.ingredient.amount} {props.ingredient.measurement} {props.ingredient.ingredient.name}</div>
)

export default function Recipe() {
	const router = useRouter();

	if (!router.query.id)
		return <Error status={404} />

	var recipe = RecipeData.recipes[router.query.id];
	var title = recipe.title;
	var ingredients = recipe.ingredients;

	ingredients.forEach(function(ingredient, i) {
		ingredients[i].ingredient = IngredientData[ingredient.ingredient];
	})

	ingredients.sort(function(a, b) {
		if (a.ingredient.name.toLowerCase() > b.ingredient.name.toLowerCase())
			return 1;
		else
			return -1;
	})

	return (
		<BaseContainer>
			<Header />

			<p>{title}</p>

			<p>Ingredients:</p>
			<div>
				{ingredients.map(ingredient => (
					<Ingredient ingredient={ingredient} />
				))}
			</div>

			<button>Next</button>
		</BaseContainer>
	);
}