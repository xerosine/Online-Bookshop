app.component('login-form', {
    props: {
        role: {
            type: String,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <div id="login-form" class="col">
        <div class="my-5 mx-1 pt-4 col-10 mx-sm-auto">
            <!--<div class="my-5 fs-sm-5 fw-semibold">
                <a href="javascript:void(0)" class="login-page-link text-dark ms-2 me-5">Student</a>
                <a href="javascript:void(0)" class="login-page-link">Staff</a>
            </div>-->
            <h2 class="ps-2 mt-5 mb-4">Login</h2>
            <form id="form-login" class="container-fluid fw-semibold needs-validation" 
            action="/" method="post" @submit="submitLogin">
                <div class="col mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" type="email" 
                    class="form-control form-control-sm off-white" name="email"
                    placeholder="Enter your email" required>
                    <div class="form-text"></div>
                </div>
                <div class="col mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" type="password" class="form-control form-control-sm off-white" 
                    placeholder="Password" name="password" required>
                    <div class="form-text"></div>
                </div>
                <div class="col mb-4 form-extra">
                    <div class="form-check form-check-inline login-page-link pe-0 d-sm-inline d-block">
                        <input id="remember-me" type="checkbox" class="form-check-input" value="">
                        <label for="remember-me">Remember me</label>
                    </div>
                    <a id="forgot-pass" class="login-page-link text-end" href="javascript:void(0)">Forgot Password?</a>
                </div>
                <div class="col-8 col-sm-5 text-center mx-auto mb-4">
                    <input id="login-btn" type="submit" class="btn btn-dark w-100" value="Login">
                </div>
                <div class="col-10 text-center mx-auto smaller">Don't have an account?
                    <a class="link text-primary" href="/signup">Click here</a>
                </div>
            </form>
        </div>
    </div>
    `,
    methods: {
        submitLogin(event) {
            // event.preventDefault();
            // const inputs = document.getElementById('form-login').elements;
            // try {
            // fetch('https://xyedvqcuefnbboegrzwa.supabase.co/auth/v1/token?grant_type=password', {
            //     method: 'POST',
            //     headers: {
            //         apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5ZWR2cWN1ZWZuYmJvZWdyendhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjkzNTUyOCwiZXhwIjoyMDAyNTExNTI4fQ.dGcUljOSIuP6JsEmRTZJy1YPnjrsBf9NjzFcKLB5dyI",
            //         "Content-Type": "application/JSON"
            //     },
            //     body: JSON.stringify({
            //         email: inputs["email"].value,
            //         password: inputs["password"].value,
            //     })
            // }).then((response) => response.json())
            // .then((result) => {
            //     console.log(result.user.user_metadata); 
            //     window.open('http://127.0.0.1:5500/Home.html#', '_self');})
            // } catch(err) {
            //     console.log(err);
            // }
        }
    }
})