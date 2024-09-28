import React from 'react';
// fetch data
const getPosts=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await res.json();
    return data;
}


const page = async() => {
    const postsData=await getPosts();
    console.log(postsData);
    return (
        <div>
            
        </div>
    );
};

export default page;