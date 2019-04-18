import React, {useState ,useEffect} from 'react';

export default function ApiReferenceHook (){
    const[data , setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums") 
        .then(response => 
            response.json()
            // console.log(response)
            
        )
        .then((resp) => { 
            setData(resp);            
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    // console.log(data);
    return(
        <div>
            {/* {data.map((e , key) => 
                <li key={key}>{data.title}</li>)} */}
                 {data.map((el, key) => (
                     <div key={key}>
                     <li >{el.id }</li>
                     <li >{el.title}</li>
                     </div>
                ))}
        </div>
    )
}