const getButton = document.querySelector("#get-button");
const postButton = document.querySelector("#post-button");

const inputElement = document.querySelector("#input-element");
const paramButton = document.querySelector("#param-button");

function getFunc() {
    axios.get("http://localhost:3434/get")
        .then((res) => {
            console.log(res.data) // Feel free to log res as well, to show them how the response object is structured.
        })
}

function postFunc() {
    // I won't show it, but remind students how to grab values from inputs using the .value property.

    let bodyObj = {
        name: "Jeddy",
        hobbies: "Coding"
    }

    axios.post("http://localhost:3434/post", bodyObj)
        .then((res) => {
            console.log(res.data);
        })
}

function paramFunc() {
    const id = inputElement.value;

    axios.get(`http://localhost:3434/get/${id}`)
        .then((res) => {
            console.log(res.data);
        })
}

getButton.addEventListener("click", getFunc);
postButton.addEventListener("click", postFunc);
paramButton.addEventListener("click", paramFunc);