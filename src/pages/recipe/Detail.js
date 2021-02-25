import {Footer, NavBar, Search} from "../../components/ui";

export const Detail = () => (
    <>
        <NavBar/>
        <Search/>

        <div className="text-5xl">
            Recipe details:
            <ul className="p-4">
                <li>description</li>
                <li>add button</li>
                <li>Ingredients</li>
                <li>Instructions</li>
            </ul>
        </div>

        <Footer/>
    </>
)