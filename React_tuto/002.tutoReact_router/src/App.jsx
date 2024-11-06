import { RouterProvider,Link, createBrowserRouter,Outlet, NavLink, useRouteError } from "react-router-dom"
import { Single } from "./pages/Single"
import { Blog } from "./pages/Blog"

const router = createBrowserRouter([

    //(1) Methode
/*
  {
    path: "/",
    element: <div>
      Page d'acceuil
        <nav>
          <Link to="/blog">Blog</Link> <br />
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
  },
  {
    path: "/blog",
    element: <div>
      blog
      <nav>
        <Link to="/">acceuil</Link><br />
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  },
  {
    path: "/blog/:id",
    element: <Single />
  },
  {
    path: "/contact",
    element: <div>
      Contact
        <nav>
          <Link to="/">acceuil</Link><br />
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
  }
*/

    //(2) Methode

  {
    path: '/',
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      {
        path: 'blog',
        element: <div className="row">
          <aside className="col-3">
            <h2>Sidebar</h2>
          </aside>
          <main className="col-9">
            <Outlet/>
          </main>
        </div>,
        children: [
          {
            path: '',
            element: <Blog />,
            loader: () => fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
          },
          {
            path: ':id',
            element: <Single/>
          }
        ]
      },
      {
        path: "contact",
        element: <div>Contact</div>
      },
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
      <nav>
        <NavLink to="/">Home</NavLink><br />
        <NavLink to="/Blog">Blog</NavLink><br />
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
      <div className="conatiner my-4"><Outlet/></div>
  </div>


}
function App() {
  return <RouterProvider router={router} />
}
export default App
