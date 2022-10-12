import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '.'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
      children: 'Hey',
      size: 'md'
    },
    argTypes: {
      size: {
        options: ['sm', 'md', 'lg'],
        control: {
          type: 'inline-radio'
        }
      },
      asChild: {
        table: {
          disable: true
        }
      }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}


export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Teste</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}