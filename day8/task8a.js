(()=>{
'use strict';
kintone.events.on('app.record.create.show',(event)=>{

  console.log(event);

  const params ={
    app:kintone.app.getId();
  }

});


})();