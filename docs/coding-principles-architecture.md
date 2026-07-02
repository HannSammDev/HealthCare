# Coding Principles and Architecture Patterns

## 1. Clean Code
Clean code is easy to read, easy to maintain, and easy to extend.

### Guidelines
- Use meaningful names.
- Keep functions small.
- Avoid deep nesting.
- Write code that explains itself.

### Example
```jsx
function formatUserName(firstName, lastName) {
  return `${firstName} ${lastName}`.trim();
}
```

## 2. DRY (Don’t Repeat Yourself)
Avoid duplicating logic across the project.

### Example
Instead of repeating the same button styling in multiple files, create a reusable component.

## 3. SOLID Principles
A practical way to make code scalable.

- S: Single Responsibility Principle
- O: Open/Closed Principle
- L: Liskov Substitution Principle
- I: Interface Segregation Principle
- D: Dependency Inversion Principle

### Example
A button component should only handle button rendering and behavior, not page-specific logic.

## 4. FSD / Feature-Sliced Design
Organize code by feature, not by technical layer only.

### Suggested structure
```text
src/
  app/
  pages/
  widgets/
  features/
  entities/
  shared/
```

### Applied in this project
- app: routing and app shell
- pages: route-level pages
- shared/ui: reusable UI components

## 5. Separation of Concerns
Each module should focus on one responsibility.

### Example
- UI components render UI
- Services handle data or API logic
- Pages compose features together

## 6. Reusable Components
Create components that can be used in multiple places.

### Example
```jsx
<Button label="Get Started" variant="primary" />
<InputText id="email" label="Email" />
```

## 7. Proper Folder Structure
A clear folder structure makes the project easier to navigate.

### Example
```text
src/
  app/
  components/
  pages/
  shared/
  utils/
```

## 8. Consistent Naming
Use consistent naming across files, functions, variables, and folders.

### Rules
- Use camelCase for variables and functions.
- Use PascalCase for React components.
- Use lowercase folder names.

## 9. Type Safety
Prefer strong typing where possible.

### In this project
- Reusable components use prop validation.
- Future improvements can include TypeScript.

## 10. Error Handling
Handle errors gracefully so the app does not break silently.

### Example
```jsx
try {
  await saveData();
} catch (error) {
  console.error('Failed to save data', error);
}
```

## 11. Testing Basics
Testing helps protect the app from regressions.

### Example
- Unit tests for UI components
- Basic rendering checks

## Illustration: Good vs Bad Structure

### Bad
```text
src/
  App.jsx
  dashboard.jsx
  components/
    Header.jsx
    Hero.jsx
    Footer.jsx
```

### Better
```text
src/
  app/
    App.jsx
  pages/
    HomePage.jsx
  shared/
    ui/
      Button.jsx
      InputText.jsx
```

## Practical Rules for This Project
1. Keep components focused on one job.
2. Reuse shared UI components instead of duplicating markup.
3. Put routing and app-level setup in the app folder.
4. Keep page-level logic separate from shared UI.
5. Add tests for reusable components.
6. Handle errors with clear fallback UI.
