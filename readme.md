How does TypeScript enforce type safety in this object-oriented program?

TypeScript enforces type safety by using type annotations, interfaces, and strict compile-time checks to ensure that variables, function parameters, and class properties always contain the correct data types.

In this project:

Properties like sku: string, price: number, and weight: number prevent incorrect assignments.

Interfaces such as DiscountableProduct ensure that implementing classes provide required methods.

Function parameters (e.g., calculateTax(product: Product)) guarantee that only valid Product objects are passed.

If an incorrect type is used, TypeScript throws a compile-time error before the program runs.
***************************************************************************************************
2. How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

Inheritance allowed both PhysicalProduct and DigitalProduct to reuse common properties and methods from the base Product class.

Shared features defined once:

sku

name

price

displayDetails()

Instead of rewriting this logic in every product type, both subclasses extend Product and only implement what differs, such as tax calculations.

Without inheritance:

Duplicate code in each class

Harder maintenance

Higher chance of inconsistencies

With inheritance:

Centralized common logic

Less repetition

Cleaner structure

This makes the system easier to maintain and extend.
************************************************************************************************
What are the benefits of using encapsulation and access modifiers?

Encapsulation protects the internal state of objects and controls how data is accessed or modified.

Using access modifiers:

private

Accessible only inside the class
Prevents accidental modification

protected

Accessible within the class and subclasses
Allows controlled inheritance

public

Safe methods exposed to external code

Benefits:

Protects sensitive data

Prevents misuse of properties

Improves security

Simplifies debugging

Makes the API cleaner and more predictable

For example, keeping price protected ensures that price changes happen only through defined methods like discounts, not random external updates.
***************************************************************************************************************************************
How would polymorphism make adding a new product type straightforward?

Polymorphism allows different classes to implement the same method in their own way.

All product types share:
**************************************************************************
