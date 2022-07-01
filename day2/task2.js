'use strict';

// Task2-1:fileManage obj contains the files and their permission settings
const fileManage =
{
  f001: { folderName: "情報システム部", viewAuth: "Everyone", editAuth: "情報システム部", deleteAuth: "情報システム部" },
  f002: { folderName: "経営管理部", viewAuth: "経営管理部", editAuth: "経営管理部", deleteAuth: "経営管理部" },
  f003: { folderName: "営業部", viewAuth: "Everyone", editAuth: "営業部", deleteAuth: "営業部" }
};

// Task2-2 オブジェクトに格納されている値を全てブラウザに表⽰する
//  Task2-2: Output the fileManage object in HTML using table's id
const file = Object.keys(fileManage);

file.forEach((fileId) => {
  // console.log('fileId');  // Expected f001,f002,f003
  // console.log(fileId); 

  const innerLoop = Object.keys(fileManage[fileId]);

  innerLoop.forEach((fileProperty) => { // loops through files
    console.log(fileId+'-'+fileProperty);
    document.getElementById(fileId + '-' + fileProperty).textContent = fileManage[fileId][fileProperty];

    // find the files with the view auth 'Everyone'
    if (fileManage.fileId.fileProperty.viewAuth === "Everyone") {
      console.log(fileManage.fileId.fileProperty.folderName);
    }
    // display the foldername where viewAuth is 'Everyone'

    // if ( === 'Everyone') {
    // }

  })

});



