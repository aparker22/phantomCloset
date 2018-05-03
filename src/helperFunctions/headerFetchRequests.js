export let fetchSetList = () => {
    return (fetch("https://phantom-closet.herokuapp.com/public/sets", 
    {method: "GET"})
    .then(res => res.json()))
}