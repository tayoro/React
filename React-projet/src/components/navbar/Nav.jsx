import { useRef, useState } from 'react'
import './Nav.css'
import Search from '../search/Search';

export default function Navbar() {
    const navToggleRef = useRef(null);
    const menuListRef = useRef(null);
    const navMenuRef = useRef(null);
    const closeRef = useRef(null);
    const burgerRef = useRef(null);
    const [toggle, setToggle] = useState('false');

    const toggleNavbar = () => {
        console.log('rendu')
        setToggle(!toggle)
        console.log(toggle)
        if(toggle){
            //menuListRef.current.style.top='0'
            closeRef.current.style.opacity = '1'
            burgerRef.current.style.opacity = '0'
            //navMenuRef.current.style.height = '100vh'
            //navMenuRef.current.style.backdropFilter = "blur(15px)"
            navMenuRef.current.classList.add('show__menu')
        }else{
            //menuListRef.current.style.top='-100%'
            closeRef.current.style.opacity = '0'
            burgerRef.current.style.opacity = '1'
            //navMenuRef.current.style.backdropFilter = "initial"
            //navMenuRef.current.style.height = '10px'
            navMenuRef.current.classList.remove('show__menu')
        }

    }
    return <>
    {/* ============ nav ==================== */}
        <nav className="nav ">
            <div className="nav__data">
                <div ref={navToggleRef} onClick={toggleNavbar} className="nav__toggle">
                    <i ref={burgerRef} className="ri-menu-line nav__burger nav__burger"></i>
                    <i ref={closeRef} className="ri-close-line nav__close nav__close" ></i>
                </div>
                <a className="nav__logo">
                    T.
                </a>
            </div>
            {/* ======== nav menu ========= */}
            <div ref={navMenuRef} className="nav__menu">
                <ul ref={menuListRef} className='nav__list'>

                {/*--==================== DROPDOWN 1 ==================*/}
                    <li className="dropdown__item">
                        <div className="nav__link">
                            Explore <i className="ri-arrow-drop-down-line dropdown__arrow"></i>
                        </div>

                        <ul className="dropdown__menu">
                            <li>
                                <a href="#" className="dropdown__link">
                                    <i className="ri-pie-chart-line"></i> Overview
                                </a>
                            </li>

                            <li>
                                <a href="#" className="dropdown__link">
                                    <i className="ri-arrow-up-down-line"></i> Transactions
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" className="nav__link">Directory</a></li>
                    <li><a href="#" className="nav__link">Academy</a></li>
                    <li><a href="#" className="nav__link">Conferences</a></li>
                    <li><a href="#" className="nav__link">jobs</a></li>
                </ul>
            </div>
            <Search />
            <div className="nav__user">
                <ul className='nav__choix'>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </div>
            <div className="nav__bts">
                <a href="#" className='btn-be'>Be Pro</a>
                <a href="#" className='btn-jo'>Join Directory</a>
            </div>
            <div className='nav__user__icon'>
                <i className="ri-user-follow-line"></i>
            </div>
            
        </nav>
    </>
}