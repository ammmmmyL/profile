import { Meta, StoryObj } from '@storybook/react/*';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Night: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    children: <span>Button</span>,
  },
  decorators: (Story) => {
    return (
      <div className="flex items-center justify-center flex-1 theme-night">
        <Story />
      </div>
    );
  },
};
