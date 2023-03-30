fetch(`https://scraper.nt-verse.com/api/racer/nathaniel818)`).then((data)=>{
    // console.log(data);
        return data.json();
}).then((objectData)=>{
    let tableData=`<tr>
    objectData.map((values)=>{
        tableData+=`<tr>
        <td>${values.displayName}</td>
        <td>${values.username}</td>
        <td>${values.racesPlayed}</td>
        <td>${values.avgSpeed}</td>
        <td>${values.level}</td>
        <td><img src="${values.image}"/></td>
        </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
})  .catch((err)=>{
    console.log(err);
})
