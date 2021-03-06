from flask import Flask, render_template

app = Flask(__name__)

name = "Customer Recommendation System"

@app.route("/")
@app.route("/home")
@app.route("/index")
def home():
    return render_template('index.html', title="HOME", name=name)

@app.route("/forms")
def form():
    form = Register()
    return render_template('form.html', title="FORMS", form=form)