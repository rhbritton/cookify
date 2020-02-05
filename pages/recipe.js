import Link from 'next/link';
import { useRouter } from 'next/router';

import RecipeData from '../static/RecipeData';

import BaseContainer from '../components/BaseContainer';
import Header from '../components/Header';

export default function Recipe() {
	const router = useRouter();

	var title = RecipeData.recipes[router.query.id].title;

	return (
		<BaseContainer>
			<Header />

			<p>{title}</p>
		</BaseContainer>
	);
}