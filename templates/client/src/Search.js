import React from 'react';

export function Search({ result}) {
    const handleClick = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-10 ">
            <div className={`container mx-auto flex ${!result ? 'flex-col' : ''} `}>
                <h4 className={`w-auto flex justify-center ${!result ? 'text-9xl' : 'text-7xl'} `}>&#10837;</h4>
                <form className="search-bar  p-2 flex  items-center rounded-full overflow-hidden shadow-md transition duration-500">
                    <input type="search" name="query" autoComplete="off" placeholder="Advin: Your Adventure Awaits..." required className="flex-1 border-none px-4 py-2 text-gray-700 h-8" />
                    <button type="submit" className="rounded-full w-10 h-10 flex items-center justify-center bg-gray-200  transition duration-500 hover:bg-gray-400 dark:hover:bg-gray-500">
                        <img src="https://img.icons8.com/ios/25/search--v1.png" alt="search--v1" />
                    </button>
                </form>
            </div>
        </div>
    )
}
