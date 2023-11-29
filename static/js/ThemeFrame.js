app.component('theme-frame', {
    props: {
        signUp: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div id="theme-frame" class="col off-white text-center pt-6">
        <img src="../static/images/signup_pic.png" class="mt-5 mb-3 w-50" alt="OAU logo">
        <div>
            <p v-if="signUp" class="my-5 my-sm-3 fs-5 fw-sm-semibold">Join our library community and gain access to a world of knowledge!</p>
            <p v-else class="my-5 my-sm-3 fs-5 fw-sm-semibold">Nice to see you again</p>
            <h2 v-if="signUp" class="mt-3 fs-1">Signing up is quick and easy</h2>
            <h2 v-else class="mt-4 fs-1">Welcome back!</h2>
        </div>
    </div>
    `
})