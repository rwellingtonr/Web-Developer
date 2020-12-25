var database = [{
    userName: "wellington",
    password: "W@ton210597"
},
{
    userName: "ana",
    password: "1234"
},
{
    userName: "mariana",
    password: "5678"
},
{
    userName: "joaquin",
    password: "0987"
},
{
    userName: "raquel",
    password: "abc"
}
];
var newsFeed = [{
    userName:"Johnny",
    timeLine: "I am loving learn JS"},
    {
    userName:"Anddy",
    timeLine: "Improving my knowledge!"
}];

var userNamePrompt = prompt("What's your username?");
var passwordNamePrompt = prompt("Fill in your password.");

signIn(userNamePrompt, passwordNamePrompt);
//isUserValid(userNamePrompt, passwordNamePrompt);

function isUserValid(username, password){
    for (let i = 0; i < database.length; i++) {
        if ((database[i].userName === username) && (database[i].password === password)){
            return true;
        }
    }
    return false
}

function signIn(user, password){
    if (isUserValid(user, password) === true){
        console.log(newsFeed)
    } else {
        console.log("Sorry dear " + user + " you aren't an user yet")
    }
}
