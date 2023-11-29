app.component('sign-up-form', {
    template :
    /*html*/
    `
    <div id="sign-up-form" class="col">
        <div class="m-4 mx-0 mx-sm-5">
            <h2 class="ps-2 mt-5 mb-4">Create An Account</h2>
            <form id="form-sign-up" class="container-fluid fw-semibold needs-validation" 
            action="/" method="post" @submit="submitSignUp" novalidate>
                <div class="row mb-2">
                    <div class="col-12 col-sm-6">
                        <label class="form-label" for="first-name">First Name</label>
                        <input id="first-name" name="first-name" @blur="fieldCheck"
                        class="off-white form-control form-control-sm" type="text" 
                        placeholder="First Name" required>
                        <div class="form-text d-block"></div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <label class="form-label" for="last-name">Last Name</label>
                        <input id="last-name" name="last-name" @blur="fieldCheck"
                        class="form-control form-control-sm off-white" type="text" 
                        placeholder="Last Name" required>
                        <div class="form-text d-block"></div>
                    </div>
                </div>
                <div class="col mb-2">
                    <label for="email" class="form-label">Email Address</label>
                    <input id="email" name="email" type="email" class="form-control form-control-sm off-white" 
                    placeholder="Email" @blur="fieldCheck" required>
                    <div class="form-text d-block"></div>
                </div>
                <div class="col mb-2">
                    <label for="address" class="form-label">Address</label>
                    <input id="address" name="address" type="text" class="form-control form-control-sm off-white" 
                    placeholder="Enter your Address" @blur="fieldCheck" required>
                    <div class="form-text d-block"></div>
                </div>
                <div class="row mb-2">
                    <div class="col-12 col-sm-6">
                        <label class="form-label" for="phone-number">Phone Number</label>
                        <div class="input-group input-group-sm has-validation m-0 p-0">
                            <span class="input-group-text" id="basic-addon1">+234</span> 
                            <input id="phone-number" name="phone-number" @blur="fieldCheck"
                            class="off-white form-control form-control-sm" type="text" 
                            placeholder="xxxxxxxxxx" required> 
                        </div>
                        <div class="form-text d-block"></div>
                    </div>
                    <!--<div class="col-12 col-sm-6">
                        <label class="form-label" for="role-select">Select your role</label>
                        <select id="role-select" name="role-select" @mouseout="fieldCheck"
                        class="form-select form-select-sm off-white">
                            <option value="student" selected>Student</option>
                            <option value="staff">Staff</option>
                        </select>
                        <div class="form-text d-block"></div>
                    </div>-->
                </div>
                <!--<div class="col mb-2">
                    <label class="form-label" for="dept">Department</label>
                    <select id="dept" name="dept" size="" class="form-select form-select-sm off-white"
                    @blur="fieldCheck" required>
                        <option value="" selected disabled>Choose...</option>
                        <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Political Engineering">Political Engineering</option>
                        <option value="Electrical and Elecronics Engineering">Electrical and Elecronics Engineering</option>
                        <option value="Law">Law</option>
                        <option value="Microbiology">Microbiology</option>
                        <option value="Geology">Geology</option>
                    </select>
                    <div class="form-text d-block"></div>
                </div>
                <div v-if="role == 'student'" class="col mb-2">
                    <label for="matricNum" class="form-label">Matric Number</label>
                    <input id="matricNum" name="matricNum" type="text" 
                    class="form-control form-control-sm off-white" @blur="fieldCheck"
                    placeholder="Enter your Matric Number" required>
                    <div class="form-text d-block"></div>
                </div>
                <div v-else class="col mb-2">
                    <label for="staffID" class="form-label">Staff ID</label>
                    <input id="staffID" name="staffID" type="text" 
                    class="form-control form-control-sm off-white" @blur="fieldCheck" 
                    placeholder="Enter your Staff ID" required>
                    <div class="form-text d-block"></div>
                </div>-->
                <div class="col mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" name="password" type="password" 
                    class="form-control form-control-sm off-white" @blur="fieldCheck"
                    placeholder="At least 8 characters" required>
                    <div class="form-text d-block"></div>
                </div>
                <div class="col-8 col-sm-5 text-center mx-auto mb-2">
                    <input id="sign-up-btn" type="submit" class="btn btn-dark w-100" value="Sign Up">
                </div>
                <div class="col-8 text-center mx-auto fs-6">Already have an account?
                    <a class="link primary" href="/login">Login</a>
                </div>
            </form>
        </div>
    </div>
    `,
    data() {
        return {
            firstName: "",
            lastName: "",
            emailAddress: "",
            address: "",
            phoneNum: "",
            role: "student",
            dept: "",
            userID: "",
            password: "",
            validArr: [false, false, false, false, false, false, false, false]
        }
    },
    computed: {
        // role() {
        //     console.log(document.getElementById("role-select"))
        //     return document.getElementById('role-select').value;
        // }
    },
    methods: {
        fieldCheck(event) {
            const field = document.getElementById(event.currentTarget.id);
            let warning = document.getElementById(field.id).parentElement.lastChild;
            switch(field.id) {
                case "first-name":
                    if (field.value === ""){
                        warning.innerHTML = "Please enter your name";
                        warning.classList.add("invalid-feedback");                   
                    } else if (field.value.length >= 35){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "Name should be under 35 charaacters";
                    } else {
                        if (warning.classList.contains("invalid-feedback")){
                            warning.classList.remove("invalid-feedback");
                        }
                        warning.classList.add("valid-feedback");
                        warning.innerHTML = "looks good!";
                        this.validArr[0] = true;
                    }
                break;
                case "last-name":
                    if (field.value === ""){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "Please enter your last name";
                    } else if (field.value.length >= 35){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "Last name should be under 35 charaacters";
                    } else {
                        if (warning.classList.contains("invalid-feedback")){
                            warning.classList.remove("invalid-feedback");
                        }
                        warning.innerHTML = "looks good!";
                        warning.classList.add("valid-feedback");
                        this.validArr[1] = true;
                    }
                break;
                case "email":
                    if (field.value === ""){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "Please enter your email address";
                    } else if (!(field.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "Please enter a valid email address";
                    } else {
                        if (warning.classList.contains("invalid-feedback")){
                            warning.classList.remove("invalid-feedback");
                        }
                        warning.classList.add("valid-feedback");
                        warning.innerHTML = "looks good!";
                        this.validArr[2] = true;
                    }
                break;
                case "address":
                    if (field.value === ""){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "Please enter your residential address";
                    }  else {
                        if (warning.classList.contains("invalid-feedback")){
                            warning.classList.remove("invalid-feedback");
                        }
                        warning.classList.add("valid-feedback");
                        warning.innerHTML = "looks good!";
                        this.validArr[3] = true;
                    }
                break;
                case "phone-number":
                    warning = warning.parentElement.parentElement.lastChild;
                    if (field.value === ""){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "Please enter your phone number";
                    } else if (field.value.length !== 10){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "Please enter a valid phone number";
                    } else {
                        if (warning.classList.contains("invalid-feedback")){
                            warning.classList.remove("invalid-feedback");
                        }
                        warning.classList.add("valid-feedback");
                        warning.innerHTML = "looks good!";
                        this.validArr[4] = true;
                    }
                break;
                case "role-select":
                    this.role = document.getElementById('role-select').value;
                break;
                case "dept":
                    if (field.value === ""){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "Please select your department";
                    } else {
                        if (warning.classList.contains("invalid-feedback")){
                            warning.classList.remove("invalid-feedback");
                        }
                        warning.classList.add("valid-feedback");
                        warning.innerHTML = "looks good!";
                        this.validArr[5] = true;
                    }
                break;
                case "matricNum": 
                case "staffID":
                    if (field.value === ""){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "This field is required";
                    } else if (field.value.length >= 10){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "Enter a valid ID";
                    } else {
                        if (warning.classList.contains("invalid-feedback")){
                            warning.classList.remove("invalid-feedback");
                        }
                        warning.classList.add("valid-feedback");
                        warning.innerHTML = "looks good!";
                        this.validArr[6] = true;
                    }
                break;
                case "password":
                    if (field.value === ""){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "Please set your password";
                    } else if (field.value.length < 8 || field.value.length > 20){
                        warning.classList.add("invalid-feedback");
                        warning.innerHTML = "Password should be between 8 and 20 characters";
                    } else {
                        if (warning.classList.contains("invalid-feedback")){
                            warning.classList.remove("invalid-feedback");
                        }
                        warning.classList.add("valid-feedback");
                        warning.innerHTML = "looks good!";
                        this.validArr[7] = true;
                    }
                break;
            }
        },
        async submitSignUp(event) {
            event.preventDefault();
            if (this.validArr.includes(false)){
                alert("Please fill all fields out correctly");
                return false;
            }
            try {
            const inputs = document.getElementById('form-sign-up').elements;
            await fetch('https://xyedvqcuefnbboegrzwa.supabase.co/auth/v1/signup', {
                method: 'POST',
                headers: {
                    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5ZWR2cWN1ZWZuYmJvZWdyendhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjkzNTUyOCwiZXhwIjoyMDAyNTExNTI4fQ.dGcUljOSIuP6JsEmRTZJy1YPnjrsBf9NjzFcKLB5dyI",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: inputs["email"].value,
                    password: inputs["password"].value,
                    data: {
                        lastname: inputs["last-name"].value.toLowerCase(),
                        firstname: inputs["first-name"].value.toLowerCase(),
                        role: inputs["role-select"].value.toLowerCase(),
                        phoneNo: inputs["phone-number"].value.toString(),
                        address: inputs["address"].value,
                        department: inputs["dept"].value.toLowerCase()
                    }
                })
            }).then((response) => {
                console.log(response.json()); 
                window.open('http://127.0.0.1:5500/pages/LoginPage.html#');
            })
            } catch(err) {
                console.log(err);
            }
        }
    }
})