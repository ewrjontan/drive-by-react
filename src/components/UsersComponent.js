import React, {useEffect, useState} from 'react';


function DisplayHits(props) {
    if (props.hits !== null){
        return (
            <React.Fragment>
                <h2>here are hits</h2>
                {props.hits.map((item, index) => {
                    return (
                        <div key={index}>
                            <h3>{item.title}</h3>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }else{
        return (
            <h2>Loading...</h2>
        )
    }
}

function Users(){
    const [hits, setHits] = useState(null);

    useEffect(() => {
        console.log('on users page');
        
        fetch("https://hn.algolia.com/api/v1/search?query=test}", {   
        })
        .then(response => response.json())
        .then(json => {
            console.log(json.hits);
            setHits(json.hits);
        })
        
        .catch(err => {
            console.error(err);
        });
    },[]);
    
    return (
        <div>
            <h2>Users page</h2>
            <DisplayHits hits={hits}/>
        </div>

        
    )
}

export default Users;