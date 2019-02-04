import  Apis  from '../Configs/Apis';
import { ajax,search,sortData } from '../Utils'

export const getData = (props) => {
        let url = `${Apis.HN_BASE_API}`;
        ajax(url).
        then(data => {
            props.dispatch({ type: "FETCH_BEER_DATA_SUCCESS", payload: data })
        }
    );
  };

export const searchBeer = (props,text,BeerArray) => {
    let data = search(text,BeerArray)
    if(data.length > 0){
        props.dispatch({type: "SEARCH_BEER_DATA_SUCCESS", payload: data})
    }
}

export const sortRepoPage = (BeerArray, props, flag) => {
    let data = sortData(BeerArray,flag);

    if(data.length > 0 && flag === "inc"){
        props.dispatch({type: "SORT_BEER_INC_DATA_SUCCESS", payload: data})
    }else if(data.length > 0 && flag === "dec"){
        props.dispatch({type: "SORT_BEER_DEC_DATA_SUCCESS", payload: data})
    }
}