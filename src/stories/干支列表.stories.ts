import type { Meta, StoryObj } from '@storybook/react'
import { 干支列表 } from '@/view/干支列表'
const meta = {
  title: 'Example/干支列表展示',
  component: 干支列表,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof 干支列表>

export default meta

type Story = StoryObj<typeof meta>

export const 天干排列: Story = {
  args: {
    每行个数: 10,
  },
}

export const 地支排列: Story = {
  args: {
    每行个数: 12,
  },
}
