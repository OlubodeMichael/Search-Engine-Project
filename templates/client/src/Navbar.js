import React from 'react';

export function Navbar({ darkModeToggle }) {
    return (
        <nav className="text-blue">
            <div className="container mx-auto px-1">
                <div className="flex items-center justify-between py-1">
                    <div>
                        <a href="/" className="text-md text-blue-500">Home</a>
                        <a href="/about" className="ml-4 text-md text-blue-500">About</a>
                        <a href="https://github.com/AnyUserNameNotAvailable/Search-Engine-Project" className="ml-4 text-md text-blue-500">GitHub</a>
                    </div>
                    <div>
                        <button onClick={darkModeToggle} className="px-4 py-2 text-blue-500 hover:bg-slate-500  rounded">Mode</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}


