//i
    //create table 
    const myBodyTable = document.getElementById('table');//1
    const addTable = document.getElementById('addTable');//2
    addTable.addEventListener('click', function(){
        //event.preventDefault();
        const myId = document.getElementById('tableData1').value;
        const myName = document.getElementById('tableData2').value;
        const myProfession = document.getElementById('tableData3').value;
        const myAddress = document.getElementById('tableData4').value;
        //alert(`${myId}, ${myId}, ${myProfession}, ${myAddress}`)

        myBodyTable.innerHTML += `
        <tr>
             <td>${myId}</td>
             <td>${myName}</td>
             <td>${myProfession}</td>
             <td>${myAddress}</td>
        </tr>
     `;
    })

    