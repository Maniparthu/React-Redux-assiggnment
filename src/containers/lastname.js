import React from 'react';
import { bindActionCreators } from 'redux';
import{connect} from 'react-redux'
import Addlastname from '../actions/addlastname';

class Lastname extends React.Component {
    constructor(props){
        super(props)
        this.state={
            lastname:''
        }
    }
    getlastname=(event)=>{
        this.setState({lastname:event.target.value})
    }
    render() { 
        return ( 
            <div>
                <label>LastName</label>
                <input type='text' onChange={this.getlastname}></input>
                <button onClick={()=>{this.props.lastnameAdd(this.state.lastname)}}>Add</button>
            </div>
         );
    }
}
function addeventDispatch(dispatch){
    return bindActionCreators({lastnameAdd:Addlastname},dispatch)
}
export default connect(null,addeventDispatch)(Lastname);