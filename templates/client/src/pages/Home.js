import { Search } from "../Search"
import { Navbar } from "../Navbar"

export function Home({result, dispatch}) {
    return (
        <div>
            <Navbar />
            <Search result={result} dispatch={dispatch}/>
        </div>
    )
}