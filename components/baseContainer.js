import Link from 'next/link';

const baseContainerStyles = {
  margin: '1em',
  marginTop: '2.5em'
};

const BaseContainer = (props) => (
  <div style={baseContainerStyles}>
    {props.children}
  </div>
);

export default BaseContainer;