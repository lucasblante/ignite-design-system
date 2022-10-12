import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
      children: 'Title',
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}


export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Teste</h1>
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