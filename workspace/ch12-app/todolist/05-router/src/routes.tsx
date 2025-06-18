import { createBrowserRouter, Navigate } from 'react-router';
import Home from '@pages/Home';
import About from '@pages/About';
import ErrorPage from '@pages/ErrorPage';
import TodoInfo from '@pages/TodoInfo';
import TodoList from '@pages/TodoList';
import TodoEdit from '@pages/TodoEdit';
import TodoAdd from '@pages/TodoAdd';
import Layout from '@components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // { path: '', element: <Navigate to='/home' /> },
      { index: true, element: <Home /> },
      // { path: 'home', element: <Home /> },
      { path: 'home', element: <Navigate to='/' /> },
      { path: 'about', element: <About /> },
      { path: 'todoList', element: <TodoList /> },
      {
        path: 'todoList/:_id',
        element: <TodoInfo />,
        children: [{ path: 'edit', element: <TodoEdit /> }],
      },
      {
        path: 'todoAdd',
        element: <TodoAdd />,
      },
    ],
  },
]);

export default router;
