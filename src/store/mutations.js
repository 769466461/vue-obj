let mutations={
  
  UPDATE_LOADING:(state,payload)=>{
    state.bLoading=payload
  },
  
  UPDATE_USER:(state,payload)=>{
    state.user=payload
  },
  

};

export default mutations;