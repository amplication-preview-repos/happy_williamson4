import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BankAccountWhereInput = {
  client?: ClientWhereUniqueInput;
  currentBalance?: FloatNullableFilter;
  id?: StringFilter;
  initialBalance?: FloatNullableFilter;
};
