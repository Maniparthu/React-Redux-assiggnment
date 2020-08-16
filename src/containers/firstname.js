
import React from 'react';
import {connect}from 'react-redux'
import {bindActionCreators} from 'redux'
import Addfirstname from '../action/addfirstname';

class FirstName extends React.Component {
    constructor(props){
        super(props)
        this.state={
            firstname:''
        }
    }
    getfirstname=(event)=>{
        console.log(event.target.value)
        this.setState({firstname:event.target.value})
    }
    firstnameAdd=(event)=>{
        console.log(this.state.firstname)
        this.state.firstname
    }
    render() { 
        return ( 
            <div>
                <label>First Name:</label>
                <input type='text' onChange={this.getfirstname}></input>
                <button onClick={()=>{this.props.firstnameAdd(this.state.firstname)}}>Add</button>
            </div>
         );
    }
}
 
function addeventDispatch(dispatch){
    return bindActionCreators({firstnameAdd:Addfirstname},dispatch)
}

export default connect(null,addeventDispatch)(FirstName);