function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

class DB {

    constructor(name){
        this.name = name;
        this.flag = true;
        this.url = '/src/db/' + name + '.json';
    }

    async query() {
        try{
            const response = await fetch(this.url);
            await wait(2480);
            const json = await response.json();
            return json;
        }catch (err) {
            console.log('fetch failed: ' + err);
        }
    }

}
