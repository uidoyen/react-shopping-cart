import React from 'react';
const Button = ({ onClick }) => {
  return (
    <input
      type="button"
      className="btn btn-primary"
      value="Add to cart"
      onClick={onClick}
    />
  )
}
export default Button;