import Error from 'next/error'
import Link from 'next/link';
import { useRouter } from 'next/router';

import RecipeData from '../data/RecipeData';
import IngredientData from '../data/IngredientData';

import BaseContainer from '../components/BaseContainer';
import Header from '../components/Header';

const PrevStepLinkStyle = {
	display: 'inline-block',
	padding: '0.5em 1em',
	marginRight: '5%',
	marginLeft: '5%',
	fontSize: '1.5em',
	width: '25%'
};

const PrevStepLinksStyle = {
	paddingBottom: '0.5em',
	paddingTop: '0.5em',
	height: '2.5em',
	textAlign: 'center',
	bottom: 0,
	left: 0,
	right: 0,
	position: 'fixed',
	backgroundColor: 'white'
}

var PrevStep = function(props) {
	if (props.page) {
		return (
			<Link href={`/recipe?id=${props.id}&page=${props.page}`}>
				<a style={PrevStepLinkStyle}>Previous</a>
			</Link>
		)
	} else {
		return (<div style={PrevStepLinkStyle}></div>);
	}
}

var NextStep = function(props) {
	if (props.recipe && props.recipe.steps && props.page <= props.recipe.steps.length+1) {
		return (
			<Link href={`/recipe?id=${props.id}&page=${props.page}`}>
				<a style={PrevStepLinkStyle}>Next</a>
			</Link>
		)
	} else {
		return (<div style={PrevStepLinkStyle}></div>);
	}
}

var IngredientListed = function(props) {
	if (props.ingredient && props.ingredient.ingredient) {
		return (
			<div>{props.ingredient.amount} {props.ingredient.measurement} {props.ingredient.ingredient.name}</div>
		)
	} else {
		return (<div></div>);
	}
}

var StepsDisplay = function(props) {
	if (props.page == 1) {
		return (
			<div key={props.page} className="ingredientsContainer">
				<p>Ingredients:</p>
				<div className="ingredients">
			    	{props.ingredients.map((ingredient, i) => (
			  			<IngredientListed key={i} ingredient={ingredient} />
			  		))}
			  	</div>
		    </div>
		)
	} else {
		var step_obj = {};
		var step = 0;
		var title = '';
		var sub_steps = [];

		if (props.page >= 2) {
			step = props.page - 2;
			step_obj = props.recipe.steps[step];

			title = step_obj.title;
			sub_steps = step_obj.sub_steps;
		}

		return (
			<div key={props.page} className="stepsContainer">
				<p>Step ({title}):</p>
				<div className="step">
			    	{sub_steps.map((sub_step, i) => (
			  			<p>{sub_step.title}</p>
			  		))}
			  	</div>
		    </div>
		)
	}
}

export default function RecipeView() {
	const router = useRouter();

	if (!router.query.id)
		return <Error status={404} />

	var page = router.query.page;
	if (!page)
		page = 1;

	page = parseInt(page);

	var prev_page;
	if (page > 1)
		prev_page = page-1;

	var recipe = RecipeData.recipes[router.query.id];
	var title = recipe.title;
	var ingredients = [];

	recipe.ingredients && recipe.ingredients.forEach(function(ingredient) {
		var ing = Object.assign({}, ingredient);
		ing.ingredient = Object.assign({}, IngredientData[ingredient.ingredient]);
		ingredients.push(ing);
	})

	ingredients && ingredients.sort(function(a, b) {
		if (!a.ingredient)
			return -1;

		if (!b.ingredient)
			return 1;

		if (a.ingredient.name.toLowerCase() > b.ingredient.name.toLowerCase())
			return 1;
		else
			return -1;
	})

	return (
		<BaseContainer>
			<Header />

			<p>{title}</p>

			<StepsDisplay recipe={recipe} ingredients={ingredients} page={page} />

			<div style={PrevStepLinksStyle}>
				<PrevStep id={router.query.id} page={prev_page} recipe={recipe} />
				<NextStep id={router.query.id} page={page+1} recipe={recipe} />
			</div>
		</BaseContainer>
	);
}