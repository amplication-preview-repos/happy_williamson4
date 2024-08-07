import { BankAccountUpdateManyWithoutClientsInput } from "./BankAccountUpdateManyWithoutClientsInput";
import { EmailUpdateManyWithoutClientsInput } from "./EmailUpdateManyWithoutClientsInput";
import { PhoneNumberUpdateManyWithoutClientsInput } from "./PhoneNumberUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  bankAccounts?: BankAccountUpdateManyWithoutClientsInput;
  dateOfBirth?: Date | null;
  emails?: EmailUpdateManyWithoutClientsInput;
  name?: string | null;
  password?: string | null;
  phoneNumbers?: PhoneNumberUpdateManyWithoutClientsInput;
  username?: string | null;
};
