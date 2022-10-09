import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Shop from './components/Shop/Shop.js';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { ProductsAddToCart } from './components/ProductsAddToCart/ProductsAddToCart';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>
      , children: [
        {
          path: '/',
          loader: ProductsAddToCart,
          element: <Shop></Shop>
        },
        {
          path: 'shop',
          loader: ProductsAddToCart,
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader: ProductsAddToCart,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
