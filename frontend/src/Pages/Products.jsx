import React, { useEffect, useState } from "react";
import axios from "axios";
import Copyright from "./Home/Copyright";
import Footer from "./Home/Footer";
import { useNavigate } from "react-router-dom";

const ProductsSection = () => {

  const [productsData, setProductsData] = useState()
  const [afterFilterData, setAfterFilterData] = useState()
  let [filterData, setFilterData] = useState({
    sort: 1,
  });

  const navigate = useNavigate()




  const onClickHandler = async () => {
    const URL = "http://localhost:5000/api/category"
    const getProductData = await axios.get(URL)
    const { data } = getProductData
    setProductsData(data.productList)
    console.log(productsData);
  };

  const getFilterData = async () => {
    let url = "http://localhost:5000/api/filter";
    let { data } = await axios.post(url, filterData);
    setAfterFilterData(data.productList);
    console.log(data.productList);
  };

  let setFilterForPage = (event) => {
    let { value, name } = event.target;


    if ((name) && (name === "sort")) {
      setFilterData({ ...filterData, sort: Number(value) })
    } else if (name === "category") {
      if (value === "") {
        delete filterData.category;
        setFilterData({ ...filterData });
      } else {
        setFilterData({ ...filterData, category: value });
      }
    } else if (name === "price") {
      let array = value.split("-");
      setFilterData({
        ...filterData,
        lCost: Number(array[0]),
        hCost: Number(array[1]),
      });
    }
  }


  useEffect(() => {
    getFilterData()
  }, [filterData])

  return <>
    <div className="container-fluid mt-5">
      <div className="blank" />
      <div className="container-fluid products-page row">
        {/* Filter-Area */}
        <div className="filter-area col-sm-12  col-lg-3" >
          <h5 className="text-center fw-bold mt-4">Filter</h5>
          <form action="">
            <div>
              <label htmlFor="" className="form-label fw-bold mt-4">
                Select Category
              </label>
              <select
                className="form-select form-select-sm cursor-pointer"
                name="category"
                onChange={setFilterForPage}
              >
                <option value="" className="cursor-pointer">--- Select Category ---</option>
                <option value="fruits" className="cursor-pointer">Fruits</option>
                <option value="dryfruits" className="cursor-pointer">Dry Fruits</option>
                <option value="vegetables" className="cursor-pointer">Vegetables</option>
                <option value="dairyproducts" className="cursor-pointer">Dairy Products</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="" className="form-label fw-bold mt-2">
                Sort By Price
              </label>
              <div className="ms-1">
                <input
                  type="radio"
                  className="form-check-input cursor-pointer"
                  id="lessthan50"
                  name="price"
                  value="0-50"
                  onChange={setFilterForPage}
                />
                <label htmlFor="lessthan50" className="form-check-label cursor-pointer ms-1">
                  less then 50
                </label>
              </div>
              <div className="ms-1">
                <input
                  type="radio"
                  className="form-check-input cursor-pointer"
                  id="50to100"
                  name="price"
                  value="50-100"
                  onChange={setFilterForPage}
                />
                <label htmlFor="50to100" className="form-check-label ms-1 cursor-pointer">
                  50 to 100
                </label>
              </div>
              <div className="ms-1">
                <input
                  type="radio"
                  className="form-check-input cursor-pointer"
                  id="100to150"
                  name="price"
                  value="100-150"
                  onChange={setFilterForPage}
                />
                <label htmlFor="100to150" className="form-check-label ms-1 cursor-pointer">
                  100 to 150
                </label>
              </div>
              <div className="ms-1">
                <input
                  type="radio"
                  className="form-check-input cursor-pointer"
                  id="150to200"
                  name="price"
                  value="150-200"
                  onChange={setFilterForPage}
                />
                <label htmlFor="150to200" className="form-check-label ms-1 cursor-pointer">
                  150 to 200
                </label>
              </div>
              <div className="ms-1">
                <input
                  type="radio"
                  className="form-check-input cursor-pointer"
                  name="price"
                  value="200-99999"
                  onChange={setFilterForPage}
                  id="200"
                />
                <label htmlFor="200" className="form-check-label ms-1 cursor-pointer">
                  200+
                </label>
              </div>
            </div>
            <p className="mt-4 mb-2 fw-bold ">Sort</p>
            <div>
              <div className="ms-1">
                <input
                  type="radio"
                  className="form-check-input cursor-pointer"
                  id="lowtohigh"
                  value="1"
                  name="sort"
                  checked={filterData.sort === 1 ? true : false}
                  onChange={setFilterForPage}
                />
                <label htmlFor="lowtohigh" className="form-check-label ms-1 cursor-pointer">
                  Price low to high
                </label>
              </div>
              <div className="ms-1">
                <input
                  type="radio"
                  className="form-check-input cursor-pointer"
                  id="hightolow"
                  name="sort"
                  value="-1"
                  checked={filterData.sort === -1 ? true : false}
                  onChange={setFilterForPage}
                />
                <label htmlFor="hightolow" className="form-check-label ms-1 cursor-pointer">
                  Price high to low
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="products-section col-lg-9 col-sm-12">
          <div className="row">
            <div className="products-section-header col-12 mt-3 mb-2 ms-4">

              <button type="button" className="products-section-btn" value={""} name={"category"} onClick={setFilterForPage}>All Products</button>

              <button type="button" className="products-section-btn" value={"fruits"} name={"category"} onClick={setFilterForPage}>Fruits</button>

              <button type="button" className="products-section-btn" value={"vegetables"} name={"category"} onClick={setFilterForPage}>Vegetables</button>

              <button type="button" className="products-section-btn" value={"dryfruits"} name={"category"} onClick={setFilterForPage}>Dry Fruits</button>

              <button type="button" className="products-section-btn" value={"dairyproducts"} name={"category"} onClick={setFilterForPage}>Dairy Products</button>
            </div>
            <section className="products" id="products">
              <div className="products-container">
                {
                  afterFilterData?.map((product, i) => {
                    return (
                      <div className="box" key={i} onClick={() => {
                        navigate(`${product._id}`)
                      }}>
                        <img src={product.image_URL} alt="new" />
                        <h6 className="text-center">Organic {product.category}</h6>
                        <h2 className="text-center">
                          {product.name}
                        </h2>
                        <h3 className="price text-center">
                          {product.price} Rs <span>/Kg</span>
                        </h3>
                        <i className="bx bx-cart"></i>
                        <i className="bx bx-heart"></i>
                        <span className="discount">-{product.discount}%</span>
                      </div>
                    )
                  })
                }
              </div>
            </section>
          </div>
        </div>
      </div >
    </div >
    <Footer />
    <Copyright />
  </>
};

export default ProductsSection;
