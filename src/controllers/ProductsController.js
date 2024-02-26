const ProductsService = require('../services/ProductsService');

module.exports = {
  getProducts: async (req, res) => {
    let data = {error:'', results:[]}
    let products = await ProductsService.getProducts();

    console.log(products)

    products.forEach(element => {
      data.results.push({
        id: element.idproduct,
        productname: element.productname,
        productvalue: element.productvalue
      });
    });

    res.json(data);
  },
  postSales: async (req, res) => {
    let json = {error:'', result:{}};
    console.log(req.body)

    // let user = req.body.user;
    // let products = req.body.products;
    // let totalSale = req.body.totalSale;
    // let dataSale = req.body.dataSale;

    // if(user && products && totalSale && dataSale){
    //   let Sale = await ProductsService.insert(user, products, totalSale, dataSale);
    //   json.result = {
    //     id: Sale,
    //     products: products,
    //     totalSale: totalSale,
    //     dataSale: dataSale
    //   }
    // } else {
    //   json.error = 'Campos não enviados'
    // }

    res.json(json)
  }
}