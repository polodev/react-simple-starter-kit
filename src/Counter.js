import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ducimus totam placeat distinctio praesentium tenetur, harum porro, voluptatibus quis quaerat tempora! Vero vitae, sint numquam amet provident similique quam quaerat?</p>
          <a href="#">google</a>
          <img src="static/images/laravel.png" alt=""/>
        </div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count: {this.state.count}
        </button>
      </div>
    );
  }
}
export default Counter;
