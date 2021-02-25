import {Footer, NavBar, Search} from "../../components/ui";

export const List = () => (
    <>
        <NavBar/>
        <Search/>

        <div>
            <p className="p-10 text-4xl">Scrollable list of curated recipes</p>
            <ul className="m-4">
                <div className="p-8">
                    <ul className="text-3xl font-bold"> Recipe 1
                        <li className="text-2xl font-norma">Ingredients
                            <br/>
                            -items
                        </li>
                        <li>Instructions
                            <br/>
                            -outline
                        </li>
                    </ul>
                    <br/>
                    <ul className="text-xl"> Recipe 2
                        <li>Ingredients
                            <br/>
                            -items
                        </li>
                        <li>Instructions
                            <br/>
                            -outline
                        </li>
                    </ul>
                    <br/>
                    <ul className="text-xl"> Recipe 3
                        <li>Ingredients
                            <br/>
                            -items
                        </li>
                        <li>Instructions
                            <br/>
                            -outline
                        </li>
                    </ul>
                </div>

            </ul>
        </div>

        <Footer/>
    </>
)