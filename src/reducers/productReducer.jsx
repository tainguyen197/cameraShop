const initState = {
  loading: false,
  error: false,
  data: null
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCT_LIST_REQUEST":
      return { ...state, loading: true };
    case "LOAD_PRODUCT_LIST_FAIL":
      return { ...state, loading: false, error: true };
    case "LOAD_PRODUCT_LIST_SUCCESS":
      return { ...state, loading: false,data: action.payload };
    default:
      return state;
  }
};

export default productReducer;
