const Beer = (state = [], action) => {
    switch (action.type) {
      case "FETCH_BEER_DATA_SUCCESS":
        return {
          ...state,
          beer: action.payload,
          status: true,
          message: ""
        };
        break;
      case "SEARCH_BEER_DATA_SUCCESS":
        return {
          ...state,
          beer: action.payload,
          status: true,
          message: ""
        };
        break;  
      case "FETCH_BEER_DATA_SUCCESS_FAILURE":
        return {
          ...state,
          beer: {},
          status: false,
          message: action.error
        };
        break;
      case "SORT_BEER_INC_DATA_SUCCESS":
      return {
        ...state,
        beer: action.payload,
        status: true,
        message: ""
      };
      break;  
      case "SORT_BEER_DEC_DATA_SUCCESS":
      return {
        ...state,
        beer: action.payload,
        status: true,
        message: ""
      };
      break;   

      default:
        return state;
    }
  };
  
  export default Beer;