var email = document.getElementById("email")
var password = document.getElementById("password")
var signup = document.getElementById("signup")
var login = document.getElementById("login")
// var admin = document.getElementById("admin").value
var user1 = document.getElementsByName("box")

var boxvalue

// console.log(user.value)

// // 
signup.addEventListener("click",function(){
event.preventDefault();
   for(var i =0 ; i<user1.length ; i++ ){
       if(user1[i].checked){
        boxvalue=user1[i].value
       }  
   }

    console.log(boxvalue)

    if (boxvalue == "User"){

        console.log(boxvalue)

        firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
            .then((user)=>{
                console.log(user.user.uid)

                //get current user 

                localStorage.setItem("email", email.value)
                localStorage.setItem("uid", user.user.uid)

                // signup.setAttribute("style","display:none")
                // login.setAttribute("style","display:none")

                // send database 
                var obj = {
                    name: "smit",
                    email: email.value,
                    password: password.value,
                    role: boxvalue,//multi user 
                    // home_service=>user,worker,admin>panel 
                    uid: user.user.uid
                }

                // send data : 

                // ecom add : storage 
                // firebase.database().ref("users/").push(obj)
                // firebase.database().ref("users/").child(user.user.uid).push(obj)

                // send database 

                firebase.database().ref(`${boxvalue}/`).child(user.user.uid).set(obj)






            })
            .catch((e)=>{
                // console.log(console.log(e.message))
                alert(e.message)
            })
    
        

}  


else if (boxvalue == "Admin") {
    console.log(boxvalue)

    firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
        .then((user)=>{
            console.log(user.user.uid)

            //get current user 

            localStorage.setItem("email", email.value)

            localStorage.setItem("uid", user.user.uid)

            // signup.setAttribute("style","display:none")
            // login.setAttribute("style","display:none")

            // send database 
            var obj = {
                name: "Admin",
                email: email.value,
                password: password.value,
                role: boxvalue,//multi user 
                // home_service=>user,worker,admin>panel 
                uid: user.user.uid
            }

            // send data : 

            // ecom add : storage 
            // firebase.database().ref("users/").push(obj)
            // firebase.database().ref("users/").child(user.user.uid).push(obj)

            // send database 

            firebase.database().ref(`${boxvalue}/`).child(user.user.uid).set(obj)






        })
        .catch((e)=>{
            // console.log(console.log(e.message))
            alert(e.message)
        })



}  
else{
    alert("Please select any check box")
} 
})




login.addEventListener("click", function () {
    
event.preventDefault();

    for(var i =0 ; i<user1.length ; i++ ){
        if(user1[i].checked){
         boxvalue=user1[i].value
        }  
        
 
    }
 
     console.log(boxvalue)
 
 
     if (boxvalue == "User"){
 
         console.log(boxvalue)
 
         firebase.auth().signInWithEmailAndPassword(email.value,password.value)
        .then((user1)=>{
            console.log(user1.user)
            

            localStorage.setItem("uid",user1.user.uid)

            window.location.href="user.html"

            // window.location.replace("new.html") //page change

            // signup.setAttribute("style","display:none")
            // login.setAttribute("style","display:none")
            // signout.removeAttribute("style")

// alert("success user")




        })
        .catch((err)=>{
            alert(err.message)
        })
 
 }  
 
 
 else if (boxvalue == "Admin") {
     console.log(boxvalue)
 
     firebase.auth().signInWithEmailAndPassword(email.value,password.value)
     .then((user1)=>{
         console.log(user1.user)
         

         localStorage.setItem("uid",user1.user.uid)

         window.location.href="admin.html"

         // window.location.replace("new.html") //page change

         // signup.setAttribute("style","display:none")
         // login.setAttribute("style","display:none")
         // signout.removeAttribute("style")

// alert("succas admin")




     })
     .catch((err)=>{
         alert(err.message)
     })
 
 }  
 else{
     alert("Please select any check box")
 } 
 })
 





