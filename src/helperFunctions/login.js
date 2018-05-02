let setLoginToLocalStorage = (userInfo) => {
    let jwt = JSON.stringify(userInfo);
    localStorage.setItem('jwt', jwt);
}

export let loginWithUserData = (loginInformation) => {
    return(fetch('localhost:3000/public/signin', 
    {method: 'POST',
    body: loginInformation,
    headers: new Headers ({
        'Content-Type': 'application/json'
    })
    })
    .then(res => res.json())
    .then(res => setLoginToLocalStorage(res)))
}