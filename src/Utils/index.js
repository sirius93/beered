export const ajax=(url)=>{
    return fetch(url).then(data => data.json());
}

export const search = (text,beersArray) => {
    let filteredBeerArray;
    filteredBeerArray = beersArray.filter((beer) => {
        if (beer.name.toLowerCase().indexOf(text.toLowerCase()) > -1) {
            return true;
        } else {
            return false;
        }
    });
    return filteredBeerArray;
}

export const sortData = (beersArray,flag) => {
    if(flag === "inc")
        return beersArray.sort((a, b) => {return a.abv- b.abv});
    else(flag === "dec")
        return beersArray.sort((a, b) => {return a.abv- b.abv}).reverse();    
} 