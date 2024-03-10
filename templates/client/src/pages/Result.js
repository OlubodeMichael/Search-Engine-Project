import React, { useState} from "react";
import { Search } from "../Search"

export function Result() {
    const [ results, setResults] = useState([])
    return (
        <div>
            <Search result={true}/>
            <hr></hr>
        </div>
    )
}
function ResultCard({ results }) {
    return (
        <div>
            {results.map(({ key, value }) => (
                <div className="" key={key}>
                    <div>
                        <h4>{value.title}</h4>
                        <div>{}</div>
                        <p>{value.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

