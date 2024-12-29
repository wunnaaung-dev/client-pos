import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { router } from "./configs/routes"
// import { Toaster } from "./components"
import { store } from "./app/state/store"
import { Provider } from "react-redux"

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      {/* <Toaster position="top-right" /> */}
    </QueryClientProvider>
  )
}

export default App
