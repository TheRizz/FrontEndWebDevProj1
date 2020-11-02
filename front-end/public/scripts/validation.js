/*
Function currently reads in username and password and checks to see if the username is in the database.

Output in console to check if username is in the db or not
*/

if(sessionStorage.getItem('auth') == null){
    sessionStorage.setItem('auth', 'false');
}

class Login{
    static username = "";
    static password = "";
    static authenticated = false;
    
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}

async function TryLogin(username, password) {
    console.log("Trying to log in");
    console.log("The username is:", username, "\nThe password is:", password);
    var valid = false;
    await firebase.firestore().collection('accounts').where('username', '==', username.toLowerCase())
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, " => ", doc.data());
                valid = true;
            });
        });

    if (valid) {
        console.log("Username found");
        return true;
    } else {
        console.log("Username not found");
        return false;
    }
}

async function TryCreateNewAccount(username, password, emailaddress) {
    console.log("Trying to add new account");
    console.log("The username is:", username, "\nThe password is:", password);

    var check = await TryLogin(username, password)

    if (check) {
        console.log("Username already taken");
        window.alert("Username already taken");
        return false;
    } else {
        console.log("Username not yet taken");
        firebase.firestore().collection('accounts').add({
            "username": username.toLowerCase(),
            "password": password,
            "email": emailaddress
        });
        window.alert("Account successfully created");
        TryFullLogin(username, password);
        return true;
    }
}

async function CheckPassword(username, password) {
    console.log("Trying to log in with user and password");
    console.log("The username is:", username, "\nThe password is:", password);
    var valid = false;
    await firebase.firestore().collection('accounts').where('username', '==', username.toLowerCase())
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                var data;
                console.log(doc.id, " => ", data = doc.data());
                if(data.username == username.toLowerCase() && data.password == password ){
                    valid = true;
                    console.log("USERNAME AND PASSWORD VALID");
                } 
                else{
                    console.log("Error logging in :(");
                }
            });
        });

    if (valid) {
        console.log("Username found");
        return true;
    } else {
        //console.log("Username not found");
        return false;
    }
}

async function TryFullLogin(username, password){
    var check = true;
    if(await TryLogin(username.toLowerCase(), password)){
        console.log("Valid username");
    }
    else{
        check = false;
        window.alert("Username does not exist!");
    }

    if(await CheckPassword(username.toLowerCase(), password)){
        console.log("Valid password");
    }
    else{
        check = false;
        window.alert("Password Incorrect");
    }

    if(check){
        sessionStorage.setItem('user', username);
        sessionStorage.setItem('pass', password);
        sessionStorage.setItem('auth', "true");
        console.log(sessionStorage.getItem('auth'));
        window.alert("Login Successful");
        window.location = "home.html";
        Login.authenticated = true;
    }

}

