    

        // fetch("http://api.weatherapi.com/v1/current.json?key=8d4630638cec43f8827132347241909&q=London")
        // .then(response =>response.json())
        // .then( data =>console.log(data.current.temp_c))
        // .then( data =>console.log(data.current.cloud))

   async function api(){
try{
    
    const cityname =document.getElementById("inputcity");
    const city =cityname.value.toLowerCase()

     const response =await fetch(`http://api.weatherapi.com/v1/current.json?key=8d4630638cec43f8827132347241909&q=${city}`)
     const data = await response.json()
     if(!response.ok){
        throw new Error(
            "couldnt fetch"
        )
    
     }
     else{
        const citi = document.getElementById("city")
        citi.textContent= `city :- ${data.location.name}`

        const country = document.getElementById("country")
        country.textContent= `Country :- ${data.location.country}`

        const region = document.getElementById("region")
        region.textContent= `Region :- ${data.location.region}`
            
        const humidity = document.getElementById("humidity")
        humidity.textContent= `Humidity :- ${data.current.humidity}%`
          
                const temp = document.getElementById("temp")
        temp.textContent= `Temperature :- ${data.current.temp_c} °`

                  const condition = document.getElementById("condition")
        condition.textContent= `${data.current.condition.text}`
     }
     console.log(data)
     console.log(data.location.name)
     console.log(data.location.region)
     console.log(data.current.condition.text)




     const pic = document.getElementById("pic");
    const spics = data.current.condition.icon;
     pic.src = spics;
pic.style.display="block";
     
}
catch(error){
 console.error(error)
 alert("enter a valid location")
 
}

    }api()

    