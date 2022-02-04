// const myName = "Mokko Janual Akbar"
// const myAge = 22

// console.log("Ini adalah tipe data : " + typeof myName)
// console.log("Ini adalah tipe data : " + typeof myAge)

// console.log("Hallo, Nama saya " + myName + " saya berusia " + myAge)
// console.log(`Hallo, Nama saya ${myName } saya berusia ${myAge}`)

 //Validasi
    // if(name == '' || email == '' || phone == '' || subject == '' || message == ''){
    //     alert(`Tolong isi semua field`)
    // }else{
    //     alert(`Data selesai ditambahkan`)
    // }

function showdata(){

    // DOM mengambil data
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    // Validasi Data
    if(name == ""){
        alert(`Please input your name`)
    }else
    
    if(email == ""){
        alert(`Please input your email`)
    }else
    
    if(phone == ""){
        alert(`Please input your number phone`)
    }else
    
    if(subject == ""){
        alert(`Please input your subject`)
    }else
    
    if(message == ""){
        alert(`Please input your message`)
    }else{
        // DOM Create Element
        let emailReceiver = 'mokkoja43@gmail.com'
    
        let a = document.createElement("a")
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, ${subject}, ${message}, this my phone number : ${phone}`
    
        a.click()

        // Menghapus data yang sudah di submit
        document.getElementById("input-name").value = ""
        document.getElementById("input-email").value = ""
        document.getElementById("input-phone").value = ""
        document.getElementById("input-subject").value = ""
        document.getElementById("input-message").value = ""
    }

     //Object
     const dataObject = {
        dataName : name,
        dataEmail : email,
        dataPhone : phone,
        dataSubject : subject,
        dataMessage : message
    }
    console.table(dataObject)
}

