const productsModel = require("../model/productsModel")



module.exports.filter = async (request, response) => {
    try {
        let { category, lCost, hCost, sort } = request.body;
        let filter = {};

        if (category !== undefined) filter['category'] = category;
        if (lCost !== undefined && hCost !== undefined) {
            filter['price'] = { $lt: hCost, $gt: lCost };
        }

        console.log(filter);

        let productList = await productsModel.find(filter).sort({
            price: sort,
        });
        let sendData = {
            status: productList.length === 0 ? false : true,
            productList,
            count: productList.length,
        };
        response.status(200).send(sendData);
    } catch (error) {
        let errorObj = { status: false, error };
        response.status(500).send(errorObj);
    }
};