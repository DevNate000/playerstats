fetch(`data.json`).then((data)=>{
    // console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td>
        </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
})  .catch((err)=>{
    console.log(err);
})



// https://fakestoreapi.com/products

// https://scraper.nt-verse.com/api/bootstrap
