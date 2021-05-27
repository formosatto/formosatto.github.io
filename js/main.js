w3.includeHTML();

class Load {

    constructor(target = null){

        setTimeout(() => {
            this.load()
            .then(() => {

                if (target) target();
    
                finish_load();
                
            });
        }, 0)

    }

    async load() {
        
        // Set navbar item
        await update_navBar()

    }
}

async function update_navBar(){

    await checkLogin().then(r => {
        const navLogin = document.getElementById('login');
        
        if (r) {
            navLogin.innerHTML = `<a class="nav-link active" href="javascript:logout();" tabindex="-1" aria-disabled="true">登出</a>`
        }else{
            navLogin.innerHTML = `<a class="nav-link active" href="/user/login.html" tabindex="-1" aria-disabled="true">登入/註冊</a>`
        }
    
    })

}

function finish_load(){

    // Finish load
    const load = document.getElementById("load");
    const body = document.getElementById("body");

    load.classList.add("invisible");
    load.classList.remove("visible");

    body.classList.add("visible");
    body.classList.remove("invisible");
    
}

async function checkLogin(){

    return await conn('/users/info', {
        'Authorization': `Bearer ${getCookie('access_token')}`
    })
    .then(data => {

        data.status -= data.status%100

        if (data.status / 100 != 2) return false;

        return true;
    })

}

function logout(){
    document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    update_navBar().then( () => {
        console.log("Logged out!");
        popMsg("成功登出")
    });
}
