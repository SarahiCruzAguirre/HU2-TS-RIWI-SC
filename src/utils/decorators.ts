import { User } from "../interfaces/User";

// Wraps the original method and injects extra fields into the returned user
export function withDefaults(
  _target: object,
  _key: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const original = descriptor.value as (...args: unknown[]) => User;

  descriptor.value = function (...args: unknown[]): User {
    // Call the real create logic first
    const user = original.apply(this, args);

    // Attach extra properties without touching the base method
    user.role = "user";
    user.createdAt = Date.now();

    return user;
  };

  return descriptor;
}
