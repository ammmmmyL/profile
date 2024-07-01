import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import type { Preview } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
