import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const BankAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentBalance" source="currentBalance" />
        <TextField label="ID" source="id" />
        <TextField label="initialBalance" source="initialBalance" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
