import './Attach.stories.css';

import * as React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';

import { IconTrash } from '../../../icons/IconTrash/IconTrash';
import { cn } from '../../../utils/bem';
import { createMetadata, createStory } from '../../../utils/storybook';
import { Attach } from '../Attach';

import mdx from './Attach.mdx';

const defaultKnobs = () => ({
  fileName: text('fileName', 'Приложенный документ'),
  fileDescription: text('fileDescription', '1,5 Mб 21.02.2019, 14:12'),
  fileExtension: text('fileExtension', 'doc'),
  errorText: text('errorText', ''),
  loading: boolean('loading', false),
  loadingProgress: number('loadingProgress', 70),
  loadingText: text('loadingText', 'Загрузка'),
  withButtonAction: boolean('withButtonAction', false),
});

const cnAttachStories = cn('AttachStories');

function Default() {
  const {
    loading,
    loadingText,
    fileName,
    loadingProgress,
    errorText,
    fileDescription,
    withButtonAction,
    fileExtension,
  } = defaultKnobs();

  return (
    <div className={cnAttachStories()}>
      <Attach
        loading={loading}
        loadingText={loadingText}
        fileName={fileName}
        loadingProgress={loadingProgress}
        errorText={errorText}
        fileDescription={fileDescription}
        buttonIcon={IconTrash}
        buttonTitle="Удалить"
        fileExtension={fileExtension}
        {...(withButtonAction && {
          onButtonClick: (e) => {
            e.stopPropagation();
            console.log('onButtonClick');
          },
        })}
        onClick={() => console.log('onClick')}
      />
    </div>
  );
}

export const Playground = createStory(() => <Default />, {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=58%3A16411',
    },
  },
});

export default createMetadata({
  title: 'Компоненты|/Attach',
  id: 'components/Attach',
  parameters: {
    docs: {
      page: mdx,
    },
  },
});
