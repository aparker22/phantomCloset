let setLoginToLocalStorage = (userInfo) => {
    let userObject = JSON.stringify(userInfo);
    localStorage.setItem('userObject', userObject);
    return userInfo;
}

export let loginWithUserData = (loginInformation) => {
    return(fetch("https://phantom-closet.herokuapp.com/public/signin", 
    {method: "POST",
    body: loginInformation,
    headers: new Headers ({
        "Content-Type": "application/json"
    })
    })
    .then(res => res.text())
    .then(res => setLoginToLocalStorage(res)))
}

export let createNewUserInDatabase = (loginInformation) => {
    return(fetch('https://phantom-closet.herokuapp.com/public/createaccount', 
    {method: 'POST',
    body: loginInformation,
    headers: new Headers ({
        'Content-Type': 'application/json'
    })
    })
    .then(res => res.text()))
}