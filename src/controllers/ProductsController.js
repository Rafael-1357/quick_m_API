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

    if(user && products && totalsale && datesale){
      let Sale = await ProductsService.insertSale(user, products, totalsale, datesale);
      json.result = {
        id: Sale,
        products: products,
        totalSale: totalsale,
        dataSale: datesale
      }
    } else {
      json.error = 'Campos não enviados'
    }

    res.json(json)
  }
}