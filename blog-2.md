# How the Four Pillars of OOP Reduce Complexity in TypeScript Projects

Object-Oriented Programming (OOP) helps us organize code, reduce duplication, and manage large-scale TypeScript applications more effectively.

The four main pillars of OOP are:

1. Inheritance  
2. Polymorphism  
3. Abstraction  
4. Encapsulation  

These principles make applications easier to maintain, scale, and understand.

---

# 1. Inheritance

Inheritance allows one class to reuse properties and methods from another class.

## Example

```typescript
class Animal {
  move() {
    console.log("Animal is moving");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
}
```

Here, `Dog` inherits the `move()` method from `Animal`.

## Benefit of it 

It reduces code duplication,resues common logic and make maintenance easier.

---

# 2. Polymorphism

Polymorphism allows different classes to use the same method in different ways.

## Example

```typescript
class Payment {
  pay(amount: number) {
    console.log(`Paying ${amount}`);
  }
}

class BkashPayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using Bkash`);
  }
}
```

## Benefit

It makes systems flexible, reduces large conditional statements and help us to extend features easily.
---

# 3. Abstraction

Abstraction hides complex implementation details and exposes only necessary functionality.

## Example

```typescript
abstract class Database {
  abstract connect();
}
```

## Benefit
It simplifies complex systems, improves readability and reduces mental overlaod.

---

# 4. Encapsulation

It protects internal data by restricting direct access.

## Example

```typescript
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
```

## Benefit
It protects sensitive data, prevents invalid changes and improves security and maintainability.

---

# Conclusion

The four pillars of OOP help us build scalable and maintainable TypeScript applications.
Using these principles makes large applications cleaner, easier to manage, and easier to scale.
