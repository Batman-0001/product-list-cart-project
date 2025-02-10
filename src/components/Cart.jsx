import "../styles/cart.css";

function Cart(props) {
  return (
    <div className="empty-cart">
      <h1>Your Cart ({props.addItem.length})</h1>
      {props.addItem.length > 0 ? (
        <div className="cart-items">
          {props.addItem.map((item) => {
            return (
              <div key={item.name} className="cart-item">
                <div>
                  <h3 className="item-name">{item.name}</h3>
                  <div className="item-detail">
                    <p className="item-quantity">{item.quantity + "x"}</p>
                    <p className="item-rate">{"@" + item.price}</p>
                    <p className="item-price">
                      {"$" +
                        parseFloat(item.quantity * item.price.slice(1)).toFixed(
                          2
                        )}
                    </p>
                  </div>
                </div>
                <div
                  className="remove-item"
                  onClick={() => props.removeItem(item.name)}
                >
                  <img
                    src="/assets/images/icon-remove-item.svg"
                    alt="remove button"
                  />
                </div>
              </div>
            );
          })}
          <div className="total-order">
            <p className="one">Total Order</p>
            <p className="two">
              {"$" +
                props.addItem
                  .reduce(
                    (acc, item) =>
                      acc + parseFloat(item.quantity * item.price.slice(1)),
                    0
                  )
                  .toFixed(2)}
            </p>
          </div>
          <div className="note">
            <img src="/assets/images/icon-carbon-neutral.svg" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
          <div
            className="confirm-order"
            onClick={() => props.setIsModalOpen(true)}
          >
            Confirm Order
          </div>
        </div>
      ) : (
        <div>
          <div className="empty-cart-image">
            <img
              src="/assets/images/illustration-empty-cart.svg"
              alt="empty cart"
              height="150px"
              width="150px"
            />
          </div>
          <span>Your added item will appear here</span>
        </div>
      )}
    </div>
  );
}

export default Cart;
