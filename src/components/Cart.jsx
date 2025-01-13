import '../styles/cart.css';

function Cart() {

   return (
         <div className="empty-cart">
            <h1>Your Cart (0)</h1>
            <div className="empty-cart-image">
                <img src="/assets/images/illustration-empty-cart.svg" alt="empty cart" height="150px" width="150px"/>
            </div>
            <span>Your added item will appear here</span>
         </div>
   );
}

export default Cart;