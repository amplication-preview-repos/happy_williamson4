import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type BankAccountUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  currentBalance?: number | null;
  initialBalance?: number | null;
};
