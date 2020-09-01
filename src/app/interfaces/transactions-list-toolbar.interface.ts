import { SortingParams } from './sorting.interface';

export type TransactionsListToolbarControlsKeys = 'query' | 'sorting';

export interface TransactionsListToolbarParams {
  query: string;
  sorting: SortingParams;
}
