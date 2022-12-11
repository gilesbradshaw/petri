import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dining from './model/dining'
import dining2 from './model/dining-2'
import philosophical from './model/philosophical'
import trafficLights from './model/traffic-lights'
import Root from './Root'
import Error from './Error'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />
  },
  {
    path: "/dining",
    element: <App
        model={dining}
        name="dining"
      />,
  },
  {
    path: "/dining-2",
    element: <App
        model={dining2}
        name="dining 2"
      />,
  },
  {
    path: "/philosophical",
    element: <App
        model={philosophical}
        name="philosophical"
      />,
  },
  {
    path: "/traffic-lights",
    element: <App
        model={trafficLights}
        name="traffic-lights"
      />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
