import { StrictMode } from 'react'
import 'reflect-metadata';
import { createRoot } from 'react-dom/client'
import '../styles/main.scss'
import RoutesComponent from '../routes/index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesComponent />
  </StrictMode>,
)
