import { Role } from "../../../../back/src/authentification/roles.enum";

// Todo types
export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  role: Role;
}

export interface UserState {
  userListe: User[];
  currentUser: User[];
  isAuth: boolean;
  errors: string;
  status: string;
}
export interface Image {
  public_id: string;
  folder: string;
  secure_url: string;
}
