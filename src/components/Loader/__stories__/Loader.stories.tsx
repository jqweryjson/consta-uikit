import * as React from 'react';
import { select } from '@storybook/addon-knobs';

import { createMetadata, createStory } from '../../../utils/storybook';
import { Loader, loaderPropSize, loaderPropSizeDefault } from '../Loader';

import mdx from './Loader.mdx';

const defaultKnobs = () => ({
  size: select('size', loaderPropSize, loaderPropSizeDefault),
});

function Default() {
  const { size } = defaultKnobs();

  return <Loader size={size} />;
}

export const Playground = createStory(() => <Default />, {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=2334%3A37476',
    },
  },
});

export default createMetadata({
  title: 'Компоненты|/Loader',
  id: 'components/Loader',
  parameters: {
    docs: {
      page: mdx,
    },
  },
});
