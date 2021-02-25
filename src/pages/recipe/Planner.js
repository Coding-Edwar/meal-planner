import {NavBar, Search, Footer} from "../../components/ui";

export const Planner = () => (
    <>
        <NavBar/>
        <Search/>

        <div className="p-12">
            <ul className="text-xl"> Day 1
                <li>Recipe 1</li>
                <li>Recipe 2</li>
            </ul>
            <br/>
            <ul className="text-xl"> Day 2
                <li>Recipe 1</li>
                <li>Recipe 2</li>
            </ul>
            <br/>
            <ul className="text-xl"> Day 2
                <li>Recipe 1</li>
                <li>Recipe 2</li>
            </ul>
        </div>

        <Footer/>
    </>
)