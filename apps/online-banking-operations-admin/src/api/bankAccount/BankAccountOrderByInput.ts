import { SortOrder } from "../../util/SortOrder";

export type BankAccountOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  currentBalance?: SortOrder;
  id?: SortOrder;
  initialBalance?: SortOrder;
  updatedAt?: SortOrder;
};
