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
	let value = 0
	for(product of products){
		value += product.regularPrice
	}
	return value
}

function getPrice(products, promotion){
	let value = 0
	for(product of products){
		const cont = product.promotions.filter(p => {
			return p.looks.includes(promotion)
		})
		value += cont.length > 0 ? cont[0].price : product.regularPrice
	}
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
	const regularPrice = getRegularPrice(products)
	const totalPrice = getPrice(products, promotion)
	const productsMapped = products.map(product => {
		return {category: product.category, name: product.name}
	})
	return {products: productsMapped, promotion: promotion, totalPrice: String(totalPrice)}
}

module.exports = { getShoppingCart };
