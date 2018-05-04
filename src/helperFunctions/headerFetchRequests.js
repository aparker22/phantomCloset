export let fetchSetList = () => {
    return (fetch("http://localhost:5000/public/sets", 
    {method: "GET"})
    .then(res => res.json()))
}

export let fetchCardList = () => {
    return (fetch("http://localhost:5000/public/cards", 
    {method: "GET"})
    .then(res => res.json()))
}
