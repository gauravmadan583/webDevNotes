import React from 'react';




// independent
// reusable


// 1. class based components
class Navbar extends React.Component {

    constructor(props) {
      // state
      super(props);
    }
    render() {
      return (<div>Navbar</div>)
    };
};

export default Navbar;

// 2. function based components

export const Navbar2 = (props) => {
  return (
    <div>Navbar</div>
  )
}


// state and props
