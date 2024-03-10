import { Search } from "../Search"
import { Navbar } from "../Navbar"

export function Home({result}) {
    return (
        <div>
            <Navbar />
            <Search result={result}/>
        </div>
    )
}