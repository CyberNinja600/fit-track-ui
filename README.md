# React Fitness Tracker Web App

A comprehensive fitness tracking application built with React, Vite, TypeScript, and Tailwind CSS. This app allows trainers to create fitness programs and manage members, while members can join programs and track their daily workout tasks.

## Features

### For Members
- ✅ User registration and login
- ✅ Browse and join fitness programs
- ✅ View program calendars with weekly breakdowns
- ✅ Mark daily tasks as complete
- ✅ Track workout progress
- ✅ View dashboard with today's tasks

### For Trainers
- ✅ Create and manage fitness programs
- ✅ Organize programs into weeks and days
- ✅ Add detailed workout tasks (sets, reps, weight, etc.)
- ✅ Monitor member progress
- ✅ Edit and delete programs
- ✅ View member list and completion rates

## Tech Stack

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: Zustand + TanStack Query (React Query)
- **HTTP Client**: Axios
- **UI Components**: Custom components with shadcn/ui patterns
- **Icons**: Lucide React
- **Date Handling**: date-fns

## Project Structure

```
src/
├── api/                  # API layer with axios instance and interceptors
│   ├── axiosInstance.ts # Centralized axios config with auth interceptors
│   ├── auth.ts          # Authentication API calls
│   ├── programs.ts      # Programs API calls
│   ├── calendar.ts      # Calendar/weeks/days API calls
│   └── tasks.ts         # Tasks API calls
├── components/          # Shared/reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── TextArea.tsx
│   ├── Badge.tsx
│   ├── Checkbox.tsx
│   ├── Alert.tsx
│   ├── Skeleton.tsx
│   ├── Layout.tsx
│   └── Navbar.tsx
├── features/            # Feature-based modules
│   ├── auth/           # Authentication
│   │   ├── components/ # LoginForm, RegisterForm
│   │   ├── hooks/
│   │   └── types/
│   ├── programs/       # Program management
│   │   ├── components/ # ProgramCard, ProgramForm, WeekCalendar
│   │   ├── hooks/
│   │   └── types/
│   ├── tasks/          # Task management
│   │   ├── components/ # TaskItem, TaskForm
│   │   ├── hooks/
│   │   └── types/
│   └── dashboard/      # Dashboard widgets
│       ├── components/ # DayTasksWidget, ProgramsOverview
│       ├── hooks/
│       └── types/
├── pages/              # Route-level page components
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Dashboard.tsx
│   ├── Programs.tsx
│   ├── ProgramDetail.tsx
│   ├── CreateProgram.tsx
│   ├── EditProgram.tsx
│   └── ProgramCalendar.tsx
├── hooks/              # Global custom hooks
│   ├── useAuth.ts
│   ├── usePrograms.ts
│   └── useTasks.ts
├── lib/                # Utility functions and helpers
│   ├── utils.ts        # cn() for tailwind class merging
│   ├── dateUtils.ts    # Date formatting utilities
│   └── ProtectedRoute.tsx # Role-based route protection
├── store/              # Zustand state management
│   ├── authStore.ts
│   ├── programStore.ts
│   └── taskStore.ts
├── types/              # Global TypeScript interfaces
│   └── index.ts
├── constants/          # App constants and route definitions
│   └── index.ts
├── App.tsx             # Main app component with routing
├── main.tsx            # React DOM entry point
├── index.css           # Tailwind CSS + global styles
└── assets/             # Static assets
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Update `VITE_API_BASE_URL` with your backend API URL
   ```bash
   VITE_API_BASE_URL=http://localhost:3000/api
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Key Features & Implementation

### Authentication & Authorization
- JWT-based authentication with access and refresh tokens
- Token storage in localStorage with automatic refresh
- Role-based access control (Member vs Trainer)
- Protected routes that redirect based on user role

