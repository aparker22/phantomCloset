export let fetchSetList = () => {
    return (fetch("http://localhost:5000/public/sets", 
    {method: "GET"})
    .then(res => res.json()))
}

export let fetchCardList = () => {
    return(fetch("http://localhost:5000/public/standard", 
    {method: "GET"})
    .then(res => res.json()))
}

export let fetchCurrentSet = (set) => 
    fetch(`http://localhost:5000/public/sets/${set}`, {
        method: "GET",
    }).then(res => res.json())
