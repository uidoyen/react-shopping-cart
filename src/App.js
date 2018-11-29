import React, { Component } from 'react';
import Catalog from './components/Catalog';
import Cart from './components/Cart';

import { connect } from 'react-redux';
import { getData } from './actions/catalogActions';

@connect((store) => {
  return {
    items: store.catalog,
    cartItems: store.cart
  }
})

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getData());
  }

  render() {

    const { items } = this.props;

    return (
      items === undefined ? (
        <div>Loading...</div>
      ) : (
        <div className="container">
          <div className="row">
            <Catalog items={items}/>
            <Cart />
          </div>
        </div>
      )
    )
  }
}

export default App;