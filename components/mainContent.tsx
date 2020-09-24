const MainContent = ({children}) =>{

    return (
        <>
            <header>
                <h1>Axes test App</h1>
            </header>
            <main className="main">
                {children}
            </main>
        </>
    )
};

export default MainContent;