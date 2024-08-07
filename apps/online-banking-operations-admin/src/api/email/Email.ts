import { Client } from "../client/Client";

export type Email = {
  client?: Client | null;
  createdAt: Date;
  emailAddress: string | null;
  id: string;
  updatedAt: Date;
};
