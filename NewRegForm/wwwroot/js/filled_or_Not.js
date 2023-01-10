<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
function check() {
    var name = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("mobile").value;
    var gender = document.getElementById("g").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pin").value;
    var state = document.getElementById("state").value;
    var qualification = document.getElementById("qualification").value;
   /* var specialization = document.getElementById("c").value;*/
    var password = document.getElementById("password").value;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone = /^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
    var regName = /\d+$/g;                                    // Javascript reGex for Name validation


    if (name == '' || lname == '' || email == '' || phone == '' || gender == '' || dob == '' || address == '' || city == '' || pincode == '' || state == '' || qualification == '' || /*specialization == '' ||*/ password == '') {
        swal({
            title: "Fields Empty",
            text: "Please Check the missing field!!",
            icon: "Warning",
            button: "ok",
        });
    } else {

        swal({
            title: "Succesfully Submitted",
           
            icon: "success",
            button: "yes",
           
        });

    }
    if (name == "" || regName.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }

    if (address == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }

    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (password == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if (password.length < 6) {
        alert("Password should be atleast 6 character long");
        password.focus();
        return false;

    }
    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }

    //if (what.selectedIndex == -1) {
    //    alert("Please enter your course.");
    //    what.focus();
    //    return false;
    //}

    return true;
}
        