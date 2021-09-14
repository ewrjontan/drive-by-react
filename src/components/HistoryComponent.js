

function DisplayHistory(props){
    console.log('displaying search history')
    console.log(props.searchHistory);
    return (
        <div>
            <ul>
                {props.searchHistory.map((pastSearch, index)=>{
                    return (
                        <li key={index}>{pastSearch}</li>
                    ) 
                })}
            </ul>
        </div>
    )
}



function History(props){
    console.log(props.searchHistory);
    
    return(
        <div>
            <h1>This is history page</h1>
            <h2>You've searched for...</h2>
            <DisplayHistory searchHistory={props.searchHistory}/>

        </div>
    )
}

export default History;