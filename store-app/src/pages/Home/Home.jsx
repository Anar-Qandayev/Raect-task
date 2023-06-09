import React, { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  },[]);


  return (
    <div className="home">
      <div className="btnClick">
        <button className="primary" onClick={increment}>
          +
        </button>
        <span>{count}</span>
        <button className="primary" onClick={decrement}>
          -
        </button>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>{item.title.slice(0,15)}</td>
                <td>{item.description.slice(0,70)}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
