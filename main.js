import { log } from "node:console";
import { writeFile } from "node:fs/promises";


// LEV I
const getResponse = async () => {

    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
    );

    const json = await response.json();
    // console.log(json);

    writeFile('./data/post.json', JSON.stringify(json, null, 2));
    return "Yeah - Die Daten sind da!";
}

console.log(getResponse());


getResponse().then((resp) => console.log(resp));




// LEV II

const getComments = async () => {
    let newCommentArr = [];
    for (let index = 1; index <= 100; index++) {
        const response = await fetch(
            (`https://jsonplaceholder.typicode.com/posts/${index}/comments`),
        );
        const jsonComments = await response.json();
        console.log(jsonComments);

        // DECSTRUCTERING mit:
        // push und Spread Operator [...]
        // newCommentArr.push(...jsonComments)

        // oder .concat
        newCommentArr = newCommentArr.concat(jsonComments)
    }

    writeFile('./data/comments.json', JSON.stringify(newCommentArr, null, 2));

    return "Yeah - Kommentare!";
}

console.log(getComments());

getComments().then((resp) => console.log(resp));




// LEV III