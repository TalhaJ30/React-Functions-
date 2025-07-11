# TREA - React Todo Application

A modern, interactive todo list application built with React, Vite, and Tailwind CSS. This project demonstrates React hooks, state management, and modern UI/UX practices.

## 🚀 Features

- **Interactive Todo Management**: Add, select, and delete todo items
- **Dynamic List Creation**: Create custom lists with item names and tasks
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Real-time Updates**: Instant feedback and state management
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Visual Feedback**: Hover effects, transitions, and interactive elements

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **Development Tools**: ESLint, React Hooks ESLint Plugin
- **Package Manager**: npm

## 📦 Dependencies

### Core Dependencies
- `react`: ^19.1.0 - React library for building user interfaces
- `react-dom`: ^19.1.0 - React DOM rendering
- `tailwindcss`: ^4.1.10 - Utility-first CSS framework
- `@tailwindcss/vite`: ^4.1.10 - Tailwind CSS Vite plugin

### Development Dependencies
- `@vitejs/plugin-react`: ^4.4.1 - Vite plugin for React
- `vite`: ^6.3.5 - Fast build tool and dev server
- `eslint`: ^9.25.0 - Code linting
- `@types/react`: ^19.1.2 - TypeScript definitions for React
- `@types/react-dom`: ^19.1.2 - TypeScript definitions for React DOM

## 🏗️ Project Structure

```
trea/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/            # Images and other assets
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   ├── index.css          # Global styles
│   ├── App.css            # App-specific styles
│   ├── Button.jsx         # Reusable button component
│   ├── Input.jsx          # Input component
│   ├── Key.jsx            # Key component
│   ├── Keyinput.jsx       # Key input component
│   ├── List.jsx           # List component
│   ├── Listinput.jsx      # List input component
│   ├── Selection.jsx      # Selection component
│   ├── Todo.jsx           # Main todo functionality
│   ├── Todoinput.jsx      # Todo input component
│   └── Totallist.jsx      # Complete list management
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd trea
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎯 Key Components

### App.jsx
The main application component that orchestrates all other components.

### Todo.jsx
Handles the core todo functionality with:
- Item selection with visual feedback
- Dynamic item addition
- State management for selected items
- Interactive UI with hover effects

### Totallist.jsx
Manages the complete list system featuring:
- Add new items with custom names and tasks
- Delete functionality
- Responsive design with animations
- Modern card-based layout

### Button.jsx
Reusable button component with consistent styling and interactions.

### Input.jsx
Standardized input component for form elements.

## 🎨 Design Features

- **Modern UI**: Clean, minimalist design with blue color scheme
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Visual Feedback**: Clear indication of selected items and actions
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React and Tailwind CSS plugins for optimal development experience.

### ESLint Configuration
Code quality is maintained through ESLint with React-specific rules and hooks linting.

## 🚀 Deployment

To deploy this application:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy the `dist` folder** to your preferred hosting service (Netlify, Vercel, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**TALHA JAVED**

## 🆘 Support

If you encounter any issues or have questions, please:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Contact the maintainer

---

**Happy Coding! 🎉**