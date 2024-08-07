import { Client } from "../client/Client";

export type PhoneNumber = {
  client?: Client | null;
  createdAt: Date;
  id: string;
  phoneNumber: string | null;
  updatedAt: Date;
};
