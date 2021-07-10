import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import LoginForm, {
	LoginFormProps as Props,
} from '../components/LoginForm';

describe('<LoginForm />', () => {
	const renderLoginForm = (props: Partial<Props> = {}) => {
		const defaultProps: Props = {
			onInputChange() {
				return;
			},
			onRememberChange() {
				return;
			},
			onSubmit() {
				return;
			},
			shouldRemember: true,
		};
		return render(<LoginForm {...defaultProps} {...props} />);
	};
	test('display blank login form, with remember me checked by default', async () => {
		const { findByTestId } = renderLoginForm();
		const loginForm = await findByTestId('login-form');
		expect(loginForm).toHaveFormValues({
			username: '',
			password: '',
			remember: true,
		});
	});

	test('allow enter a username and a password', async () => {
		const onInputChange = jest.fn();
		const { findByTestId } = renderLoginForm({
			onInputChange,
		});
		const username = await findByTestId('username');
		fireEvent.change(username, {
			target: { value: 'test' },
		});
		expect(onInputChange).toHaveBeenCalledWith({
			password: '',
			username: 'test',
		});
		const password = await findByTestId('password');
		fireEvent.change(password, {
			target: { value: 'password' },
		});
		expect(onInputChange).toHaveBeenCalledWith({
			password: 'password',
			username: 'test',
		});
	});

	test('allow toggling remember', async () => {
		const onRememberChange = jest.fn();
		const { findByTestId } = renderLoginForm({
			onRememberChange,
			shouldRemember: false,
		});
		const remember = await findByTestId('remember');
		fireEvent.click(remember);
		expect(onRememberChange).toHaveBeenCalledWith(true);
		fireEvent.click(remember);
		expect(onRememberChange).toHaveBeenCalledWith(false);
	});

	test('submit the form with username, password, and remember', async () => {
		const onSubmit = jest.fn();
		const { findByTestId } = renderLoginForm({
			onSubmit,
			shouldRemember: false,
		});
		const username = await findByTestId('username');
		const password = await findByTestId('password');
		const remember = await findByTestId('remember');
		const submit = await findByTestId('submit');
		fireEvent.change(username, {
			target: { value: 'test' },
		});
		fireEvent.change(password, {
			target: { value: 'password' },
		});
		fireEvent.click(remember);
		fireEvent.click(submit);
		expect(onSubmit).toHaveBeenCalledWith('test', 'password', true);
	});
});
