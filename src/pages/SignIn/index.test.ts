import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export interface canvaElementeProps extends HTMLElement { }

export async function formTest(canvasElement: canvaElementeProps) {
  const canvas = within(canvasElement)

  // Simulate a user typing email and password
  userEvent.type(canvas.getByPlaceholderText('seuemail@exemplo.com.br'), 'lucasblante@hotmail.com')
  userEvent.type(canvas.getByPlaceholderText('**********'), '12345678')

  // Simulate user click on submit button
  userEvent.click(canvas.getByRole('button'))

  // Verify if 'Login Realizado' text was shown in the page
  await waitFor(() => {
    return expect(canvas.getByText('Login Realizado!')).toBeInTheDocument()
  })
}