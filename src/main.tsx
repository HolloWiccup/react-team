import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/style.scss'
import {RouterProvider} from "react-router-dom";
import {router} from "./providers/router/app-router.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
