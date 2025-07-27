import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/Providers/themeProvider'
import './App.css'


import Layout from '@/Layout'
import Home from '@/Features/Home/Components/Home'
import NotFound from '@/NotFound'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Products from '@/Features/Products/Components/Products/Products'
import ProductDetails from '@/Features/Products/Components/ProductDetails/ProductDetails'
import { Suspense } from 'react'
import FallbackError from '@/FallbackError'
import { ErrorBoundary } from 'react-error-boundary'
import MainLoader from '@/MainLoader'
import Cart from '@/Features/Cart/Components/Cart'
import { CartProvider } from '@/Features/Cart/Context/CartContext'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient();

const myRoutes = createBrowserRouter([
  {path:'', element:<Layout />, children:[
      {index:true, element:<Home />},
      { path:'/home', element:<Home />},
      {path:'/products', element:<Products />},
      { path: '/product/:id', element: <ProductDetails /> },
      { path: '/cart', element: <Cart /> },

  ]},

  {path:'*', element:<NotFound />},
])


function App() {

  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
        <Suspense fallback={<MainLoader />}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <QueryClientProvider client={queryClient}>
                 <CartProvider>
                  <Toaster position="top-right" reverseOrder={false} />
                  <RouterProvider router={myRoutes} />
              </CartProvider>
            </QueryClientProvider>
          </ThemeProvider>
        </Suspense>
    </ErrorBoundary>
  )

}

export default App
