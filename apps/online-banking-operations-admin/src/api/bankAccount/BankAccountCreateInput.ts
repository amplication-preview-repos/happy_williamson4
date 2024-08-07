import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type BankAccountCreateInput = {
  client?: ClientWhereUniqueInput | null;
  currentBalance?: number | null;
  initialBalance?: number | null;
};
