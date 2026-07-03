import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ToDoApp from './ToDoApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToDoApp />
  </StrictMode>,
)
