# JavaScript Variables

  

## What Are Variables?

A variable is a named container for storing data. Think of it as a labelled box you can put values in and refer to later.

  

```js

let  name = "Alice";

let  age = 25;

const  country = "Kenya";

```

  

---

  

## Declaring Variables

  

| Keyword | Use For | Can Update? |

|---------|---------|-------------|

| `var` | Old way — avoid it |  Yes |

| `let` | Values that change |  Yes |

| `const` | Values that stay fixed |  No |

  

```js

var  city = "Nairobi"; // avoid

let  score = 0; // can change later

const  PI = 3.14159; // fixed forever

```

  

>  Default to `const`. Use `let` only when the value needs to change.

  

---

  

## Naming Rules

  

 **Allowed:**

- Start with a letter, `_`, or `$`

- Contain letters, numbers, `_`, `$`

- Any length; case-sensitive (`name` ≠ `Name`)

  

**Not Allowed:**

- Start with a number → `let 1name` 

- Contain spaces → `let my name` 

- Use reserved words → `let let`, `let return` 

- Use special characters → `let user-name`, `let user@x` 

  

---

  

## Naming Styles

  

| Style | Example | Used For |

|-------|---------|----------|

| `camelCase` | `firstName` | Variables & functions (most common) |

| `PascalCase` | `UserAccount` | Classes & constructors |

| `UPPER_SNAKE_CASE` | `MAX_RETRIES` | Global constants |

| `snake_case` | `user_name` | Not standard in JS |

  

```js

let  totalPrice = 49.99; // camelCase

class  UserAccount {} // PascalCase

const  MAX_RETRIES = 3; // UPPER_SNAKE_CASE

  

// Boolean prefix tips

let  isActive = true;

let  hasPermission = false;

```

  

---

  

## Summary

  

-  **Variables** store and reuse data in your program.

- Use **`const`** by default, **`let`** when the value changes, never **`var`**.

- Names must start with a letter, `_`, or `$` — no spaces, no reserved words.

- Use **camelCase** for variables, **PascalCase** for classes, **UPPER_SNAKE_CASE** for constants.