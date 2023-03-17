import React from 'react';

function Loader() {
    return (
        <div>

            <div className="fixed w-screen h-screen bg-black flex z-50 inset-0 flex-col items-center justify-center">
                <img className="w-48 animate-pulse" src="../dist/images/logo.png" alt="logo" />
            </div>

        </div>
    );
}

export default Loader;
