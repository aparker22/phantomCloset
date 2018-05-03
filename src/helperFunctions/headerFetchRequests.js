export let fetchSetList = () => {
    return (fetch("https://phantom-closet.herokuapp.com/public/sets", 
    {method: "GET"})
    .then(res => res.json()))
}

export let fetchCardList = () => {
    return (fetch("https://phantom-closet.herokuapp.com/public/cards", 
    {method: "GET"})
    .then(res => res.json()))
}