/*
Function currently reads in username and password and checks to see if the username is in the database.

Output in console to check if username is in the db or not
*/
async function TryLogin(username, password){
    console.log("Trying to log in");
    console.log("The username is:", username, "\nThe password is:", password);
    var valid = false;
    await firebase.firestore().collection('accounts').where('username', '==', username.toLowerCase())
    .get()
    .then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            console.log(doc.id, " => ", doc.data());
            valid = true;
        });
    });

    if(valid){
        console.log("Username found");
        return true;
    }
    else{
        console.log("Username not found");
        return false;
    }
}

async function TryCreateNewAccount(username, password, emailaddress){
    console.log("Trying to add new account");
    console.log("The username is:", username, "\nThe password is:", password);

    var check = await TryLogin(username,password)

    if(check){
        console.log("Username already taken");
        return false;
    }
    else{
        console.log("Username not yet taken");
        firebase.firestore().collection('accounts').add({"username":username.toLowerCase(), "password":password, "email":emailaddress});
        return true;
    }
}