function signup(){

    const fname = document.getElementById("fname"); 
    const uname = document.getElementById("email"); 
    const pass = document.getElementById("pass"); 
    const surname = document.getElementById("surname");
    const dobInput = document.getElementById("dob"); 

}


//First name validation

document.getElementById("fname").addEventListener('input', () => { 
 
    let firstname = fname.value; 
    let flag = 0; 
 
    for (let i = 0; i < firstname.length; i++) { 
        if (firstname.length === 0) { 
            continue; 
        } 
        else if (firstname[0] >= 'A' && firstname[0] <= 'Z') { 
 
            continue; 
        } else { 
            flag = 1; 
            break; 
        } 
    } 
    if (flag == 1) { 
        document.getElementById("efname").innerHTML = "Start with Capital letter"; 
        document.getElementById("efname").style.color = 'red'; 
    } else { 
        document.getElementById("efname").innerHTML = " "; 
    } 

});



// Surname validation
document.getElementById("surname").addEventListener('input', () => { 
 
    let surnamee = surname.value; 
    let flag = 0; 
 
    for (let i = 0; i < surnamee.length; i++) { 
        if (surnamee.length === 0) { 
            continue; 
        } 
        else if (surnamee[0] >= 'A' && surnamee[0] <= 'Z') { 
 
            continue; 
        } else { 
            flag = 1; 
            break; 
        } 
    } 
    if (flag == 1) { 
        document.getElementById("esurname").innerHTML = "Start with Capital letter"; 
        document.getElementById("esurname").style.color = 'red'; 
    } else { 
        document.getElementById("esurname").innerHTML = " "; 
    } 

});

//Email validaton

const uname = document.getElementById("email"); 

document.getElementById("email").addEventListener('input', () => { 
 
    let emailv = email.value; 
    let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
 
    if (emailv.length === 0) { 
        document.getElementById("eemail").innerHTML = " "; 
    } else if (emailregex.test(emailv)) { 
        document.getElementById("eemail").innerHTML = " "; 
 
    } else { 
        document.getElementById("eemail").innerHTML = "Wrong Email address"; 
        document.getElementById("eemail").style.color = 'red'; 
    } 
 
}); 


//password validation

const pass = document.getElementById("pass"); 

document.getElementById("pass").addEventListener('input', () => { 
 
    let password = pass.value; 
 
    let uppercase = false; 
    let lowercase = false; 
    let number = false; 
    let special = false; 
 
    for (let i = 0; i < password.length; i++) { 
 
        if (password[i] >= 'A' && password[i] <= 'Z') { 
            uppercase = true; 
        } else if (password[i] >= 'a' && password[i] <= 'z') { 
            lowercase = true; 
        } else if (password[i] >= '0' && password[i] <= '9') { 
            number = true; 
        } else { 
            special = true; 
        } 
    } 
    if (password.length === 0) { 
        document.getElementById("epass").innerHTML = " "; 
    } else if (!uppercase) { 
        document.getElementById("epass").innerHTML = "At least one upper case letter"; 
        document.getElementById("epass").style.color = 'red'; 
        event.preventDefault(); 
    } else if (!lowercase) { 
        document.getElementById("epass").innerHTML = "At least one Lower case letter"; 
        document.getElementById("epass").style.color = 'red'; 
    } else if (!number) { 
        document.getElementById("epass").innerHTML = "At least one number"; 
        document.getElementById("epass").style.color = 'red'; 
    } else if (!special) { 
        document.getElementById("epass").innerHTML = "At least one Special Character"; 
        document.getElementById("epass").style.color = 'red'; 
    } else if (password.length < 6) { 
        document.getElementById("epass").innerHTML = "Password Length must be 6 length"; 
        document.getElementById("epass").style.color = 'red'; 
    } 
    else { 
        document.getElementById("epass").innerHTML = ""; 
        document.getElementById("epass").style.color = ""; 
    } 
}); 




