//-------------------------------------set variables-----------
let form = document.getElementById('form')
let generatedTicket = document.getElementById('generatedTicket')
let dropZone = document.getElementById('dropZone')
let fullName = document.getElementById('fullName')
let emailAdress = document.getElementById('emailAdress')
let gitHubUserNameInput = document.getElementById('gitHubUserNameInput')
let generateBtn = document.getElementById('generateBtn')
let ticketAvatar = document.getElementById('ticketAvatar')
let ticketUserName = document.getElementById('ticketUserName')
let gitHubUserName = document.getElementById('gitHubUserName')
let userNameSpan = document.getElementById('congratsUserNameSpan')
let emailText = document.getElementById('emailText')
let preview = document.getElementById("preview");
//------------------------save data----------------------------------
let datapro;
if(localStorage.info != null){
    datapro = JSON.parse(localStorage.info)
}
else {
    datapro = [];
}
function create(){
    let newpro = {
        fullName: fullName.value,
        emailAdress: emailAdress.value,
        gitHubUserNameInput: gitHubUserNameInput.value,
    }
    datapro.push(newpro)
    localStorage.setItem('info' , JSON.stringify(datapro))
}

//--------------------------generate function-------------------------
    generateBtn.onclick = function(){
        form.style.display = 'none'
        generatedTicket.style.display = 'flex'
        console.log(fullName.value)
        create()
        for(let i = 0 ; i < datapro.length ; i++){
            userNameSpan.innerHTML = datapro[i].fullName
            emailText.innerHTML = datapro[i].emailAdress
            ticketUserName.innerHTML = datapro[i].fullName
            gitHubUserName.innerHTML = datapro[i].gitHubUserNameInput
        }
    }
//------------------------------avatar fuction----------------------------
// منع فتح الصورة في المتصفح
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("over");
});

// لما يخرج من المنطقة
dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("over");
});

// عند الإفلات
/*
dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("over");
    let file = e.dataTransfer.files[0]; 
    if (file && file.type.startsWith("image/")) {
        let reader = new FileReader();
        reader.onload = function(event) {

            if(generatedTicket.style.display == 'flex'){
            preview.innerHTML = `<img src="${event.target.result}" alt="Dropped Image"/>`;}
        };
    reader.readAsDataURL(file); 
    }
    else {
    preview.innerHTML = `<p style="color:red;">Not Image</p>`;
    }
});*/
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("over");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("over");
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("over");

    let files = e.dataTransfer.files;

    if (files.length > 0) {
        let file = files[0]; // أول ملف
        if (file.type.startsWith("image/")) {
            let reader = new FileReader();
            reader.onload = function(event) {
                /*
                if (generatedTicket.style.display == 'flex') {
                    preview.innerHTML = `<img src="${event.target.result}" 
                        alt="Dropped Image" style="max-width:100%; border-radius:8px;"/>`;
                }*/
            };
            reader.readAsDataURL(file);
        } else {
            preview.innerHTML = `<p style="color:red;">Not an Image</p>`;
        }
    }
});
