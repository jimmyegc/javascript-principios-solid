/*

O: Open/Closed Principle

Las entidades de software, clases, modulos, funciones deben estar
abiertas para su extensión pero cerradas para su modificación.

*/

// Bad
function processPayment(price, cardDetails) {
  console.log(`Processing payment of $${price} with credit card...`)
}

// Better
function processPaymentWithCard(price, cardDetails) {
  console.log(`Processing payment of $${price} with credit card...`)
}

function processPaymentWithPayPal(price, cardDetails) {
  console.log(`Processing payment of $${price} with PayPal...`)
}

