"use strict";
//make a function called wait, return a promise after x seconds
// const wait = new Promise((resolve, reject) =>) {
//     setTimeout(() => {
//
//     }, 1800);
// }

function wait (number) {
    return new Promise( (resolve) => {
        setTimeout(() => resolve(), number);

    });

}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

//git hub personal access token
// fetch("https://api.github.com/users", {headers: {"Autorization" : "02e7b36f39c8783bbaae6e025428cb42dff021df"}} );


// function userCommit (userName) {
//     return fetch(`https://api.github.com/users/${userName}/events`, {headers: {"Authorization" : "token 02e7b36f39c8783bbaae6e025428cb42dff021df"}} );
//
// }

// userCommit("alxmpotter");

function lastCommit(owner, repo) {
return fetch(`https://api.github.com/repos/${owner}/${repo}/events`,{headers: {"Authorization" : "token 02e7b36f39c8783bbaae6e025428cb42dff021df"}})
    .then(function(response){
        return response.json();
    })
    .then(function(event){
        return event[0].created_at;
    });
}

lastCommit("alxmpotter", "codeup-web-exercises").then(response => console.log(response));

// fetch('https://api.github.com/users').then((response) => {
//     const users = response.json().then((users) => {
//         const usernames = users.map(user => user.login);
//         usernames.forEach((username) => {
//            console.log(username);
//         });
//     });
// });