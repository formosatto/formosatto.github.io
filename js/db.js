class DB {

    constructor(name){
        this.name = name;
        this.flag = true;
        this.url = '/src/db/' + name + '.json';
    }

    async query() {
        try{
            const response = await fetch(this.url);
            const json = await response.json();
            return json;
        }catch (err) {
            console.log('fetch failed: ' + err);
        }
    }

}