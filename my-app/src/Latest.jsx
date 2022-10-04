import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CancelIcon from '@mui/icons-material/Cancel';

function Product() {
  const [item, setitem] = useState([]);
  const [temp, settemp] = useState([]);
  const [query, setquery] = useState("");
  const [filtering, setFiltering] = useState(false);
  const [sort, setsort] = useState(item)


  console.log(item);
  const data = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((data) => setitem(data.data.products))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    data();
  }, []);

  const filterdata = (data) => {
    let filter = item.filter((ele) => {
      return ele.category === data;
    });
    settemp(filter);
    setFiltering(true);
  };


  const ShowData = () => {
    return filtering ? filteredData(temp) : filteredData(item) 
    
  };

  const handlchange = (e) => {
    setquery(e.target.value.toLowerCase())
    const search = item.filter((data) => {
      return data.title.toLowerCase().lastIndexOf(e.target.value.toLowerCase()) !== -1;
    });
    settemp(search)
    setFiltering(true)
    ShowData()

  }
  const Alldata = () => {
    setFiltering(false)
    ShowData()


  }
  const hadnlecross = () => {
    setFiltering(false)
    ShowData()
  }
  const filterprice = (e) => {
    let sorting = (e.target.value)
    if (sorting == "High to Low") {
      const sort = item.sort((a, b) => (a.price > b.price ? -1 : 1))
      settemp(sort)
      setFiltering(true)
      ShowData(sort)
    }
    if (sorting == "Low to high") {
      const sort1 = item.sort((a, b) => (a.price > b.price ? 1 : -1))
      settemp(sort1)
      setFiltering(true)
      ShowData(sort1)
    }


  }


  const filteredData = (products) => {
    return (
      <div className="products">
        {products.map((items, index) => {
          return (
            <div className="col-sm mb-17" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <p className="card-text" key={index}></p>
                <img src={items.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{items.title}</h5>
                  <h5 className="card-title">{items.price}</h5>
                  <p className="card-text">{items.category}</p>
                  <a href="#" className="btn btn-primary">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <React.Fragment>
      <input
        type="text"
        name="input"
        placeholder="please Enter your product Name"
        value={query}
        onChange={handlchange}
      ></input>
      <CancelIcon className="pulkit" onClick={hadnlecross}></CancelIcon>
      <button
        type="button"
        class="btn btn-info btn-sm"
        onClick={() => Alldata()}
      > All product</button>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => filterdata("smartphones")}
      >
        smartphones
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => filterdata("laptops")}
      >
        laptops
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => filterdata("fragrances")}
      >
        fragrances
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => filterdata("skincare")}
      >
        skincare
      </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => filterdata("groceries")}
      >
        groceries
      </button>
      <button
        type="button"
        className="btn btn-light"
        onClick={() => filterdata("home-decoration")}
      >
        home-decoration
      </button>
      <select name="Languages" id="select_languages" onChange={filterprice}>
        <option value="">--Please choose an option--</option>
        <option value="High to Low" >High to Low</option>
        <option value="Low to high">Low to high</option>

      </select>

      <ShowData />
    </React.Fragment>
  );
}

export default Product;
