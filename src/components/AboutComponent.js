function About(props){
    //const location = useLocation();
    console.log(props);
  
    return (
      <div>
        <h2>Hello this is About</h2>
        <h3>You searched for {props.searchInput}</h3>
      </div>
    )
  }

export default About;