import Link from 'next/link';
import RecipeData from '../data/RecipeData';

const recipeContainer = {
	display: 'inline-block',
	margin: '0.25%',
	padding: '0.25%',
	width: '32%',
	height: '10em',
	border: '1px solid black',
	borderRadius: '0.25em'
}

const Recipe = (props) => (
  <div style={recipeContainer}>
  	<h1>{props.recipe.title}</h1>
  	<Link href={`/recipe?id=${props.recipe.id}`}>
  		<a>View</a>
  	</Link>
  </div>
);

export default function Recipes() {
  return (
    <div>
    	{RecipeData.sortedRecipes.map(recipe => (
  			<Recipe recipe={recipe} />
  		))}
    </div>
  );
};