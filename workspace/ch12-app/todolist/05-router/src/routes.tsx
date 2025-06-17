import { createBrowserRouter, Navigate } from 'react-router';
import Home from '@pages/Home';
import About from '@pages/About';
import ErrorPage from '@pages/ErrorPage';
import TodoInfo from '@pages/TodoInfo';
import TodoList from '@pages/TodoList';
import TodoEdit from '@pages/TodoEdit';
import TodoAdd from '@pages/TodoAdd';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to='/home' /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/errorPage', element: <ErrorPage /> },
  { path: '/todoInfo', element: <TodoInfo /> },
  { path: '/todoEdit', element: <TodoEdit /> },
  { path: '/todoAdd', element: <TodoAdd /> },
  { path: '/todoList', element: <TodoList /> },
]);

export default router;
