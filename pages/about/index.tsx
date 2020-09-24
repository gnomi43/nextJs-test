import Router from 'next/router';

const Index = () => {

const linkClickHandler = () => {
    Router.push("/");
};


    return (
        <>
            <h1>About Next.js</h1>
            <button onClick={linkClickHandler}>Go back to home</button>
        </>
        );
};

export default Index;