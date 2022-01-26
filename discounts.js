/**
 * priceDiscounts
 * @param {*} Price
 * @param {*} Discount
 * @returns Price whit discount
 */
function priceDiscounts(Price, Discount) {
  const resultPrice = document.getElementById("result-total-price");

  const percentage = 100 - Discount;
  const priceTotal = (Price * percentage) / 100;
  const moneyPrice = formatMoney(priceTotal, "es-CO", "COP");

  resultPrice.innerHTML = moneyPrice;
  return;
}
/**
 * changeDiscount
 * @returns Update total whit custom Price and Discount
 */
function changeDiscount() {
  const preciValue = document.getElementById("priceOriginal").value;
  const discountValue = document.getElementById("discountCustom").value;

  priceDiscounts(preciValue, discountValue);
  return;
}

/**
 *
 * @param {*} e Value of input type button
 * @returns Update discount in input Custom of input type button
 */
function updateDiscount(e) {
  const discountValue = document.getElementById("discountCustom");

  discountValue.value = parseInt(e);
  changeDiscount();
  return;
}

function formatMoney(Price, Country, Currency) {
  const formatMoney = new Intl.NumberFormat(Country, {
    style: "currency",
    currency: Currency,
    minimumFractionDigits: 2,
  });

  return formatMoney.format(Price);
}
