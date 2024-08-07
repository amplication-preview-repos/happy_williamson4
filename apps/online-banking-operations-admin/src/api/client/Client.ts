import { BankAccount } from "../bankAccount/BankAccount";
import { Email } from "../email/Email";
import { PhoneNumber } from "../phoneNumber/PhoneNumber";

export type Client = {
  bankAccounts?: Array<BankAccount>;
  createdAt: Date;
  dateOfBirth: Date | null;
  emails?: Array<Email>;
  id: string;
  name: string | null;
  password: string | null;
  phoneNumbers?: Array<PhoneNumber>;
  updatedAt: Date;
  username: string | null;
};
