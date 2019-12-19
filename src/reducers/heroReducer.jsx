const initState = {
    loading: false,
    error: false,
    data: null
  };
  
  const heroReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOAD_HERO_LIST_REQUEST": 
          return { ...state, loading: true };
        case "LOAD_HERO_LIST_FAIL":
          return { ...state, loading: false, error: true };
        case "LOAD_HERO_LIST_SUCCESS":
          // console.log(action.payload);
          return { ...state, loading: false,data: action.payload };
        default:
          return state;
      }
  };
  
  export default heroReducer;
  