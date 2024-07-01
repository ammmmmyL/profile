import { Meta, StoryObj } from '@storybook/react/*';
import { Bubble } from '../features/static/Bubble';

const meta = {
  component: Bubble,
} satisfies Meta<typeof Bubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundWidth: 500,
    backgroundHeight: 400,
    size: 200,
  },
};

export const Small: Story = {
  args: {
    backgroundWidth: 400,
    backgroundHeight: 300,
    size: 100,
  },
};
