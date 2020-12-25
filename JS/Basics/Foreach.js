//more tests Foreach
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

function signIn(){
    database.forEach(function (LogIn) {
        console.log(LogIn.userName)
    });
}

//var userId = prompt("Please entry your User Name")
//var passWord = prompt("Your password")

//signIn(userId, passWord)
signIn()