# 🔥 LEVEL 6: ADVANCED OBJECT CHALLENGES

**Day 4 – Coding Challenge (Test Your Skills!)**

---

## 🎯 Q1: CREATE NULL OBJECT

**📝 TASK:**
Create a function `createNullObject()` that behaves like a normal object but has NO prototype.

**💡 HINT:** `Object.create(null)`

**🤔 WHY IT MATTERS:**
Objects without prototypes are useful for data structures that shouldn't inherit default object methods.

**🧠 CHALLENGE YOURSELF:**
How would this differ from `{}`? What methods would be missing?

---

## 🎯 Q2: PROTOTYPAL INHERITANCE WITHOUT CLASS

**📝 TASK:**
Write `inherit(child, parent)` that sets up prototypal inheritance WITHOUT using class or extends keywords.

**💡 HINT:** constructor + prototype chain

**🤔 WHY IT MATTERS:**
Understanding prototype chain is critical for JavaScript. You need to know how inheritance worked BEFORE ES6 classes!

**🧠 CHALLENGE YOURSELF:**
Can you also implement a `super()` equivalent?

---

## 🎯 Q3: DEEP CLONE WITH PROPERTY DESCRIPTORS

**📝 TASK:**
Create `deepCloneWithDescriptors(obj)` that clones an object INCLUDING property descriptors (writable, enumerable, configurable).

**💡 HINT:** `getOwnPropertyDescriptors` exists for a reason

**🤔 WHY IT MATTERS:**
Most cloning methods don't preserve descriptors. This is an advanced technique for copying objects exactly.

**🧠 CHALLENGE YOURSELF:**
How would you handle circular references?

---

## 🎯 Q4: MAKE IMMUTABLE OBJECT

**📝 TASK:**
Write `makeImmutable(obj)` that deeply freezes an object AND throws error on mutation attempt.

**💡 HINT:** Combine freeze with strict mode or Proxy

**🤔 WHY IT MATTERS:**
Immutability prevents bugs. Once data is frozen, it can't be accidentally modified.

**🧠 CHALLENGE YOURSELF:**
Can you make it throw custom, descriptive error messages?

---

## 🎯 Q5: LAZY OBJECT CREATION

**📝 TASK:**
Create `lazyObject(factory)` that only creates properties when they are first accessed (lazy loading).

**💡 HINT:** Proxy again. Yes, again.

**🤔 WHY IT MATTERS:**
Lazy loading is a performance optimization technique used in real applications to defer expensive operations.

**🧠 CHALLENGE YOURSELF:**
How would you cache the lazy-loaded values?

---

## 🎯 Q6: VALIDATE OBJECT SHAPE

**📝 TASK:**
Implement `validateShape(obj, schema)` where schema defines expected keys and their types.

**💡 EXAMPLE SCHEMA:**
```javascript
{ name: "string", age: "number", hobbies: "array" }
```

**💡 HINT:** typeof isn't enough for arrays & null (`typeof null === "object"`)!

**🤔 WHY IT MATTERS:**
Schema validation is essential for data integrity. This is used in form validation, API request validation, etc.

**🧠 CHALLENGE YOURSELF:**
Can you handle nested schemas?

---

## 🎯 Q7: SERIALIZE & DESERIALIZE FUNCTIONS

**📝 TASK:**
Design `serializeObject(obj)` that converts functions into strings and `deserializeObject(str)` that restores them back.

**💡 HINT:** JSON won't save you. eval might—but tread carefully.

**🤔 WHY IT MATTERS:**
Serialization is used when storing complex objects, sending them over networks, or persisting to databases.

**🧠 CHALLENGE YOURSELF:**
How would you handle arrow functions vs regular functions?

---

# BONUS CHALLENGES

---

## 🎯 BONUS Q1: MERGE OBJECTS STRICTLY

**📝 TASK:**
Write `mergeObjectsStrict(a, b)` that merges two objects BUT throws an error if any key exists in both.

**💡 HINT:** `Object.keys` + includes is enough

**🤔 WHY IT MATTERS:**
Strict merging prevents data loss and catches conflicts early.

---

## 🎯 BONUS Q2: DETACH METHOD

**📝 TASK:**
Create `detachMethod(obj, methodName)` that returns the method but keeps `this` bound correctly.

**💡 HINT:** bind is your old friend

**🤔 WHY IT MATTERS:**
Understanding `this` binding is crucial when passing methods as callbacks (like in event listeners or setTimeout).

---

## 🎯 BONUS Q3: COUNT PROPERTY ACCESS

**📝 TASK:**
Create `countPropertyAccess(obj)` that returns a proxy which counts how many times each property is accessed.

**💡 HINT:** Proxy + get trap

**🤔 WHY IT MATTERS:**
This technique is used for monitoring, logging, and performance analysis of object access patterns.

---

## 🎯 BONUS Q4: REMOVE FALSY VALUES DEEPLY

**📝 TASK:**
Write `removeFalsyDeep(obj)` that removes falsy values from an object deeply (handles nested objects too).

**💡 HINT:** typeof null is a liar (`typeof null === "object"`!)

**🤔 WHY IT MATTERS:**
Cleaning data is a common task. This tests your understanding of deep recursion and falsy values.

---

## 🎯 BONUS Q5: LOCK OBJECT STRUCTURE

**📝 TASK:**
Write `lockStructure(obj)` which prevents adding or deleting properties but still allows updating existing values.

**💡 HINT:** seal ≠ freeze

**🤔 WHY IT MATTERS:**
`seal()` is more flexible than `freeze()`. Know the difference!

---

## 🎯 BONUS Q6: COMPARE TWO OBJECTS

**📝 TASK:**
Create `objectDiff(obj1, obj2)` that returns keys whose values differ (shallow comparison).

**💡 HINT:** Compare both directions, not just one

**🤔 WHY IT MATTERS:**
Diff algorithms are used in version control, testing, and change detection systems.

---

## 💪 CHALLENGE YOURSELF

- ✓ Try solving these BEFORE looking at solutions
- ✓ Test edge cases (empty objects, null values, circular refs)
- ✓ Write clean, documented code
- ✓ Compare your solution with others
- ✓ Understand WHY each technique works

## 🔥 THESE QUESTIONS WILL TEACH YOU:

- • Proxy usage & get/set traps
- • Object.freeze, Object.seal, Object.create
- • Property descriptors & Object.defineProperty
- • Prototypal inheritance
- • Deep recursion
- • The this keyword & bind/call/apply
