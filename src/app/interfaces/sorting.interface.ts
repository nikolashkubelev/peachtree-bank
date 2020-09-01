export enum SortingOrdersList {
  ASC = 'asc',
  DESC = 'desc'
}

export type SortingOrder = SortingOrdersList.ASC | SortingOrdersList.DESC;

export enum SortingTypesList {
  DATE = 'date',
  BENEFICIARY = 'beneficiary',
  AMOUNT = 'amount'
}

export type SortingType = SortingTypesList.DATE | SortingTypesList.BENEFICIARY | SortingTypesList.AMOUNT;

export interface SortingParams {
  type: SortingType;
  order: SortingOrder;
}
