
const email = document.getElementsByClassName("username")[0].value; 

const btn = document.getElementsByClassName("btn")[0]; 
let results = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "kvapeksha3",
    "email": "kvapeksha3@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
};

btn.addEventListener("click", oop);

 async function  oop(event) {
    const email = document.getElementsByClassName("username")[0].value; 
    event.preventDefault();
    let key = "ema_live_73UxnGWL7rjo1EypucUw7yifqJJJYdoB0jPXDX1G"
let url = `https://api.emailvalidation.io/v1/info?apikey=ema_live_73UxnGWL7rjo1EypucUw7yifqJJJYdoB0jPXDX1G&email=${email}`

let res= await fetch(url)
let results =await res.json()
const yu = document.getElementsByClassName("fr")[0];
let str = '';
const keys = Object.keys(results);
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];  
  str +=`<div><strong>${key}:</strong> ${results[key]}</div>`; 
}

 yu.innerHTML = str;
   
}
  

