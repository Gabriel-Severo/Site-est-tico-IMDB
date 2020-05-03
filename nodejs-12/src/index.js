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

function getShoppingCart(ids, productsList) {
	const products = productsList.filter(product => {
		for(id of ids){
			if (product.id == id){
				return true
			}
		}
		return false
	});
	const productsMapped = products.map(product => {
		return {category: product.category, name: product.name}
	})
	return {products: productsMapped, promotion: getPromotion(products)}
}

module.exports = { getShoppingCart };
