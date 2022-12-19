import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    //   const [posts, setPosts] = useState([]);
    //   useEffect(() => {
    //     async function loadPosts() {
    //         const response = await fetch('http://localhost/learn/wp-json/wp/v2/posts');
    //         if(!response.ok) {
    //             // oups! something went wrong
    //             return;
    //         }

    //         const posts = await response.json();
    //         console.log("aaaaaaaa", posts)
    //         setPosts(posts);
    //     }

    //     loadPosts();
    // }, [])
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.jss < /code> and save to reload. <
        /p> <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> <
        /header> <
        /div>
    );
}

export default App;