import * as C from './constants';

export const initialState: State = {
	cartItems: [],
};

export const reducer = (
	state: State = initialState,
	action: Action,
): State => {
	if (process.env.NODE_ENV === 'development') {
		console.log('from the reducer: ', action);
	}
	switch (action.type) {
		case C.ADD_TO_CART:
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};
		case C.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: [
					...state.cartItems.filter(
						(item: CartItem) => item.id !== action.payload,
					),
				],
			};
		default:
			return state;
	}
};
