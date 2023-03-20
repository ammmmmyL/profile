import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Bubble } from './Bubble';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Bubble,
  parameters: {
    docs: {
      description: {
        component: 'A _static_ floating bubble',
      },
    },
  },
} as ComponentMeta<typeof Bubble>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Bubble> = (args) => <Bubble {...args} />;

export const Default = Template.bind({});

Default.args = {
  backgroundWidth: 500,
  backgroundHeight: 400,
  Size: 200,
};

export const Small = Template.bind({});

Small.args = {
  backgroundWidth: 400,
  backgroundHeight: 300,
  Size: 100,
};
