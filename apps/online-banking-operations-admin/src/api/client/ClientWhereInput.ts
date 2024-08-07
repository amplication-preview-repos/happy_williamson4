import { BankAccountListRelationFilter } from "../bankAccount/BankAccountListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmailListRelationFilter } from "../email/EmailListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PhoneNumberListRelationFilter } from "../phoneNumber/PhoneNumberListRelationFilter";

export type ClientWhereInput = {
  bankAccounts?: BankAccountListRelationFilter;
  dateOfBirth?: DateTimeNullableFilter;
  emails?: EmailListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  phoneNumbers?: PhoneNumberListRelationFilter;
  username?: StringNullableFilter;
};
