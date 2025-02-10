import "../styles/Item.css";
import { useState, useEffect } from "react";

function Item(props) {
  const [count, setCount] = useState(1);
  const [isChanged, setIsChanged] = useState(false);

  function update(count) {
    const existingItem = props.addItem.find((item) => item.name === props.name);
    if (existingItem) {
      props.setAddItem(
        props.addItem.map((item) =>
          item.name === props.name
            ? { ...item, quantity: item.quantity + count }
            : item
        )
      );
    }
  }

  function increment(e) {
    e.stopPropagation();
    if (count < 5) {
      setCount(count + 1);
      update(1);
    }
  }

  function decrement(e) {
    e.stopPropagation();
    if (count > 1) {
      setCount(count - 1);
      update(-1);
    }
  }

  function handleChange() {
    const existingItem = props.addItem.find((item) => item.name === props.name);
    if (!existingItem) {
      props.setAddItem([
        ...props.addItem,
        {
          name: props.name,
          image: props.image,
          price: props.price,
          quantity: count,
        },
      ]);
    }
    setIsChanged(!isChanged);
  }

  const div_one = (
    <div className="cart" onClick={handleChange}>
      <img src={props.logo} />
      <p>Add to Cart</p>
    </div>
  );

  const div_two = (
    <div className="select" onClick={handleChange}>
      <button onClick={decrement}>
        <img src="/assets/images/icon-decrement-quantity.svg" />
      </button>
      <p>{count}</p>
      <button onClick={increment}>
        <img src="/assets/images/icon-increment-quantity.svg" />
      </button>
    </div>
  );

  return (
    <div className="item">
      <div className="image">
        <img src={props.image} alt={props.name} height="300px" width="300px" />
      </div>
      {isChanged ? div_two : div_one}
      <div className="info">
        <p className="category">{props.category}</p>
        <p className="name">{props.name}</p>
        <p className="price">{props.price}</p>
      </div>
    </div>
  );
}

export default Item;
