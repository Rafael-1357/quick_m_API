const ProductsService = require('../services/ProductsService');

module.exports = {
  getProducts: async (req, res) => {
    let data = {error:'', results:[]}
    let products = await ProductsService.getProducts();

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

    let user = req.body.users_iduser;
    let products = req.body.products;
    let totalsale = req.body.totalsale;
    let datesale = req.body.datesale;
    let payment_method = req.body.payment_methods

    if(user && products && totalsale && datesale && payment_method){
      let Sale = await ProductsService.insertSale(user, products, totalsale, datesale, payment_method);
      json.result = {
        id: Sale,
        products: products,
        totalSale: totalsale,
        dataSale: datesale,
        payment_method: payment_method
      }
    } else {
      json.error = 'Campos não enviados'
    }

    res.json(json)
  }
}