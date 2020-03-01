from flask import Flask, render_template
from forms import Register

app = Flask(__name__)

name = "Shivendra Saurav"

@app.route("/")
def home():
    return render_template('new.html', title="HOME", name=name)

@app.route("/forms")
def form():
    form = Register()
    return render_template('form.html', title="FORMS", form=form)