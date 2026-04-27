import { User } from "../interfaces/User";
import { users } from "../data/users";
import { withDefaults } from "./decorators";

// In-memory store that mimics a REST API with console logs per operation
export class UserStore {
  private data: User[] = [...users];

  // GET /users — returns the full list
  list(): User[] {
    console.log("[GET] /users — fetching all users");
    return this.data;
  }

  // GET /users?name=... — finds a single user by username
  findByName(username: string): User | undefined {
    console.log(`[GET] /users?name=${username} — searching user`);
    return this.data.find((u) => u.username === username);
  }

  // POST /users — adds a new user; decorated to inject role + createdAt
  @withDefaults
  create(newUser: Omit<User, "id" | "role" | "createdAt">): User {
    console.log("[POST] /users — creating user:", newUser.username);

    const user: User = {
      id: this.data.length + 1,
      ...newUser,
    };

    this.data.push(user);
    return user;
  }

  // PATCH /users/:id — merges partial changes into an existing user
  update(id: number, changes: Partial<User>): User | null {
    console.log(`[PATCH] /users/${id} — updating user`);

    const index = this.data.findIndex((u) => u.id === id);
    if (index === -1) return null;

    this.data[index] = { ...this.data[index], ...changes };
    return this.data[index];
  }

  // DELETE /users/:id — removes a user and returns whether it worked
  remove(id: number): boolean {
    console.log(`[DELETE] /users/${id} — removing user`);

    const before = this.data.length;
    this.data = this.data.filter((u) => u.id !== id);
    return this.data.length < before;
  }
}
