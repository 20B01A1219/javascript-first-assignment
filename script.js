// let select = document.getElementById('r');
// select.addEventListener("click",fuction(e)
// {
//     valid();
// })

// function valid()
// {
//     if (select.checked)
//     {
//         alert("success");
//     }
//     else 
//     {
//         alert("please select any options");
//     }
// }

// function callfun()
// {
//     check = document.getElementById('r');
//     if(check.checked)
//     {
//         alert("thank you");
//     }
//     else 
//     {

//         alert("please check the checkbox");
//     }
// }
let b = document.getElementById('btn')
b.addEventListener("click", function (e) {
   
    let pername = document.getElementById('name');
    let vname = document.getElementById('validname');
    if (pername.value === "") {
        vname.style.visibility = 'visible';
        
    }
    let password = document.getElementById('ps');
    let p = document.getElementById('pass');
    if (password.value === "") {
        p.style.visibility = 'visible';
        
    }
    let id = document.getElementById('email');
    let eid= document.getElementById('em');
    if (id.value === "") {
        eid.style.visibility = 'visible';
        
    }
    let pn = document.getElementById('phone');
    let phn= document.getElementById('ph');
    if (pn.value === "") {
        phn.style.visibility = 'visible';
        
    }

    let gd = document.getElementById('g');
    if (!document.getElementById('r1').checked && !document.getElementById('r2').checked) {
        gd.style.visibility = 'visible';
        
    }
    
    let check = document.getElementById('cbx');
    if (!document.getElementById('cb1').checked && !document.getElementById('cb2').checked && !document.getElementById('cb3').checked && !document.getElementById('cb4').checked ) {
        cbx.style.visibility = 'visible';
        
    }
    
    
    if (document.getElementsById('ad').value === "") {
        document.getElementById('ua').style.visibility = 'visible';
        
    }
    
    e.preventDefault()
});
