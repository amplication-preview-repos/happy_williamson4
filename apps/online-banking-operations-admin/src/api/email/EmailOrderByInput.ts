import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  emailAddress?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
