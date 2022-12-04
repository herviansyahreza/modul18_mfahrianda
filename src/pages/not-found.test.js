import { Renderer,screen,cleanup, render } from '@testing-library/react'
import NotFound from '../not-found'

afterEach(() =>{
    cleanup();
})

test('checking number',()=>{
    render(<NotFound/>)
    const todoElement = screen.getByText('404')
    expect(todoElement).toHaveTextContent('404')
})