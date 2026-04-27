// Base shape for every user in the system
export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  role?: string;
  createdAt?: number;
}
