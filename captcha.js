let captcha;
function generate() {
 
 
    document.getElementById("submit").value = "";
   captcha = document.getElementById("image");
    let uniquechar = "";
 
    const randomchar =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
   
    for (let i = 1; i < 7; i++)
    {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
 
 
    captcha.innerHTML = uniquechar;
}
 
function msg() {
    const userinput = document
        .getElementById("submit").value;
 

    if (userinput == captcha.innerHTML) {
        alert("you have successfully submited your contact details");
        generate();
    }
    else {
       alert("not Matched");
        generate();
    }
}



