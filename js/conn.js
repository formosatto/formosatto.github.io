async function conn(url){
    try{
        const response = await fetch(url);
        console.log(`Fetching data from ${url}...`);
        return await response.json();
    }
    catch (err) {
        console.log('fetch failed', err);
    }
}