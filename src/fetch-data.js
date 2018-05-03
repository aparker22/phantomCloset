export let getAutocomplete = (input) => 
    fetch(`http://localhost:5000/public/autocomplete/${input}`)
      .then(json => json.json())