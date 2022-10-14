import { Meta, StoryObj } from '@storybook/react'
import { formTest } from './index.test'
import { SignIn } from '.'
import { rest } from 'msw'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login Realizado'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    formTest(canvasElement)
  }
}
