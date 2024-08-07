import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type EmailUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  emailAddress?: string | null;
};
