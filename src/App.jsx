import './App.css'
import Todos from './pages/todos'
import AddTodo from './pages/AddTodo'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const todoRouter = createBrowserRouter ([
  {path: '/', element: <Todos /> },
  {path: '/add', element: <AddTodo /> }

]);



function App() {

  return (
    <>
   <RouterProvider router={todoRouter} />
   
    </>
  )
}

export default App
