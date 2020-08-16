export default firstname
const addfirstnamereducer = function(state=null,action){
    switch(action.type){
        case 'FIRSTNAME_BUTTON_CLICKED':
            return action.payload
        default:
            break;    
    }
    return state
}
export default  addfirstnamereducer