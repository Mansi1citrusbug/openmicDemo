const initialState=[
 
];


const LoginReducer = (state=initialState,action) =>{
 
    switch (action.type) {
        case "AddDetails":
             return  state={...state,...action.data};
    
        default: return state;
         
    }


}
export default LoginReducer