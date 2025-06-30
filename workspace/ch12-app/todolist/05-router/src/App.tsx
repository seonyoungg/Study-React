import './App.css';
import { RouterProvider } from 'react-router';
// import router from './routes';
import router from './routes-lazy';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
