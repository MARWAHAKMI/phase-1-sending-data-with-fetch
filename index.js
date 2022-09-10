
const submitData = (name, email) => {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name,
            email
        }),
    }
    const res = fetch('http://localhost:3000/users', configurationObject)
    return res.then(data => data.json())
        .then((data) => {
            document.body.innerHTML = data.id
        })
        .catch(function (error) {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
            document.body.innerHTML = 'Unauthorized Access'
        });
}

submitData('Steve', "steve@steve.com")