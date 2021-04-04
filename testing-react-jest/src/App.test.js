import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { App } from './App';




// Provided to us with react testing lib
//
// import * as ReactDOM from 'react-dom';
// import { getByText, getByLabelText  } from '@testing-library/dom';
//
// const render = (component) => {
// 	const root = document.createElement("div");
// 	ReactDOM.render(component, root);
// 	return getQueriesForElement(root);
// }

const mockCreateItem = jest.mock("./api");


test("renders the correct content", () => {
	// Render a React component to the DOM
	// DOM Testing lib
	const { getByText, getByLabelText } = render(<App />);


	// Use DOM APIs (querySelector) to make assertions

	expect(getByText("TODOS")).not.toBeNull();
	expect(getByLabelText("What needs to be done?")).not.toBeNull();
	// dont really need expect or .not.toBeNull() will throw error anyway
	getByText("Add #1");
	// expect(root.querySelector("label").textContent).toBe(
	//	"What needs to be done?"
	// );
	// expect(root.querySelector("button").textContent).toBe("Add #1");

});

test("allows users to add items to their list", async () => {
	const todoText = "RTL Presentation Slides";

	
	mockCreateItem.mockResolvedValueOnce({ id: 123, text: todoText });
	const { getByLabelText, getByText } = render(<App />);

	const input = getByLabelText("What needs to be done?");
	fireEvent.change(input, { target: { value: todoText} });
	fireEvent.click(getByText("Add #1"));

	await getByText(todoText);
	await getByText("Add #2");
});