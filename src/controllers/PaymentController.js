const paymentService = require('../services/paymentService');

module.exports = {
  getPaymentMethod: async (req, res) => {
    let data = {error:'', results:[]}
    let payment_methods = await paymentService.getPaymentMethod();

    payment_methods.forEach(element => {
      data.results.push({
        id: element.idpayment_method,
        method: element.payment_method,
      });
    });

    res.json(data);
  }
}