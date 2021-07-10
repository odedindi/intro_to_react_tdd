import React, { useEffect, useState } from 'react';

import { useStore } from './store';

import LoginForm from './components/LoginForm';

const App: React.FC = (): JSX.Element => {
	const [state]: Store = useStore();

	const [isDisabled, setIsDisabled] = useState<boolean>(true);
	const [inputContent, setInputContent] = useState<string>('');

	useEffect(() => {
		inputContent.length ? setIsDisabled(false) : setIsDisabled(true);
	}, [inputContent]);

	const [shouldRemember] = useState(true);
	const onInputChange = (variable: {
		username: string;
		password: string;
	}) => {
		console.log(variable);
	};
	const onRememberChange = (remember: boolean) => {
		console.log(remember);
	};
	const onSubmit = (username: string, password: string) => {
		console.log(username, password);
	};
	return (
		<div>
			<h1>Hello tests</h1>
			<input
				data-testid="myInput"
				type="text"
				value={inputContent}
				onChange={({
					target,
				}: React.ChangeEvent<HTMLInputElement>): void =>
					setInputContent(target.value)
				}
			/>
			<button data-testid="myBtn" disabled={isDisabled}>
				Click me
			</button>
			<br />
			<br />
			<LoginForm
				shouldRemember={shouldRemember}
				onInputChange={onInputChange}
				onRememberChange={onRememberChange}
				onSubmit={onSubmit}
			/>

			<div>
				<h2>in the store there are {state.cartItems.length} items</h2>
			</div>
		</div>
	);
};

export default App;
