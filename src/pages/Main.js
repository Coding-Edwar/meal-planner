import {Footer, NavBar, Search} from "../components/ui";

export const Main = () => (
    <>
        <NavBar/>
        <Search/>
        <div className="m-4 p-16">
            <h1 className="text-5xl">Meal Planner</h1>
        </div>
        <Footer/>
    </>
);