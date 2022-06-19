let axios = require("axios")

// Get State Id from APIsetu website 
let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// Get District Id from APIsetu website 
let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





// Assignment of 17.06.22

// Get vacciantion details by district id

let getByDistrict = async function (req, res) {
    try {
        let district_id = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${district_id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



// Get London Weather 

let getLondonWeather = async function (req, res) {
    try {
        let city = req.query.city
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=737680b5f8fed1e89949ac9b6dae589c`
        }
        let result = await axios(options)
        console.log(result.data)

        let kelvin = result.data.main.temp
        let d = (result.data.main.temp) - 273.15
        console.log(kelvin + " Kelvin  or  " + d.toFixed(2) + " Degree Celsius ")
        res.status(200).send({ msg: kelvin + " Kelvin  or  " + d.toFixed(2) + " Degree Celsius " })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


// Get weather report of listed cities and sort them in ascending order 

let getCitiesWeather = async function (req, res) {
    try {

        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arr = [];
        // let city = req.query.city
        for (let i = 0; i < cities.length; i++) {
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=737680b5f8fed1e89949ac9b6dae589c`
            }
            let result = await axios(options)
            let obj= {city: cities[i]};
            obj.temp= result.data.main.temp;
            arr.push(obj);

        }

        res.status(200).send({ msg: arr.sort(function(a,b) {return a.temp-b.temp}) })
       

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



// Get id 

let getId = async function (req, res) {
    try {
        var options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
       
        res.send({msg: result.data})

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


// Choose an image by id and edit that by post API


let postText = async function (req, res) {
    try {
         let id = req.query.template_id;
         let nm = req.query.username;
         let pd = req.query.password
         let text0 = req.query.text0
         let text1 = req.query.text1

        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&username=${nm}&password=${pd}&text0=${text0}&text1=${text1}`,
            data: id, nm, pd, text0, text1
        }
        let result = await axios(options)
        let obj = {};
        obj.url= result.data.data.url
        obj.page_url=result.data.data.page_url;


       
        res.send({msg: obj})

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}






module.exports.getStates = getStates
module.exports.getDistricts = getDistricts


module.exports.getByDistrict = getByDistrict
module.exports.getLondonWeather = getLondonWeather
module.exports.getCitiesWeather = getCitiesWeather
module.exports.getId = getId
module.exports.postText = postText