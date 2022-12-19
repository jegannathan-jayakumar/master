import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import {Button} from "../src/stories/Button"
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
    return ( 
    <div>
    <Button
    backgroundColor="#ff1616"
    label="Contact"
    onClick={() => {}}
    primary
    />

    <Button
    label="Button"
    onClick={() => {}}
    />
    <Button
    backgroundColor="#000000"
    label="Large Button"
    onClick={() => {}}
    primary
    size="large"
    />
    </div>
    );
}

export default App;