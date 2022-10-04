import React, { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const CartList = ({ carts }) => {
  console.log(carts.length);
  const [cart, setcarts] = useState([]);
  useEffect(() => {
    setcarts(carts);
  }, [carts]);

  const deleteitem = (id) => {
    const carts = cart.filter((del, index) => {
      return del.id != id;
    });

    setcarts(carts);
  };

  return (
    <div className="products">
      <span style={{ color: "black" }}>
        <ShoppingCartRoundedIcon> </ShoppingCartRoundedIcon><span>({carts.length})</span>
      </span>
      {cart.map((items, cartindex) => {
        console.log(items, cartindex);
        return (
          <div className="col-sm mb-17" key={cartindex}>
            <div className="card" style={{ width: "15rem" }}>
              <p className="card-text" key={cartindex}></p>
              <img src={items.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <span>ITEM TITLE:{items.title}</span>
                </h5>
                <button
                  type="button"
                  class="btn btn-dark"
                  onClick={() => {
                    if (items.quantitys <= 1) {
                      alert("Item qunatity 0 Not Allowed")
                      return false
                    } else {
                      const cart2 = cart.map((data, index) => {
                        return cartindex === index
                          ? { ...data, quantitys: data.quantitys - 1 }
                          : data;
                      });
                      setcarts(cart2);
                    }
                  }}
                >
                  -
                </button>
                <p className="card-text">{items.quantitys}</p>
                <button
                  type="button"
                  class="btn btn-dark"
                  onClick={() => {
                    const cart2 = cart.map((data, index) => {
                      return cartindex === index
                        ? { ...data, quantitys: data.quantitys + 1 }
                        : data;
                    });
                    setcarts(cart2);
                  }}
                >
                  +
                </button>
                <h5 className="card-title">
                  <span>ITEM PRICE:{items.price}</span>
                </h5>
                <p>SubToTal:{items.price * items.quantitys}</p>
                {/* <button >
                  DelteItem
                </button> */}
                <DeleteIcon type="button" onClick={() => deleteitem(items.id)} ></DeleteIcon>
              </div>
            </div>
          </div>
        );
      })}
      <h4>
        {" "}
        YOUR CART TOTAL:{" "}
        {cart
          .map((data3) => data3.price * data3.quantitys)
          .reduce((item, value) => item + value, 0)}
      </h4>
    </div>
  );
};

export default CartList;
