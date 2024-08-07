import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ClientTitle } from "../client/ClientTitle";

export const BankAccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <NumberInput label="currentBalance" source="currentBalance" />
        <NumberInput label="initialBalance" source="initialBalance" />
      </SimpleForm>
    </Create>
  );
};
