# React Props - Complete Guide

## What Are Props?

**Props** (short for "properties") are custom attributes used to pass data from parent components to child components. Think of them as function parameters for React components.

## Basic Usage

```javascript
// Passing props
<UserCard name="John" age={25} />

// Receiving props
function UserCard(props) {
  return <div>{props.name} is {props.age} years old</div>
}

```

## Key Characteristics

- **Read-only**: Props cannot be modified by the receiving component
- **Unidirectional**: Data flows from parent to child only
- **Any data type**: Can pass strings, numbers, objects, arrays, functions, or even components

## Special Props

### Children Prop
Pass components between opening and closing tags:

```javascript
<Card>
  <h1>Title</h1>
  <p>Content here</p>
</Card>

function Card({ children }) {
  return <div className="card">{children}</div>
}
```

**Use case**: Layout components, wrappers, containers

### Key Prop
Unique identifier for list items:

```javascript
{users.map((user, index) => (
  <UserCard key={user.id} name={user.name} />
))}
```

**Purpose**: Helps React track which items changed, added, or removed

## Composition Pattern

Props enable **composition** - building complex UIs from simple, reusable components:

```javascript
<Layout>
  <Header />
  <Sidebar>
    <Navigation />
  </Sidebar>
  <MainContent />
</Layout>
```

## Best Practices

- Use descriptive prop names
- Provide default values when needed
- Keep props simple and focused
- Use the `children` prop for flexible, reusable components

---
Here are 6 practice questions to help you master React props. Try solving them one by one to reinforce your understanding:

### 1. Basic Props
Create a `UserProfile` component that accepts `name`, `age`, and `email` as props. Render a simple profile card displaying this information.

### 2. Conditional Rendering
Modify the `UserProfile` component to conditionally display the email only if it's provided. If no email is given, show a message saying "Email not provided".

### 3. Passing Components as Props
Create a `Container` component that accepts a `children` prop. The component should render a card with a header and footer, with the children displayed in the middle. Use this to wrap a `UserProfile` component.

### 4. Passing Functions as Props
Create a `Button` component that accepts a `onClick` function as a prop. The component should render a button that calls the function when clicked. Then create a parent component that uses this Button component with a function that logs "Button clicked!" to the console.

### 5. Complex Data Types
Create a `ProductCard` component that accepts a product object as a prop with properties: `name`, `price`, `description`, and `inStock`. Render the product information, and conditionally display "In Stock" or "Out of Stock" based on the `inStock` boolean.

### 6. Composition with Props
Create a `Form` component that accepts `onSubmit` and `onCancel` functions as props. The component should render a form with two buttons: "Submit" (calls `onSubmit`) and "Cancel" (calls `onCancel`). Then create a parent component that uses this Form component with functions that display alert messages for each action.

---

**Bonus Challenge**: Combine all the above concepts into a single application where:
- A `UserForm` component accepts user data as props and renders a form
- The form uses a `SubmitButton` component that accepts an `onClick` function
- The form also includes a `ProductList` component that accepts an array of products as props
- The `ProductList` component uses the `ProductCard` component from question 5

Try implementing these in a simple React app to see how props work in a real-world scenario.