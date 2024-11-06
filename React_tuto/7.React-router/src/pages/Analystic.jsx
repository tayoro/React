import { NavLink, Outlet } from "react-router-dom"
export default function Analytics(){
    return(
        <div className="bg-slate-400">
            <div className="max-w-4xl mx-auto text-center pb-20">
                <p className="text-2xl pt-10 mb-6">Here is the compagny analytics</p>
                <p className="mb-10">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora modi cumque nihil, molestiae enim rem error deserunt, laudantium, beatae dolore aliquid eveniet? Error, doloremque! Pariatur recusandae eos ex officiis vero nemo iure aperiam rem, dolor earum eum omnis dolorem, nobis delectus iusto eaque doloremque doloribus beatae? Enim incidunt facilis nulla.
                </p>
                <div>
                <nav className="block">
                    <NavLink 
                    className="mx-2 font-semibold text-lg"
                    to="developpement">Development
                    </NavLink>
                    <NavLink 
                    className="mx-2 font-semibold text-lg"
                    to="cybersecurity">Cybersecurity
                    </NavLink>
                    <NavLink 
                    className="mx-2 font-semibold text-lg"
                    to="uiux">UIUX
                    </NavLink>
                </nav>
                <Outlet />
                </div>
                
            </div>

        </div>
    )
}