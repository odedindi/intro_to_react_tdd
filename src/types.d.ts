type CartItem = any;
type Id = string | number;
type State = {
	cartItems: CartItem[];
};

type ReducerActionType = string;

type ADD_TO_CART = ReducerActionType;

type REMOVE_FROM_CART = ReducerActionType;

type Action =
	| { type: ADD_TO_CART; payload: CartItem }
	| { type: REMOVE_FROM_CART; payload: Id };

type Store = [state: State, dispatch: Dispatch<Action>];
