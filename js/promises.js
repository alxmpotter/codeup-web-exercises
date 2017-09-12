"use strict";
//make a function called wait, return a promise after x seconds
const wait =  (milliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};

// function wait (number) {
//     return new Promise( (resolve) => {
//         setTimeout(() => resolve(), number);
//
//     });
//
// }


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

//git hub personal access token
// fetch("https://api.github.com/users", {headers: {"Autorization" : "02e7b36f39c8783bbaae6e025428cb42dff021df"}} );


// function userCommit (userName) {
//     return fetch(`https://api.github.com/users/${userName}/events`, {headers: {"Authorization" : "token 02e7b36f39c8783bbaae6e025428cb42dff021df"}} );
//
// }

// userCommit("alxmpotter");

function lastCommit(user, repo) {
return fetch(`https://api.github.com/repos/${user}/${repo}/events`,
    { headers:
        {"Authorization" : "token MY_TOKEN"}
    })
    .then((response) => {
        return response.json();
    })
    .then( (event) => {
        return event[0].created_at;
    });
}

lastCommit("alxmpotter", "codeup-web-exercises").then(event => console.log(event));

