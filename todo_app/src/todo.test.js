import Todo from "./Todo";
import TodoList from "./TodoList";
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Render Todo component", function(){
    render(<Todo />)
})

test("Snapshot of Todo", function(){
    const {asFragment} = render(<Todo />)
    expect(asFragment()).toMatchSnapshot()
})


test("Render TodoList component", function(){
    render(<TodoList />)
})

test("Snapshot of TodoList", function(){
    const {asFragment} = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot()
})