import TodoForm from "./NewTodoForm";
import App from "./App";
import {render,fireEvent,container} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

test("Render of form component", function(){
    render(<TodoForm />)
})

test("Snapshot test of form component", function(){
    const {asFragment} = render(<TodoForm />)
    expect(asFragment()).toMatchSnapshot()
})



test("Changing value of form input", function(){
const {getByLabelText,getByText,container} = render(<App />)

expect(container.querySelector("ol")).toBeInTheDocument()
expect(container.querySelector("li")).not.toBeInTheDocument()
expect(getByLabelText("todo:").value).toEqual("")

fireEvent.change(getByLabelText("todo:"),
{target :{name:"todo", value: "Eat more chickens"}})

expect(getByLabelText("todo:").value).toEqual("Eat more chickens")

expect(container.querySelector("li")).not.toBeInTheDocument()
fireEvent.submit(getByText("submit"))
expect(container.querySelector("li")).toBeInTheDocument()

})