import { User } from "../interfaces/User";
import { users } from "../data/users";

// Checks username + password against the mock list and returns the matched user or null
export function authenticate(username: string, password: string): User | null {
  const found = users.find(
    (u) => u.username === username && u.password === password
  );
  return found ?? null;
}
