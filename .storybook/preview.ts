import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import type { Preview } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'day',
      values: [
        {
          name: 'day',
          value: '#647E90',
        },
        {
          name: 'sunset',
          value: '#D09475',
        },
        {
          name: 'night',
          value: '#456A97',
        },
      ],
    },
  },
};

export default preview;
