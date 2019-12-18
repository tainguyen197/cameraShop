const initState = {
    loading: false,
    error: false,
    data: null
  };
  
  const brandReducer = (state = initState, action) => {
    switch (action.type) {
      case "LOAD_BRAND_LIST_REQUEST": 
        return { ...state, loading: true };
      case "LOAD_BRAND_LIST_FAIL":
        return { ...state, loading: false, error: true };
      case "LOAD_BRAND_LIST_SUCCESS":
        return { ...state, loading: false,data: action.payload };
      default:
        return state;
    }
  };
  
  export default brandReducer;
  