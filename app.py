from flask import Flask, render_template, request, url_for


app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    pass
    return render_template("Index.html")

@app.route('/signup', methods=['GET', 'POST'])
def signUp():
    pass
    return render_template("SignUpPage.html")

@app.route('/login', methods=['GET', 'POST'])
def login():
    pass
    return render_template("LoginPage.html")

if __name__ == "__main__":
    app.run(debug=True)