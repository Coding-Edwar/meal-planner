import {Link} from 'react-router-dom'

export const NavBar = () => (
    <>
        <div className="mb-6 p-6 bg-green-600 bg-opacity-60">
            <ul className="flex justify-evenly">
                <li className="p-2 text-2xl tracking-wide font-semibold">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-2 text-2xl tracking-wide font-semibold">
                    <Link to="/Planner">Meal Planner</Link>
                </li>
                <li className="p-2 text-2xl tracking-wide font-semibold">
                    <Link to="/List">Recipes</Link>
                </li>
                <li className="p-2 text-2xl tracking-wide font-semibold">
                    <Link to="/About">About</Link>
                </li>
                <li className="p-2 text-2xl tracking-wide font-semibold">
                    <Link to="/Contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    </>
)