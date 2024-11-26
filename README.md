# Part 3: Code Review Questions

## State Management

### Why did you choose the specific state management approach?

I chose **Zustand** because it is simple, lightweight, and flexible. It avoids boilerplate and integrates seamlessly with React, making it ideal for this small-to-medium-sized application.

### How would you scale it for a larger application?

- Split the state into modular slices for different features.
- Use middleware for debugging and logging.
- Combine it with server-side state hydration for larger apps.
- Employ selective subscriptions to optimize re-renders.

---

## Performance Optimization

### What techniques did you use to optimize the performance of the application?

- **Memoization**: Used `React.memo` and Zustand’s selective subscriptions to prevent unnecessary re-renders.
- **Debouncing**: Applied for inputs to reduce frequent updates.
- **Code Splitting**: Dynamically imported components to reduce the initial load time.
- **List Virtualization**: Used tools like `react-window` to only render visible items in large lists.

---

## Testing Strategy

### How do you decide which parts of the application need to be unit tested?

- Focused on critical business logic and reusable components.
- Prioritized complex state interactions and edge cases.

### Guidelines:

- Test core functionality, reusable components, and error handling.
- Ensure high coverage for critical parts of the app.
- Use unit tests for isolated logic and integration tests for components interacting with state.

---

## Code Structure

### How is the project structured?

src/
├── components/ # Shared UI components
├── store/ # Zustand state slices
├── App.tsx # Main app component

This structure keeps code modular, reusable, and easy to maintain.

---

## Instructions to Run

```
  npm install
  npm run dev
```
