import { RouterProvider,Link, createBrowserRouter,Outlet, NavLink, useRouteError } from "react-router-dom"
import Analytics from "./pages/Analystic"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      {
        path: "contact",
        element: <div>Contact</div>
      },
      {
        path: "analytic",
        element:<Outlet />,
        children: [
          {
            path: "",
            element: <Analytics />,
            children:[
              {
                path: "developpement",
                element: <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et officia animi nemo aliquid nam earum cumque voluptatibus rerum dolorum.</h1>
              },
              {
                path: "cybersecurity",
                element: <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla enim consequatur similique voluptas repudiandae. Animi laudantium pariatur consequatur iure facilis aliquam id fuga, numquam itaque repudiandae vitae iusto reiciendis deserunt!</h1>
              },
              {
                path: "uiux",
                element: <h1>Lorem ipsum dolor sit amet.</h1>
              }
            ]
               
          },
          
        ]
      }
    ]
  }
])

//Composante error
function PageError(){
  const error = useRouteError()
  return <div>
    <h1>Une erreur est survenue</h1>
      {error?.error?.toString() ?? error?.toString()}
  </div>
}

//Composante Root
function Root(){
  return <div>
    <header>
      <nav className="p-2 text-center bg-slate-300 flex">
        <NavLink className="mx-2 text-md text-semibold" to="/">Home</NavLink><br />
        <NavLink className="mx-2 text-md text-semibold" to="/contact">Contact</NavLink>
        <NavLink className="mx-2 text-md text-semibold" to="/analytic">Analytics</NavLink>
      </nav>
    </header>
      <Outlet/>
  </div>

}


function App() {
  return <RouterProvider router={router} />
}
export default App


