import { useParams } from "react-router-dom";
import "./SingleProductPage.css"
import Footer from "../Pages/Home/Footer"
import Copyright from "../Pages/Home/Copyright"

import React, { useEffect, useState } from 'react'
import axios from "axios";

const SingleProductPage = () => {
    const [productData, setProductData] = useState("")
    let { product_id } = useParams();

    const getSingleProductData = async () => {
        const URL = `http://localhost:5000/api/product-details/${product_id}`
        let { data } = await axios.get(URL);
        setProductData(data.ProductList);
    }

    useEffect(() => {
        getSingleProductData()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 col-sm-12 py-5 px-5 img-container">
                        <img src={productData.image_URL} alt="" className="mt-3 mb-3" />
                    </div>
                    <div className="col-md-12 col-lg-6 col-sm-12 px-4 py-3 py-lg-5 px-lg-5">
                        <h1 className="product-name">{productData.name}</h1>
                        <p className="product_id">id: {productData._id}</p>

                        <p className="product_price">
                            Rs. {productData.price}/Kg
                        </p>
                        <h6 className="product_description">&emsp;{productData.description}</h6>
                        <button className="buy--btn mt-4">Buy Now</button>
                    </div>
                </div>
            </div>

            <Footer />
            <Copyright />
        </>
    )
}

export default SingleProductPage