import { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NewPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageDisplayed: false,
            imageDisplayStyle: 'none',
            hits: null
        }
    }

    handleClick = () => {
        this.setState({imageDisplayed: !this.state.imageDisplayed });
        console.log(`imageDisplayed is: ${this.state.imageDisplayed}`);

        if (this.state.imageDisplayed){
            this.setState({imageDisplayStyle: 'block'});    
        }else{
            this.setState({imageDisplayStyle: 'none'});    
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit button clicked');
        
        fetch("https://hn.algolia.com/api/v1/search?query=test}", {   
        })
        .then(response => response.json())
        .then(json => {
            console.log(json.hits);
            this.setState({hits: json.hits});
        })
        
        .catch(err => {
            console.error(err);
        });

    }

    componentDidMount(){
        console.log('on Newpage');
    }

    componentWillUnmount(){
        console.log('leaving newpage');
    }

    render(){

        if (this.state.hits){
            return (
                <div>
                    <h2>Hits is true</h2>


                    {this.state.hits.map((hit, index) => {
                        return (
                            <div key={index}>
                                <h2>{hit.title}</h2>
                            </div>
                        )
                    })}

                </div>

            )
        }else{

        

            return (
                <div style={{textAlign: 'center'}}>
                    <h1>This is a new page!</h1>
                    <img 
                        style={{display: this.state.imageDisplayStyle}}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/1995-1996_BMW_328i_%28E36%29_convertible_01.jpg/420px-1995-1996_BMW_328i_%28E36%29_convertible_01.jpg"
                    />
                    <button onClick={this.handleClick}>Click to display picture</button>

                    <form onSubmit={this.handleSubmit}>
                        <input type='text'/>

                        <button type='submit'>GO</button>
                    </form>
                </div>
            )
        }
    }
}

export default NewPage;