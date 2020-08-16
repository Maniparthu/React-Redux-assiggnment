
export default lastname
const addlastnamereducer = function(state=null,action){
    switch(action.type){
        case 'LASTNAME_BUTTON_CLICKED':
            return action.payload
        default:
            break;    
    }
    return state
}
export default  addlastnamereducer