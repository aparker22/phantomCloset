export let fetchSetList = () => {
    return (fetch('https://cors-anywhere.herokuapp.com/https://phantom-closet.herokuapp.com//public/sets', 
    {method: 'GET'})
    .then(res => res.json()))
}