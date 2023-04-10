import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBar from './NavBar';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Page/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NavBar>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof NavBar> = () => <NavBar />;

export const Default = Template.bind({});
