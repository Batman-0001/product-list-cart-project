import Modal from "react-modal";
import "../styles/modal.css";

Modal.setAppElement("#root");

export default function MyModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "30%",
          height: "70%",
          margin: "auto",
          padding: "30px",
          borderRadius: "10px",
        },
      }}
    >
      <div className="order-confirmed">
        <img src="/assets/images/icon-order-confirmed.svg" />
      </div>
      <header className="modal-header">Order Confirmed</header>
      <p className="message">we hope you enjoy your food!</p>
      <div className="items">
        {props.addItem.map((item) => {
          return (
            <div key={item.name} className="modal-item">
              <div className="modal-item-first">
                <div className="modal-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    height="50px"
                    width="50px"
                  />
                </div>
                <div>
                  <h3 className="modal-item-name">{item.name}</h3>
                  <div className="modal-item-detail">
                    <p className="modal-item-quantity">{item.quantity + "x"}</p>
                    <p className="modal-item-rate">{"@" + item.price}</p>
                  </div>
                </div>
              </div>
              <div className="modal-item-price">
                {"$" +
                  parseFloat(item.quantity * item.price.slice(1)).toFixed(2)}
              </div>
            </div>
          );
        })}
        <div className="modal-total-order">
          <p className="modal-one">Total Order</p>
          <p className="modal-two">
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
      </div>
      <div className="close-button" onClick={() => window.location.reload()}>
        Start New Order
      </div>
    </Modal>
  );
}
