// const getJokes = async () => {
//     try{
//         const res = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
//         const data = await res.json();
//         const comderjoke = document.querySelector("#comderjoke");
//         comderjoke.innerHTML = data.setup;
//         comderjoke.innerHTML = data.punchline;
//     }catch(error){}
// }

// window.addEventListener("load", () => {
//     getJokes();
// })

const getJokes = async () => {
    try {
        const res = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
        const data = await res.json();
        const joke = data[0]; // Access the first joke in the array
        const comderJokeSetup = document.querySelector("#comderjoke-setup");
        const comderJokePunchline = document.querySelector("#comderjoke-punchline");
        comderJokeSetup.innerHTML = joke.setup;
        comderJokePunchline.innerHTML = joke.punchline;
    } catch (error) {
        console.error('Error fetching the joke:', error);
    }
}

window.addEventListener("load", () => {
    getJokes();
});
