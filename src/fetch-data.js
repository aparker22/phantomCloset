export let getAutocomplete = (input) => 
    fetch(`http://localhost:5000/public/autocomplete/${input}`)
      .then(json => json.json()
    )

export let postCardToQueue = (input, token) =>
    fetch(`http://localhost:5000/private/addtoqueue`,
      {
        method: "POST",
        body: input,
        headers: new Headers ({
              "Content-Type": "application/json",
              "authorization": token
              })
      })
    .then(res=>res.json())