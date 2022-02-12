from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'


@app.route('/')
def index():
    print(request.form)
    session['user_count'] = request.form['count']
    return redirect('/')



if __name__ == "__main__":
    app.run(debug=True)