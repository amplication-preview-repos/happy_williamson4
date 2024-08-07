import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ClientTitle } from "../client/ClientTitle";

export const BankAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <NumberInput label="currentBalance" source="currentBalance" />
        <NumberInput label="initialBalance" source="initialBalance" />
      </SimpleForm>
    </Edit>
  );
};
