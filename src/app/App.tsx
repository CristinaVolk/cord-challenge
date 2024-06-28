import React from 'react';
import {RouterProvider} from 'react-router-dom'
import {appRouter} from "./providers/router/appRouter";


function App() {
  return (
      <RouterProvider router={appRouter} />
  );
}

export {App};
