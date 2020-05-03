const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
	const products = productsList.filter(product => {
		for(id of ids){
			if (product.id == id){
				return true
			}
		}
		return false
	});
	return products
}

module.exports = { getShoppingCart };
