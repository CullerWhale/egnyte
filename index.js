// https://{Egnyte Domain}.egnyte.com/pubapi/


// url = 'https://emhcci.egnyte.com/pubapi/'
// baseurl:
const axios = require('axios');

url='https://apidemo.egnyte.com';

axios(
    {
        url: url + '/puboauth/token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: 'client_id=vrvwywf58jmfn9tk97ynhzby&client_secret=xRT2Fuc6tETDKwsFQjwwFQWydCGwqdYazNQJQ8KGYSQ6v8h4gf&username=CullerWhale&password=DeniseJennyCarmichael1!&grant_type=password'
    }
).then(function(response) {
    if (response.ok) {
        response.json().then(function (data) {
            console.log(data)
        })
    }
}).catch(function(error) {
    console.log(error);
})

// fetch(url+'/puboauth/token', {
//     method: 'POST', 
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: 
//         'client_id=vrvwywf58jmfn9tk97ynhzby&client_secret=xRT2Fuc6tETDKwsFQjwwFQWydCGwqdYazNQJQ8KGYSQ6v8h4gf&username=CullerWhale&password=DeniseJennyCarmichael1!&grant_type=password'
    
// }).then(function(response) {
//     if (response.ok) {
//         response.json().then(function (data) {
//             console.log(data)
//         })
//     }
// })
