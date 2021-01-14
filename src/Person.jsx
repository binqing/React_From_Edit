import React from 'react';

class Person extends React.Component {
    constructor (props) {
        super(props);
        this.state = {firstname : '', lastname: '', edit: false};
        this.baseState =this.state;

        this.handleChange =this.handleChange.bind(this);

        this.edit =this.edit.bind(this);
        
    }

    handleChange(e) {
        this.setState( {
            [e.target.name]:e.target.value 
        });
    }

    edit =() => {
        this.setState({edit: true});
    }

    save =() => {
        this.setState(this.baseState);
        this.setState({edit: false});
    }

    cancel=()=> {
        this.setState(this.baseState);
    }

    render () {
        let show =
            this.state.edit === false ? (
            
                <div className ="person">
                    <input name ="firstname" 
                        type ='text'
                        onChange ={this.handleChange} 
                        value = {this.state.firstname} 
                        placeholder= "First Name"/> <br />    

                    <input name ="lastname" 
                        type ='text' 
                        onChange={this.handleChange} 
                        value = {this.state.lastname} 
                        placeholder="Last Name"/> <br />

                    <button onClick ={this.edit}> Edit </button>

                    <p> First Name: </p> {this.state.firstname}
                    <p> Last Name: </p> {this.state.lastname} 
                </div>

            ) : (
                <div className="change">                    
                    <input name ="firstname" 
                        type ='text' 
                        onChange ={this.handleChange} 
                        value = {this.state.firstname} 
                        placeholder= {this.state.firstname}/> <br /> 

                    <input name ="lastname" 
                        type ='text'  
                        onChange={this.handleChange} 
                        value = {this.state.lastname} 
                        placeholder= {this.state.lastname}/> <br />

                    <button onClick ={this.save}>Save</button> <br/>
                        <div>
                            <p> First Name: </p> {this.state.firstname}
                            <p> Last Name: </p> {this.state.lastname} 
                        </div>
                    <button onClick ={this.cancel}> Cancel </button> <br/>

                </div>

            );
            
            return (
                <div className ="display"> 
                    {show} 
                </div>);
    }

}
export default Person;