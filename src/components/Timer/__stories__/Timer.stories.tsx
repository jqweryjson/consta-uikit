import React from 'react';
import { boolean, number, select } from '@storybook/addon-knobs';

import { createMetadata, createStory } from '../../../utils/storybook';
import { Timer } from '../Timer';

import mdx from './Timer.mdx';

const defaultKnobs = () => ({
  seconds: number('seconds', 5),
  progress: number('progress', 50),
  animation: boolean('animation', false),
  size: select('size', ['s', 'm'], 'm'),
});

function Default() {
  const { seconds, progress, animation, size } = defaultKnobs();

  return <Timer seconds={seconds} progress={progress} animation={animation} size={size} />;
}

export const Playground = createStory(() => <Default />, {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=5867%3A11',
    },
  },
});

export default createMetadata({
  title: 'Компоненты|/Timer',
  id: 'components/Timer',
  parameters: {
    docs: {
      page: mdx,
    },
  },
});
