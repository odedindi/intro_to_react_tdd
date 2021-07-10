// ====================== react ===========================
import React, { createContext, useContext, useReducer } from 'react';
// ================ reducer and state =====================
import { initialState, reducer } from './reducer';
// ========================================================

const Store = createContext<Store>([initialState, reducer]);

const useStore = (): Store => useContext(Store);

const StoreProvider: React.FC = ({ children }): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Store.Provider value={[state, dispatch]}>
			{children}
		</Store.Provider>
	);
};

export { useStore, StoreProvider };
