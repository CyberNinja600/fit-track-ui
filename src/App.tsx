import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useAuthStore } from './store/authStore'
import { ROUTES } from './constants'
import { ProtectedRoute } from './lib/ProtectedRoute'

// Pages
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Dashboard } from './pages/Dashboard'
import { Programs } from './pages/Programs'
import { ProgramDetail } from './pages/ProgramDetail'
import { CreateProgram } from './pages/CreateProgram'
import { EditProgram } from './pages/EditProgram'
import { ProgramCalendar } from './pages/ProgramCalendar'
// Add this at the top of your entry file

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
    },
  },
})

function App() {
  const { isAuthenticated } = useAuthStore()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path={ROUTES.LOGIN} element={!isAuthenticated ? <Login /> : <Navigate to={ROUTES.DASHBOARD} />} />
          <Route path={ROUTES.REGISTER} element={!isAuthenticated ? <Register /> : <Navigate to={ROUTES.DASHBOARD} />} />

          {/* Protected Routes */}
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.PROGRAMS}
            element={
              <ProtectedRoute>
                <Programs />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.CREATE_PROGRAM}
            element={
              <ProtectedRoute requiredRole="trainer">
                <CreateProgram />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.PROGRAM_DETAIL}
            element={
              <ProtectedRoute>
                <ProgramDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.EDIT_PROGRAM}
            element={
              <ProtectedRoute requiredRole="trainer">
                <EditProgram />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.PROGRAM_CALENDAR}
            element={
              <ProtectedRoute>
                <ProgramCalendar />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path={ROUTES.HOME} element={<Navigate to={isAuthenticated ? ROUTES.DASHBOARD : ROUTES.LOGIN} />} />
          <Route path={ROUTES.NOT_FOUND} element={<Navigate to={ROUTES.HOME} />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
