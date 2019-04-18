import React, { useState, useEffect } from 'react';
function useFetch(url, fun) {
    fetch(url)
        .then(response => response.json())
        .then((resp) => { fun(resp) })
}
export default function DataLoader(props) {
    const [data, setData] = useState([]);
    useEffect(() => { useFetch("https://jsonplaceholder.typicode.com/posts", setData); }, [])
    return (
        <div>
            {data == undefined ? "" : data.length != "" ? <ul>
                {data.map((el, key) => (
                    <li key={key}>{el.id}</li>
                ))}
            </ul> : null}
            <Button />
        </div>
    );
}
function Button(props) {
    const [data, setData] = useState([]);
    const fun2 = () => { useFetch("https://jsonplaceholder.typicode.com/users", setData) }
    return (
        <div>
            <button type="button" onClick={fun2}>Fetch Title</button>
            {data.length != "" ? <ul>
                {data.map((el, key) => (
                    <li key={key}>{el.email}</li>
                ))}
            </ul> : null}
        </div>
    )
}