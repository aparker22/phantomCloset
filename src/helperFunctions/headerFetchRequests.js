export let fetchSetList = () => {
    return (fetch("https://phantom-closet.herokuapp.com/public/sets", 
    {method: "GET"})
    .then(res => res.json()))
}

export let fetchCardList = () => {
    return(fetch("https://phantom-closet.herokuapp.com/public/standard", 
    {method: "GET"})
    .then(res => res.json()))
}

export let fetchCurrentSet = (set) => 
    fetch(`https://phantom-closet.herokuapp.com/public/sets/${set}`, {
        method: "GET",
    }).then(res => res.json())
