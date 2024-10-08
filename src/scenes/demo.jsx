import React, {useState, useEffect} from 'react';

function demo() {
    const [message, setMessage]=useState([]);
    useEffect(()=>{
        fetch("/api/demo-web")
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setMessage(data);
            });
    },[]);
    return (
        <div>
            {message}
        </div>
    );
}

export default demo;