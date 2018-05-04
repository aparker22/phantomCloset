export let getAutocomplete = (input) => 
    fetch(`https://phantom-closet.herokuapp.com/public/autocomplete/${input}`)
      .then(json => json.json()
    );

export let postCardToQueue = (input, token) =>
    fetch(`https://phantom-closet.herokuapp.com/private/addtoqueue`,
      {
        method: "POST",
        body: JSON.stringify(input),
        headers: new Headers ({
              "Content-Type": "application/json",
              "authorization": token
              })
      })
    .then(res => res.text()
  );
  
export let getCurrentCard = (card) =>
      fetch(`https://phantom-closet.herokuapp.com/public/cards/${card}`)
        .then(res => res.json());

export let fetchUserQueue = (token) =>
      fetch(`https://phantom-closet.herokuapp.com/private/getqueue`, {
        method: 'GET',
        headers: new Headers ({
          "Content-Type": "application/json",
          "authorization": token
          })
      }).then(res => res.json());