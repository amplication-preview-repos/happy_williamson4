import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { BankAccountTitle } from "../bankAccount/BankAccountTitle";
import { EmailTitle } from "../email/EmailTitle";
import { PhoneNumberTitle } from "../phoneNumber/PhoneNumberTitle";

export const ClientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bankAccounts"
          reference="BankAccount"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BankAccountTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <ReferenceArrayInput
          source="emails"
          reference="Email"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmailTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="password" source="password" />
        <ReferenceArrayInput
          source="phoneNumbers"
          reference="PhoneNumber"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PhoneNumberTitle} />
        </ReferenceArrayInput>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
