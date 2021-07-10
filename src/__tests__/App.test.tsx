import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('<App/>', () => {
	const renderApp = () => render(<App />);

	test('renders hello tests', async () => {
		const { getByText } = renderApp();
		expect(getByText('Hello tests')).toBeInTheDocument();
	});

	test('button starts as disabled but as input is entered in the input field it should become active', () => {
		const { getByTestId } = renderApp();
		// const searchButton = screen.getByRole("button");
		const searchButton = getByTestId('myBtn');
		expect(searchButton).toBeDisabled();
		fireEvent.change(getByTestId('myInput'), {
			target: { value: 'some text' },
		});
		expect(searchButton).not.toBeDisabled();
	});

	test("starting number of items in the store's cart items list is 0", () => {
		const { getByText } = renderApp();
		expect(getByText(/^in the store there are/)).toHaveTextContent(
			'in the store there are 0 items',
		);
	});
});
