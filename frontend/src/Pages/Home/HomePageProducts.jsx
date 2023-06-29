import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const HomePageProducts = () => {
  const [productsData, setProductsData] = useState()
  const navigate = useNavigate()

  const loadProducts = async () => {
    const URL = "http://localhost:5000/api/category"
    const getProductsData = await axios.get(URL)
    const { data } = getProductsData
    setProductsData(data.productList)
  }

  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <>
      {/* <!-- Products --> */}
      <section className="products" id="products">
        <div className="heading">
          <h1>
            Our Popular
            <br />
            <span>Products</span>
          </h1>
          <button className="btn" onClick={() => navigate("/products")}>
            Shop Now<i className="bx bx-right-arrow-alt"></i>
          </button>
        </div>
        {/* <!-- Product-Content --> */}
        <div className="products-container">
          {/* <!-- Box-1 --> */}
          {
            productsData?.slice(0, 8).map((p, i) => {
              return (
                <div className="box" key={i}>
                  <img src={p.image_URL} alt={p.name} />
                  <h6 className="text-center">Fresh {p.category}</h6>
                  <h2 className="text-center">
                    Fresh Organic <br />
                    {p.name}
                  </h2>
                  <h3 className="price text-center">
                    {p.price} Rs <span>/Kg</span>
                  </h3>
                  <i className="bx bx-cart"></i>
                  <i className="bx bx-heart"></i>
                  <span className="discount">-{p.discount}%</span>
                </div>
              )
            })
          }
        </div>
      </section >
    </>
  );
};

export default HomePageProducts;
