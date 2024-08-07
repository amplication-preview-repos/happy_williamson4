import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type PhoneNumberUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  phoneNumber?: string | null;
};
