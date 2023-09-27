import { Devvit } from '@devvit/public-api';

import { Columns } from '../../components/Columns.js';
import { BlockGalleryProps } from '../../components/BlockGallery.js';

export const HomePage = ({ state }: BlockGalleryProps): JSX.Element => {
  const pages: string[][] = [
    ['Button', 'buttons'],
    ['Image', 'images'],
    ['Stack', 'stacks'],
    ['Spacer', 'spacers'],
    ['Text', 'text'],
    ['Icon', 'icon'],
    ['Color', 'color'],
  ];

  const pageButtons = pages.map(([label, id]) => (
    <button
      onPress={() => {
        state.currentPage = id;
      }}
      width={50}
    >
      {label}
    </button>
  ));

  return (
    <vstack gap="medium">
      <vstack>
        <text
          selectable={false}
          size="xlarge"
          weight="bold"
          color="neutral-content"
          onPress={() => {
            state.showToast('Hello, world!');
          }}
        >
          Block Gallery
        </text>
        <text selectable={false} size="medium" color="neutral-content-weak">
          Version 2.0
        </text>
      </vstack>

      <Columns count={2}>{pageButtons}</Columns>
    </vstack>
  );
};
