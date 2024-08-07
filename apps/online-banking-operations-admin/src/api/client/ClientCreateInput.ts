import { BankAccountCreateNestedManyWithoutClientsInput } from "./BankAccountCreateNestedManyWithoutClientsInput";
import { EmailCreateNestedManyWithoutClientsInput } from "./EmailCreateNestedManyWithoutClientsInput";
import { PhoneNumberCreateNestedManyWithoutClientsInput } from "./PhoneNumberCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  bankAccounts?: BankAccountCreateNestedManyWithoutClientsInput;
  dateOfBirth?: Date | null;
  emails?: EmailCreateNestedManyWithoutClientsInput;
  name?: string | null;
  password?: string | null;
  phoneNumbers?: PhoneNumberCreateNestedManyWithoutClientsInput;
  username?: string | null;
};
