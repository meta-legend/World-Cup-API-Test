const apiTestBtn = document.getElementById("api-input-btn");
const apiTestResult = document.getElementById("api-test-result")
const apiTestResult2 = document.getElementById("api-test-result-2")

apiTestBtn.addEventListener("click", () => {
    fetch("http://api.cup2022.ir/api/v1/user/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": "pranab.austin@gmail.com",
            "password": "worldcupapikey"
        })
    }).then(res => { 
        if (res.ok) {
            console.log("success, status code: " + res.status)
        } else {
            console.log("failure, status code: " + res.status)
        }
        return res.json();
    }).then(data => {
        apiTestResult.innerHTML = data
    }); 
    
    fetch("https://reqres.in/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': 'example@gmail.com',
            'password': 'memes'
        })
    }).then(res => { 
        if (res.ok) {
            console.log("success, status code: " + res.status)
        } else {
            console.log("failure, status code: " + res.status)
        }
        return res.json();
    }).then(data => {
        apiTestResult2.innerHTML = data
    })
});