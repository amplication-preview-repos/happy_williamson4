import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type PhoneNumberCreateInput = {
  client?: ClientWhereUniqueInput | null;
  phoneNumber?: string | null;
};
