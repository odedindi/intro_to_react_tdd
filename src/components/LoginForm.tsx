import React, { useState } from 'react';

export interface LoginFormProps {
	shouldRemember: boolean;
	onInputChange: (variable: {
		username: string;
		password: string;
	}) => void;
	onRememberChange: (remember: boolean) => void;
	onSubmit: (
		username: string,
		password: string,
		remember: boolean,
	) => void;
}

const LoginForm = ({
	shouldRemember,
	onInputChange,
	onRememberChange,
	onSubmit,
}: LoginFormProps) => {
	const [values, setValues] = useState({
		username: '',
		password: '',
	});
	const [remember, setRemember] = useState(shouldRemember);

	const handleInputChange = ({
		target,
	}: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setValues({ ...values, [name]: value });
		onInputChange({ ...values, [name]: value });
	};

	const handleRememberChange = ({
		target,
	}: React.ChangeEvent<HTMLInputElement>) => {
		setRemember(target.checked);
		onRememberChange(target.checked);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(values.username, values.password, remember);
	};

	return (
		<form data-testid="login-form" onSubmit={handleSubmit}>
			<label htmlFor="username">
				USERNAME:
				<input
					type="text"
					data-testid="username"
					name="username"
					value={values.username}
					onChange={handleInputChange}
				/>
			</label>
			<label htmlFor="password">
				PASSWORD:
				<input
					type="password"
					data-testid="password"
					name="password"
					value={values.password}
					onChange={handleInputChange}
				/>
			</label>
			<label>
				<input
					data-testid="remember"
					name="remember"
					type="checkbox"
					checked={remember}
					onChange={handleRememberChange}
				/>
				Remember me?
			</label>
			<button type="submit" data-testid="submit">
				Sign in
			</button>
		</form>
	);
};

export default LoginForm;
