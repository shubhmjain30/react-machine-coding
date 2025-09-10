# React Machine Coding Interview Problems

A collection of React machine coding problems for interview preparation. Each problem is organized in its own module with components, styles, and documentation.

## Project Structure

```
src/
├── components/                  # All coding problems/components
│   ├── ProblemsList.jsx        # Main problems listing page
│   ├── problems-list.css       # Styles for problems listing
│   ├── ProblemWrapper.jsx      # Wrapper component with back button
│   ├── problem-wrapper.css     # Wrapper styles
│   ├── problemsConfig.js       # 🔥 CENTRAL CONFIG for all problems
│   ├── folder-structure/       # Example problem folder
│   │   ├── FolderStructure.jsx # Main problem component
│   │   ├── RenderFs.jsx        # Sub-component
│   │   └── folder-structure.css # Problem-specific styles
│   ├── counter-app/            # Counter application problem
│   │   ├── CounterApp.jsx      # Counter component
│   │   └── counter-app.css     # Counter styles
│   └── users-list/             # Users list problem
│       ├── UsersList.jsx       # Users component
│       └── users-list.css      # Users styles
├── styles/                     # Global styles
│   └── global.css             # Global CSS styles
└── App.jsx                    # Main app with config-based routing

```

## Available Problems

### 1. Folder Structure Renderer

-   **Difficulty**: Easy
-   **Topics**: Recursion, Component Composition, Data Structures
-   **Description**: Render a nested folder structure with files and folders using recursive components

### 2. Counter Application

-   **Difficulty**: Easy
-   **Topics**: State Management, Event Handling, Controlled Components
-   **Description**: Build a counter with customizable step value and multiple operations

### 3. Users List - API Integration

-   **Difficulty**: Easy
-   **Topics**: API Integration, useEffect Hook, Error Handling, Loading States
-   **Description**: Fetch and display users from an API with loading states and error handling

## Adding New Problems

**🎉 Now it's super easy!** The app is completely config-based. To add a new problem:

1. **Create a new folder** in `src/components/` with a descriptive name (e.g., `todo-app`, `infinite-scroll`)

2. **Create the main component** for your problem (e.g., `TodoApp.jsx`)

3. **Add problem-specific CSS** (e.g., `todo-app.css`)

4. **Add your problem to the config** in `src/components/problemsConfig.js`:

    ```javascript
    {
      id: 'your-problem-id',
      title: 'Your Problem Title',
      description: 'Brief description of the problem',
      difficulty: 'Easy|Medium|Hard',
      topics: ['Topic1', 'Topic2', 'Topic3'],
      component: YourProblemComponent,
    }
    ```

5. **Import your component** at the top of `problemsConfig.js`

**That's it!** The route will be automatically created at `/your-problem-id` with the back button and proper layout.

## Problem Template

Here's a template for creating new problems:

```jsx
// src/components/your-problem/YourProblem.jsx
import "./your-problem.css";

const YourProblem = () => {
	return (
		<div className="problem-container">
			<h2>Your Problem Title</h2>
			<p>Brief description of what this problem demonstrates.</p>

			<div className="problem-demo">
				{/* Your problem implementation */}
			</div>
		</div>
	);
};

export default YourProblem;
```

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Problem Ideas to Implement

-   **Todo Application** - State management, CRUD operations
-   **Infinite Scroll** - Performance optimization, API integration
-   **Autocomplete Search** - Debouncing, API calls
-   **Modal Component** - Portal usage, focus management
-   **Image Gallery** - Grid layout, lazy loading
-   **Form Validation** - Custom hooks, validation logic
-   **Shopping Cart** - State management, local storage
-   **Drag and Drop** - Event handling, state updates
-   **Table with Sorting** - Data manipulation, performance
-   **Chat Interface** - Real-time updates, message handling

## Features

-   ✅ Clean, organized structure for multiple problems
-   ✅ React Router for navigation
-   ✅ Responsive design
-   ✅ Problem categorization and difficulty levels
-   ✅ Easy to extend with new problems
-   ✅ Modern React patterns and best practices

## Tech Stack

-   React 19.1.1
-   Vite 7.1.2
-   React Router DOM
-   CSS3 with modern features

## Contributing

Feel free to add more problems by following the structure outlined above. Each problem should be self-contained with its own components and styles.
