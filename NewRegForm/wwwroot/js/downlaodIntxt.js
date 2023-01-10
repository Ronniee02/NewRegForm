
    function save() {
    var text = document.getElementById("fname").value;
    var text2 = document.getElementById("lname").value;
    var text3 = document.getElementById("email").value;
    var text4 = document.getElementById("mobile").value;
    var text5 = document.getElementById("dob").value;
    var text6 = document.getElementById("address").value;
    var text7 = document.getElementById("city").value;
    var text8 = document.getElementById("pin").value;
    var text9 = document.getElementById("state").value;
    var text11 = document.getElementById("qualification").value;
    var text12 = document.getElementById("c").value;
    var text13 = document.getElementById("password").value;

    all = (text + "\n" + text2 + "\n" + text3 + "\n" + text4 + "\n" + text5 + "\n" + text6 + "\n" + text7 + "\n" + text8 + "\n" + text9 + "\n"  + "\n" + text11 + "\n" + text12 + "\n" + text13).replace(/\n/g, "\r\n");
    /*text2 = text2.replace(/\n/g, "\r\n");*/


    var blob = new Blob([all], {type: "text/plain" });
    var anchor = document.createElement("a");
    anchor.download = "keyboard_lexilogos.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

        }
