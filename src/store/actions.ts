import * as C from './constants';

export const addArticleToCart = (cartItem: CartItem) => ({
	type: C.ADD_TO_CART,
	payload: cartItem,
});

export const removeArticleFromCart = (id: Id) => ({
	type: C.REMOVE_FROM_CART,
	payload: id,
});
