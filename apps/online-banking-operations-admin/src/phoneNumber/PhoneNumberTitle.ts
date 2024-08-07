import { PhoneNumber as TPhoneNumber } from "../api/phoneNumber/PhoneNumber";

export const PHONENUMBER_TITLE_FIELD = "phoneNumber";

export const PhoneNumberTitle = (record: TPhoneNumber): string => {
  return record.phoneNumber?.toString() || String(record.id);
};
