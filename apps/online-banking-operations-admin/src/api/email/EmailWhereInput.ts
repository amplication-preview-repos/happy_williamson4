import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmailWhereInput = {
  client?: ClientWhereUniqueInput;
  emailAddress?: StringNullableFilter;
  id?: StringFilter;
};
