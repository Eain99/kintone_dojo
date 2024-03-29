(() => {
  'use strict';

  axios.get('https://54o76ppvn8.execute-api.ap-northeast-1.amazonaws.com/prod/bb-dojo', {
    params: {
      id: 'dojo'
    }
  })
    .then((resp) => {
      const table = document.getElementById('CybozuPage')

      resp.data.forEach((key) => {
        const tr = document.createElement('tr'); // created row
        table.appendChild(tr);

        // put data with td ( the data> day,category,url)
        const date = document.createElement('td');
        date.textContent = key.day.value;
        tr.appendChild(date); // created date


        const category = document.createElement('td');
        category.textContent = key.category.value;
        tr.appendChild(category);// created category
        category.setAttribute('class', `${key.label.value}`)

        const url = document.createElement('td');
        url.innerHTML = `<a href= "${key.url.value}" target="${key.target.value}">${key.content.value}</a>`;
        tr.appendChild(url);


      })


    });
})();