### API Integration
- Centralized axios instance with base URL configuration from environment variables
- Request interceptor that automatically adds auth token to headers
- Response interceptor that handles token refresh on 401 errors
- Error handling with appropriate error boundaries

### State Management
- **Zustand stores** for client state (auth, programs, tasks)
- **React Query** for server state management with caching
- Automatic synchronization between local and remote state

### Components
- Reusable button with multiple variants (primary, secondary, danger, ghost)
- Form inputs with error handling and validation
- Cards with header, content, and footer sections
- Loading skeletons for async data
- Alert component for notifications

### Responsiveness
- Mobile-first design with Tailwind breakpoints
- Sidebar navigation on desktop, mobile menu on small screens
- Grid layouts that adapt to screen size
- Touch-friendly buttons and interactive elements

## API Endpoints (Expected from Backend)

### Authentication
- `POST /auth/login` - Login with email and password
- `POST /auth/register` - Register new user (member or trainer)
- `POST /auth/logout` - Logout user
- `POST /auth/refresh` - Refresh access token
- `GET /auth/me` - Get current user info

### Programs
- `GET /programs` - List all programs
- `GET /programs/:id` - Get program details
- `POST /programs` - Create new program (trainers only)
- `PUT /programs/:id` - Update program (trainers only)
- `DELETE /programs/:id` - Delete program (trainers only)
- `POST /programs/:id/join` - Join a program
- `POST /programs/:id/leave` - Leave a program
- `GET /programs/:id/members` - Get program members

### Calendar/Weeks/Days
- `GET /programs/:programId/weeks` - Get program weeks
- `GET /programs/:programId/weeks/:weekId` - Get week details
- `GET /programs/:programId/weeks/:weekId/days` - Get days in week
- `GET /programs/:programId/weeks/:weekId/days/:dayId` - Get day details

### Tasks
- `GET /tasks?dayId=:dayId` - Get tasks for a day
- `GET /tasks/:id` - Get task details
- `POST /tasks` - Create task
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task
- `POST /tasks/:id/complete` - Toggle task completion for a member

## Environment Variables

```
VITE_API_BASE_URL=http://localhost:3000/api
```

## Development Tips

### Adding New Features
1. Create feature folder in `src/features/[featureName]/`
2. Structure: `components/`, `hooks/`, `types/`, `index.ts`
3. Create API calls in `src/api/`
4. Add custom hooks using React Query
5. Create page component in `src/pages/`
6. Add route in `src/App.tsx`

### Component Patterns
- Use `cn()` utility to merge Tailwind classes
- Props should be typed with TypeScript interfaces
- Use custom hooks for shared logic
- Keep components focused and single-responsibility

### Forms
- Use React Hook Form patterns with Input/TextArea components
- Validate on submit
- Show error messages from API responses
- Use Button `isLoading` prop for async operations

### Data Fetching
- Use custom hooks from `src/hooks/`
- Hooks return `useQuery` or `useMutation` from React Query
- Update stores after successful mutations
- Handle loading and error states in components

## Common Tasks

### Add a new page
1. Create file in `src/pages/`
2. Export component
3. Add route to `src/App.tsx`
4. Add to constants if needed

### Add a new API endpoint
1. Create function in appropriate `src/api/` file
2. Create custom hook in `src/hooks/`
3. Use hook in component

### Add validation
1. Validate in form submission handler
2. Set errors object
3. Display errors in Input/TextArea components

## Build Optimization

The project is configured for optimal performance:
- Tree-shaking of unused code
- CSS minification and extraction
- JS minification and code splitting
- Gzip compression
- Production bundle is under 400KB (gzipped: ~125KB)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020 JavaScript support required

## License

This project is open source and available under the MIT License.

## Next Steps

1. Set up your backend API server
2. Update `.env` with your API URL
3. Test authentication flows
4. Implement member signup/role assignment
5. Create test programs and tasks
6. Deploy to production

## Support

For issues or questions, please refer to the documentation or check the source code comments for implementation details.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
