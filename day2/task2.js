const fileManage =
{
  f001: { folderName: "情報システム部", viewAuth: "Everyone", editAuth: "情報システム部", deleteAuth: "情報システム部" },
  f002: { folderName: "経営管理部", viewAuth: "経営管理部", editAuth: "経営管理部", deleteAuth: "経営管理部" },
  f003: { folderName: "営業部", viewAuth: "Everyone", editAuth: "営業部", deleteAuth: "営業部" }
};

const keys = Object.keys(fileManage);

keys.forEach((key) => {
  //console.log(a);

  const innerLoop = Object.keys(fileManage[key]);

  innerLoop.forEach((key2) => {
    //console.log(key+'-'+key2);
    document.getElementById(key + '-' + key2).textContent = fileManage[key][key2];

    if (=== 'Everyone') {

    }

  })

});



