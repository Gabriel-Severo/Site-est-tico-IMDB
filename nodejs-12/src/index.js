const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getPromotion(products){
	const pro = []
	for(let product of products){
		if(!(pro.includes(product.category))){
			pro.push(product.category)
		}
	}
	return promotions[pro.length-1]
}

function getRegularPrice(products){
	let value = products.reduce((value, product) => {
		return product.regularPrice + value
	}, 0)
	return value
}

function getPrice(products, promotion){
	const value = products.reduce((value, product) => {
		const cont = product.promotions.filter(p => {
			return p.looks.includes(promotion)
		})
		return value += cont.length > 0 ? cont[0].price : product.regularPrice
	}, 0)
	return value.toFixed(2)
}

function getShoppingCart(ids, productsList) {
	const products = productsList.filter(product => {
		for(id of ids){
			if (product.id == id){
				return true
			}
		}
		return false
	});
	const promotion = getPromotion(products)
	const regularPrice = getRegularPrice(products)//Obtem o preço total sem nenhum desconto
	const totalPrice = getPrice(products, promotion)//Obtem o preço total com descontos
	const discountValue = (regularPrice - totalPrice).toFixed(2)
	const discount = (discountValue * 100 / regularPrice).toFixed(2) + "%"
	const productsMapped = products.map(product => {
		return {category: product.category, name: product.name}
	})
	return {products: productsMapped, promotion: promotion, totalPrice: String(totalPrice), discountValue: discountValue, discount: discount}
}

module.exports = { getShoppingCart, getPrice, getRegularPrice, getPromotion };