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
  users: User[];
  loading: boolean;
  error: string | null;
}
