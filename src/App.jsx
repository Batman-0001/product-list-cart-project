import { useEffect, useState } from "react";
import Item from "./components/Item.jsx";
import Cart from "./components/Cart.jsx";
import MyModal from "./components/Modal.jsx";

function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  //for adding items to cart
  const [addItem, setAddItem] = useState([]);

  //for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  function removeItem(name) {
    setIsRemoved(true);
    setAddItem(addItem.filter((item) => item.name != name));
  }

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data is not Fetching.");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
        setIsLoaded(true);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="main">
      <h1 className="header">Desserts</h1>
      {isLoaded ? (
        <div className="content">
          <div className="container">
            {data.map((item, index) => {
              return (
                <Item
                  key={index}
                  image={item.image.desktop}
                  logo="/assets/images/icon-add-to-cart.svg"
                  name={item.name}
                  category={item.category}
                  price={"$" + `${item.price.toFixed(2)}`}
                  addItem={addItem}
                  setAddItem={setAddItem}
                  isRemoved={isRemoved}
                />
              );
            })}
          </div>
          <div className="cart-container">
            <Cart
              addItem={addItem}
              setAddItem={setAddItem}
              removeItem={removeItem}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      ) : (
        <p>Loading Items...</p>
      )}
      <MyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addItem={addItem}
      />
    </div>
  );
}

export default App;
