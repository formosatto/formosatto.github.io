async function conn(url, headers={}){
    try{
        url = 'https://formosatto.herokuapp.com' + url;
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        })

        // if (!response.ok) console.clear();

        return {
            'status': response.status,
            'data': await response.json()
        };
    }
    catch (err) {
        console.log('fetch failed', err);
    }
}

async function send(url, body, headers={'Content-Type': 'application/x-www-form-urlencoded'}){
    try{
        url = 'https://formosatto.herokuapp.com' + url;
        const response = await fetch(url, {
            method: "POST", 
            body: new URLSearchParams(body),
            headers: headers
        });

        // if (!response.ok) console.clear();

        return {
            'status': response.status,
            'data': await response.json()
        };
    }
    catch (err) {
        console.log('fetch failed', err);
    }
}

async function sendPost(url, body){
    try{
        url = 'https://formosatto.herokuapp.com' + url;
        const response = await fetch(url, {
            method: "POST", 
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'app/json',
                'Authorization': 'Bearer ' + getCookie('access_token') 
            }
        });

        // if (!response.ok) console.clear();

        return {
            'status': response.status,
            'data': await response.json()
        };
    }
    catch (err) {
        console.log('fetch failed', err);
    }
}

function login(form) {

    const formData = Object.fromEntries(new FormData(form).entries());

    send('/users/auth', formData)
    .then( res => {

        console.log(res);
        
        if (res.status == 404) return popMsg('User not found');

        if (res.status == 401) return popMsg(res.data.detail);
        
        setCookie('access_token', res.data.access_token, 1);
        update_navBar().then(() => { popMsg('成功登入');})

        setTimeout(() => {
            window.history.back()
        }, 3000)

    })

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = `${cname}=${cvalue};${expires};path=/;secure`;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}