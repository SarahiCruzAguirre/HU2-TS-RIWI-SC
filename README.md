# Auth App — M5.4S2

React + TypeScript project implementing modular login, a CRUD class with HTTP-like logs, and a method decorator.

---

## Project structure

```
src/
├── components/
│   └── Login.tsx          # Login form with validation
├── interfaces/
│   └── User.ts            # User type definition
├── data/
│   └── users.ts           # Mock user array
├── utils/
│   ├── auth.ts            # authenticate() function
│   ├── UserStore.ts       # CRUD class with console logs
│   └── decorators.ts      # @withDefaults decorator
└── views/
    └── Dashboard.tsx      # Post-login view
```

---

## Prerequisites

- Node.js ≥ 18
- npm ≥ 9

---

## Getting started

```bash
# 1 — clone / enter the project folder
cd auth-app

# 2 — install dependencies
npm install

# 3 — start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Test credentials

| Username | Password  | Role  |
|----------|-----------|-------|
| admin    | admin123  | admin |
| sara     | 1234   | user  |
| camilo     | 123456   | user  |

---

## Testing the CRUD + decorator from the browser console

After the page loads, open DevTools → Console and paste:

```js
// Dynamic import works because Vite exposes ESM modules
const { UserStore } = await import("/src/utils/UserStore.ts");
const store = new UserStore();

// List all users
store.list();

// Find by name
store.findByName("john");

// Create — the @withDefaults decorator automatically adds role + createdAt
const newUser = store.create({ username: "maria", password: "m123", email: "maria@test.com" });
console.log(newUser); // { id: 4, username: "maria", role: "user", createdAt: <timestamp>, ... }

// Update
store.update(1, { email: "new@admin.com" });

// Remove
store.remove(2);
```

Each method prints a `[GET] / [POST] / [PATCH] / [DELETE]` line to the console, simulating HTTP calls.

---

## Key implementation notes

### Task 1 — Modular login
- `interfaces/User.ts` defines the `User` shape.
- `data/users.ts` holds the mock list.
- `utils/auth.ts` exports `authenticate(username, password)` — the only place that touches credentials.
- `components/Login.tsx` imports `authenticate` and calls `onSuccess(user)` on match, which triggers the redirect to `Dashboard`.

### Task 2 — UserStore CRUD
- `utils/UserStore.ts` contains a class with `list`, `findByName`, `create`, `update`, `remove`.
- Each method logs a simulated HTTP verb + path before operating on the in-memory array.

### Task 3 — Decorator
- `utils/decorators.ts` exports `@withDefaults`, a method decorator.
- Applied to `UserStore.create`, it wraps the original method and injects `role: "user"` and `createdAt: Date.now()` into the returned object without modifying the base logic.
- `experimentalDecorators: true` is set in `tsconfig.json`.

---

## Build for production

```bash
npm run build
# output goes to /dist
```

---

## Upload to GitHub

```bash
git init
git add .
git commit -m "feat: modular auth, UserStore CRUD and withDefaults decorator"
git remote add origin https://github.com/<your-user>/auth-app.git
git push -u origin main
```

- create by : Sarahi Nikole Cruz Aguirre
