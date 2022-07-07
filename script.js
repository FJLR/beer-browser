//testing the script file
console.log("hola");

//testing the fetch API promise is display
//console.log(fetch("https://reqres.in/api/users")); 

//lets run the response promise
//fetch("https://reqres.in/api/users").then(res => console.log(res));

//how to fetch the ''data'' object
//fetch("https://reqres.in/api/users/")
//.then(res => res.json()).then(data => console.log(data));



//Adding an error condition statement
// fetch("https://reqres.in/api/users/")
// .then(res => {
//     if(res.ok) {
//         console.log("yeah l did it  :) success")
//     } else {
//         console.log("oops ERROR :(")
//     }
//     return res.json()
// })

// .then(data => console.log(data));
//.catch(error => console.log("error boo"));




// //Adding a POST method with a user
// fetch("https://reqres.in/api/users/48",
// {method: "POST", 
// headers: {"Content-Type": "application/json"},
// body: JSON.stringify({name: "Jonathan",
// lastname: "Mazin", role: "Super Web Developer"})
// }
// )
// .then(res => {
//     if(res.ok) {
//         console.log("yeah l did it  :) success")
//     } else {
//         console.log("oops ERROR :(")
//     }
//     return res.json()
// })

// .then(data => console.log(data));
// //.catch(error => console.log("error boo"));




//Adding a POST method with multiples users
fetch("https://reqres.in/api/users/48",
{method: "POST", 
headers: {"Content-Type": "application/json"},
body: JSON.stringify({

VarsityTutor:[
    {name: "Jonathan",
    lastname: "Mazin", role: "Super Web Developer", title:"Instructor",
    networth:"6.7 MM"
},
{

    name: "Francisco",
    lastname: "Laurin", role: "Web Developer", title:"Student",
    networth: "1.2 MM"    
}   
]  

})
})
.then(res => {
    if(res.ok) {
        console.log("yeah l did it  :) success")
    } else {
        console.log("oops ERROR :(")
    }
    return res.json()
})

.then(data => console.log(data));
//.catch(error => console.log("error boo"));









//to be reviewed
// https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

