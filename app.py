from flask import Flask, render_template, request, url_for


app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    pass
    return render_template("Index.html")

if __name__ == "__main__":
    app.run(debug=True)