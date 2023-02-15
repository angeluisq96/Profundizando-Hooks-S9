import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/router/AuthRoutes'
import { JournalRoutes } from '../journal/Routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='auth/*' element={ <AuthRoutes /> } />
      <Route path='/*' element={ <JournalRoutes /> } />

    </Routes>
  )
}
