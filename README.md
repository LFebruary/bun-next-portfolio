# bun-next-portfolio

This is a personal portfolio website built with **Next.js** and styled with **Material-UI (MUI)**. The project aims to showcase your web development skills, highlight various personal and work-related projects, and provide an interactive experience using animations, dynamic components, and integrations with Firebase and other web technologies.

## Features

- **Responsive Design**: Built to work on all screen sizes, optimized for both desktop and mobile views.
- **Smooth Animations**: Use of `react-transition-group` and custom animations to enhance user experience.
- **Project Showcases**: A section dedicated to personal and work-related projects.
- **Interactive Components**: Hover effects, tooltips, and transitions with `MUI` and custom components like `CoolText`.
- **Code Quality**: Linting with ESLint and formatting using Prettier to ensure a clean and maintainable codebase.
- **Deployment Ready**: Ready for deployment on platforms like Vercel or Netlify with minimal configuration.

## Getting Started

To get this project up and running locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/bun-next-portfolio.git
cd bun-next-portfolio
```

### 2. Install Dependencies

Since this project uses **Bun** as the package manager, make sure you have **Bun** installed on your machine. If not, install it from [Bun's official website](https://bun.sh/).

Then, run:

```bash
bun install
```

This will install all the required dependencies as listed in the `package.json` file.

### 3. Development Mode

To run the project in development mode, use:

```bash
bun run dev
```

This will start the Next.js development server and you can view the app at `http://localhost:3000`.

### 4. Build and Deploy

To build the project for production, run:

```bash
bun run build
```

Once the build is complete, start the project in production mode:

```bash
bun run start
```

### 5. Linting and Formatting

To lint the code and check for style issues, use:

```bash
bun run lint
```

To format the code with Prettier, run:

```bash
bun run format
```

To check the code formatting:

```bash
bun run format:check
```

### 6. Contribution

This repository is for viewing purposes only. Contributions are not accepted at this time.

## Technologies Used

- **Next.js**: The React framework used to build the application.
- **Material-UI (MUI)**: A popular React UI framework for consistent styling and components.
- **React**: A JavaScript library for building user interfaces.
- **Firebase**: Backend services like authentication, Firestore, and more.
- **Moment.js**: A library for handling and manipulating dates.
- **Bun**: A fast JavaScript runtime used as the package manager.
- **TypeScript**: A typed superset of JavaScript for better development experience and code quality.
- **Prettier and ESLint**: Code quality tools for maintaining clean and consistent code.

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License**. You may view the project but not distribute, remix, or use it for commercial purposes.

For more details, see the [LICENSE](LICENSE) file.
