import React, { useState } from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { createMetadata, createStory } from '../../../utils/storybook';
import {
  Switch,
  switchPropAlign,
  switchPropAlignDefault,
  switchPropSize,
  switchPropSizeDefault,
  switchPropView,
  switchPropViewDefault,
} from '../Switch';

import mdx from './Switch.mdx';

const defaultKnobs = () => ({
  disabled: boolean('disabled', false),
  size: select('size', switchPropSize, switchPropSizeDefault),
  view: select('view', switchPropView, switchPropViewDefault),
  align: select('align', switchPropAlign, switchPropAlignDefault),
  label: text('label', 'Move me, I beg you!'),
});

function Default() {
  const { disabled, size, view, label, align } = defaultKnobs();
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = ({ checked }: { checked: boolean }) => setChecked(checked);

  return (
    <form>
      <Switch
        checked={checked}
        disabled={disabled}
        size={size}
        view={view}
        label={label}
        align={align}
        onChange={handleChange}
      />
    </form>
  );
}

export const Playground = createStory(() => <Default />, {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=58%3A2269',
    },
  },
});

export default createMetadata({
  title: 'Компоненты|/Switch',
  id: 'components/Switch',
  parameters: {
    docs: {
      page: mdx,
    },
  },
});
