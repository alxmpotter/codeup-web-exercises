const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

console.log(users);

//use filter to return users that know 3 or more computer languages---------
const moreThanThreeLanguages = users.filter(user => user.languages.length >= 3);
console.log(moreThanThreeLanguages);

//use map to create an array of strings that is ea users email--------
const userEmail = users.map(user => user.email);
console.log(userEmail);

//use reduce to transform array to object--------
