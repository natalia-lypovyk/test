import { Phone } from "../shared/types";

export interface ContactType {
  fullName: string,
  phones: Phone[],
  email: string,
  birthday: string,
  comment: string,
  id: string
};
