import { User } from "../interfaces/User";

// Pre-loaded users for testing the login and CRUD operations
export const users: User[] = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    email: "admin@example.com",
    role: "admin",
    createdAt: Date.now(),
  },
  {
    id: 2,
    username: "camilo",
    password: "123456",
    email: "camiiiii@example.com",
    role: "user",
    createdAt: Date.now(),
  },
  {
    id: 3,
    username: "sara",
    password: "1234",
    email: "sara@example.com",
    role: "user",
    createdAt: Date.now(),
  },
];
