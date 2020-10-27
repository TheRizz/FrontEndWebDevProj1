function TryLogin(username, password){
    console.log("Trying to log in");
    console.log("The username is:", username, "\nThe password is:", password);
    var valid = false;
    acct = firebase.firestore().collection('accounts').where('username', '==', username.toLowerCase())
    .get()
    .then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            console.log(doc.id, " => ", doc.data());
            valid = true;
        });
    })
    .finally(function(error){
        if(valid){
            console.log("Username found");
        }
        else{
            console.log("Username not found");
        }
    });


}