import { log } from "node:console";
import { writeFile } from "node:fs/promises";

async function getResponse() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
    );

    const json = await response.json();
    console.log(json);
    const newData = (JSON.stringify(json))

    writeFile('./data/post.json', newData);
    return "Yeah!";

}

console.log(getResponse());


getResponse().then((resp) => console.log(resp));

// function getResponse1() {
//     return new Promise((resolve, reject) => {
//         resolve();
//     });
// }
// async function getResponse2() { }

// console.log({ getResponse1: getResponse1(), getResponse2: getResponse2() });

// try {
//     writeFile('post.json', "");
//     console.log("File has been saved.");
// } catch (error) {
//     console.error(error);
// } 