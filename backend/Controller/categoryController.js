const productsModel = require("../model/productsModel")


const categoryController = async (req, res) => {
    try {
        let productList = await productsModel.find();
        let sendData = {
            status: productList.length === 0 ? false : true,
            productList,
            count: productList.length,
        };
        res.status(200).send(sendData);
    } catch (error) {
        let errorObj = { status: false, error };
        res.status(500).send(errorObj);
    }
}

module.exports = categoryController;