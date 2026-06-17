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



## Variables

### Primitive Variables (Data Types)

JavaScript has **7 primitive data types** (values that are not objects and have no methods):

- **`string`** – Text (e.g., `"Hello"`, `'World'`)
- **`number`** – Integers and floating-point numbers (e.g., `42`, `3.14`)
- **`boolean`** – Logical values: `true` or `false`
- **`undefined`** – Automatically assigned when a variable is declared but not initialized
- **`null`** – Intentional absence of any object or value
- **`symbol`** – Unique and immutable identifiers (used for object keys)

Primitives are passed by **value** (a copy is made when passed to functions), and they are immutable (you can't change the value itself, only reassign the variable).

### Ways to Create a String Variable (3 Common Ways)

```javascript
// 1. Double quotes
let str1 = "Hello, World!";

// 2. Single quotes
let str2 = 'JavaScript is awesome';

// 3. Template literals (backticks) - supports interpolation and multiline
let name = "Alice";
let str3 = `Welcome, ${name}!
This is a multiline string.`;
```
  

