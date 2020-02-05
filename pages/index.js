import Link from 'next/link';

import BaseContainer from '../components/BaseContainer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';

export default function Index() {
  return (
  	<BaseContainer>
	    <div>
	    	<Header />

	     	<p>Recipes</p>

	    	<Recipes />
	    </div>
    </BaseContainer>
  );
}