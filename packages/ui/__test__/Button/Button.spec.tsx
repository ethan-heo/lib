import * as React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Button from '../../src/Button'

test(`렌더링`, () => {
    render(<Button data-testid="test-btn">hello world</Button>)

    expect(screen.getByTestId('test-btn').innerHTML).toBe('hello world')
    expect(screen.getByTestId('test-btn')).toHaveStyle(`
        cursor: pointer;
    `)
})