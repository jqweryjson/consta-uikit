import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { cn } from '../../../utils/bem';
import { createMetadata, createStory } from '../../../utils/storybook';
import {
  Avatar,
  avatarPropForm,
  avatarPropFormDefault,
  avatarPropSize,
  avatarPropSizeDefault,
} from '../Avatar';

import mdx from './Avatar.mdx';

const defaultKnobs = () => ({
  url: text('url', 'https://pbs.twimg.com/profile_images/1150453787603156992/DoiKLDMY_400x400.png'),
  name: text('name', 'Вадим Матвеев'),
  size: select('size', avatarPropSize, avatarPropSizeDefault),
  form: select('form', avatarPropForm, avatarPropFormDefault),
});

const cnAvatarStories = cn('AvatarStories');

function Default() {
  const { url, name, size, form } = defaultKnobs();

  return (
    <div className={cnAvatarStories()}>
      <Avatar url={url} name={name} size={size} form={form} />
    </div>
  );
}

export const Playground = createStory(() => <Default />, {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=56%3A30966',
    },
  },
});

export default createMetadata({
  title: 'Компоненты|/Avatar',
  id: 'components/Avatar',
  parameters: {
    docs: {
      page: mdx,
    },
  },
});
