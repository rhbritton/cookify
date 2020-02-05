import Link from 'next/link';

const linkStyle = {
  marginRight: 50
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Recipes</a>
    </Link>
    <Link href="/shopping-list">
      <a style={linkStyle}>Shopping List</a>
    </Link>
  </div>
);

export default Header;