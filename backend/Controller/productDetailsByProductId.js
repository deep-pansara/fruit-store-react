const productsModel = require("../model/productsModel")


const getProductDetails = async (request, response) => {
    let { product_id } = request.params;
    try {
        let ProductList = await productsModel.findById(product_id);
        let sendData = {
            status: ProductList.length === 0 ? false : true,
            ProductList,
            count: ProductList.length,
        };
        response.status(200).send(sendData);
    } catch (error) {
        let errorObj = { status: false, error };
        response.status(500).send(errorObj);
    }
}

module.exports = getProductDetails