import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type EmailCreateInput = {
  client?: ClientWhereUniqueInput | null;
  emailAddress?: string | null;
};
