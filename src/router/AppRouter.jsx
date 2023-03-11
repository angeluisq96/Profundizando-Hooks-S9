import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/router/AuthRoutes'
import { useCheckAuth } from '../hooks'
import { JournalRoutes } from '../journal/Routes/JournalRoutes'
import { CheckingAuth } from '../ui/components/CheckingAuth'

export const AppRouter = () => {

  const { status } = useCheckAuth();
  
  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {
        ( status === 'auth' )
        ? <Route path='/*' element={<JournalRoutes />} />
        : <Route path='auth/*' element={<AuthRoutes />} />

      }

      <Route path='/*' element={ <Navigate to='/auth/login' /> } />

      {/* <Route path='auth/*' element={<AuthRoutes />} /> */}

      {/* <Route path='/*' element={<JournalRoutes />} /> */}

    </Routes>
  )
}
