/** @type { import('@storybook/react').Preview } */

import '../style.css'
import '../stories/tokens.css'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    designToken: {
      defaultTab: 'Colors',
      }
  },
};



export default preview;
