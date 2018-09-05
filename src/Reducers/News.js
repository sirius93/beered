const News = (state = [], action) => {
    switch (action.type) {
      case "FETCH_NEWS_DATA_SUCCESS":
        return {
          ...state,
          status: true,
          message: "Data fetch success"
        };
        break;
      case "FETCH_NEWS_DATA_SUCCESS_FAILURE":
        return {
          ...state,
          status: false,
          message: action.error
        };
        break;
  
      default:
        return state;
    }
  };
  
  export default News;