import Link from 'next/link';

const baseContainerStyles = {
  position: 'relative',
  margin: '1em'
};

const BaseContainer = (props) => (
  <div style={baseContainerStyles}>
    {props.children}
  </div>
);

export default BaseContainer;