export enum PaneHeaderSizesList {
  SMALL = 'small',
  LARGE = 'large'
}

export type PaneHeaderSize = PaneHeaderSizesList.SMALL | PaneHeaderSizesList.LARGE;

export interface PaneHeaderParams {
  icon: string;
  title: string;
  size: PaneHeaderSizesList;
}
