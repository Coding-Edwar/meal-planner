export const Search =() => (
    <>
        <div className="lg:flex">
            <div className="m-4 p-6 flex">

                    <select className="mr-8">
                        <option>Select meal type</option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                    </select>

                <label className="">
                    <input className="w-80 outline-black" placeholder=""/>
                </label>
            </div>
            
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" name="exclusion" value="exclusion"/>
                        <span className="ml-2">Exclusions</span>
                    </label>

                    <button className="m-6">?infoIcon</button>

                <button className="m-4 p-4 bg-purple-500">Search</button>
        </div>
        <hr/>
    </>
)