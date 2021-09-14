
function Counter(props){
    console.log('Counter component');
    return (
        <h2 style={{color: 'red', textAlign: 'center'}}>The count on count component is {props.clickCount}</h2>
    )
}

export default Counter;