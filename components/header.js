import Link from 'next/link';

const linkStyle = {
	marginRight: 50,
	fontSize: '1.5em'
};

const linksStyle = {
	paddingTop: '0.5em',
	paddingBottom: '0.5em',
	height: '1.5em',
	textAlign: 'center',
	top: 0,
	left: 0,
	right: 0,
	position: 'fixed',
	backgroundColor: 'white'
}

const Header = () => (
  <div style={linksStyle}>
    <Link href="/">
      <a style={linkStyle}>Recipes</a>
    </Link>
    <Link href="/shopping-list">
      <a style={linkStyle}>Shopping List</a>
    </Link>
  </div>
);

export default Header;