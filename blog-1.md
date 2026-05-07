# Any vs Unknown in TypeScript: Why `unknown` Is the Safer Choice

## Introduction

In TypeScript, `any` and `unknown` are used when the type of a value is not known beforehand. However, they behave very differently.

The `any` type disables TypeScript's type checking. When a variable is declared as `any`, TypeScript allows any kind of operation on it without showing errors.

We can declare an `any` type like this:

```typescript
let value: any = "hello";

value = 10;
```

Since `any` disables type checking, runtime errors can happen easily because TypeScript cannot protect us from invalid operations.

---

## Why `unknown` Is Safer

`unknown` is the safe version of `any`.

We can store any value inside an `unknown` variable, but we cannot use it directly until TypeScript knows its actual type.

We can declare `unknown` like this:

```typescript
let value: unknown;
```

Unlike `any`, `unknown` does not disable type checking. TypeScript forces us to check the type before using the value. This makes the code safer and helps prevent runtime errors.

---

## Example of `unknown` and Type Narrowing

```typescript
function formatInput(value: unknown): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value.toFixed(2);
  }

  return "Unsupported type";
}

console.log(formatInput("hello"));   // "HELLO"
console.log(formatInput(3.14159));   // "3.14"
console.log(formatInput(true));      // "Unsupported type"
```

In the code above, inside each `if` block, TypeScript understands the actual type of `value` through the condition checks.

For example:

```typescript
typeof value === "string"
```

tells TypeScript that `value` is a string inside that block, so using `.toUpperCase()` becomes safe.

Similarly,

```typescript
typeof value === "number"
```

tells TypeScript that `value` is a number, so `.toFixed()` can be used safely.

This process of reducing a broad type (`unknown`) into a more specific type (`string` or `number`) is called **Type Narrowing**.



`unknown` is the safer choice because it keeps TypeScript's type safety active and forces developers to validate data before using it.
