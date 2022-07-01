(() =>{
  'use strict';


  const getAddress = (zipcode) => {
    axios
    .get('https://api.zipaddress.net/',{
    params:{
      zipcode: zipcode,
    },
    })
    .then((res) =>{
   console.log(res);
    })
  };

  getAddress(1250053);


})();
