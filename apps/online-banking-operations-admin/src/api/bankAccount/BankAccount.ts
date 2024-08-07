import { Client } from "../client/Client";

export type BankAccount = {
  client?: Client | null;
  createdAt: Date;
  currentBalance: number | null;
  id: string;
  initialBalance: number | null;
  updatedAt: Date;
};
