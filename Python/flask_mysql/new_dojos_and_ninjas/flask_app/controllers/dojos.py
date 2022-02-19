from flask import render_template,redirect,request,session,flash
from flask_app import app
from flask_app.models.dojo import Dojo

@app.route('/dojos')
def read_dojos():
    dojos = Dojo.get_all()
    print(dojos)
    return render_template("show_dojo.html")

