# NhavaGX

A modern, scalable React application built with cutting-edge technologies and best practices.

## 🚀 Features

- **Modern Stack**: Built with React 19, TypeScript, and Vite
- **Responsive Design**: Beautiful UI with Tailwind CSS
- **State Management**: Efficient state handling with Zustand
- **Routing**: Client-side routing with React Router
- **Type Safety**: Full TypeScript support
- **Code Quality**: ESLint and Prettier configuration
- **Performance**: Optimized build with Vite
- **Scalable Architecture**: Well-organized component structure

## 📦 Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router
- **Code Quality**: ESLint + Prettier
- **UI Components**: Custom components with Headless UI

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nhavagx
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Input, etc.)
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   └── forms/          # Form components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── stores/             # Zustand stores
├── services/           # API and external services
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── constants/          # App constants
└── assets/             # Static assets
```

## 🎨 Styling

This project uses Tailwind CSS for styling with custom components and utilities. The design system includes:

- Consistent color palette
- Responsive breakpoints
- Custom component classes
- Dark mode support (configurable)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=NhavaGX
VITE_APP_VERSION=1.0.0
```

### Tailwind Configuration

Tailwind is configured in `tailwind.config.js` with custom colors and utilities.

### TypeScript Configuration

TypeScript is configured with strict mode and path aliases for clean imports.

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Production Deployment

1. Build the application:
```bash
npm run build
```

2. The built files will be in the `dist` directory
3. Deploy to your preferred hosting platform (Vercel, Netlify, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

Built with ❤️ by the NhavaGX team.