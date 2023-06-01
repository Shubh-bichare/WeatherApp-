  const temperatureField = document.querySelector('.weather1')
  const cityfield = document.querySelector('.weather2  p')
  const dataField = document.querySelector('.weather2 span')
  const emojiField = document.querySelector('.weather3 img')
  const weatherField = document.querySelector('.weather3 span')
  const searchField = document.querySelector('.searchfeild')
  const form = document.querySelector('form')

   let target='Pune'
  const fecthData = async(target)=>{
       
        const url=`https://api.weatherapi.com/v1/current.json?key=8f90a5880b774fc2a2463707230705&q=${target}`

  const response =await fetch(url);
  const data = await response.json();


  console.log(data)
     
  const {
       current:{
          temp_c ,  condition:{
                text , icon
          },
          last_updated
  
       },
       location:{
            name
       }
  }=data;


     updateDom(temp_c ,name , icon ,  last_updated)
        
  };


    function updateDom(temperature , city , emoji ,weatherFields){
        temperatureField.innerText = temperature;
        cityfield.innerText=city;
        emojiField.src=emoji;
        weatherField.innerText=weatherFields;
    }

  fecthData(target)



  function search( e ,target){
        e.preventDefault();
     target =searchField.value;
      fecthData(target)
  }

    form.addEventListener('submit' ,search)
