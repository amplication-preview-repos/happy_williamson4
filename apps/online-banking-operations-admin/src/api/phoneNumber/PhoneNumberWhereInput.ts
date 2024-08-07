import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PhoneNumberWhereInput = {
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
