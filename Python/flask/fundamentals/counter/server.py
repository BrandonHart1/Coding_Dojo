from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'


@app.route('/')
def index():
    if 'user_count' != session:
        session['user_count'] = 0
    session['user_count'] += 1
    return render_template('index.html', user_count = session['user_count'])
    # return redirect ('/')???
    # needs to redrect to the original route


if __name__ == "__main__":
    app.run(debug=True)



    