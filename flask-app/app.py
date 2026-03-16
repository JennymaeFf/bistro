from flask import Flask, render_template, request, redirect, url_for, flash, session

app = Flask(__name__,
            template_folder='templates',
            static_folder='static')

app.secret_key = "jbistro-super-secret-2025"  # change this in production!

# Temporary "database" (just a dictionary for now — later use SQLite)
users = {}  # email: password (plain text for now)

@app.route('/')
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        if email in users and users[email] == password:
            session['user'] = email
            flash('✅ Login successful! Welcome back.', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('❌ Invalid email or password. Please register if you don’t have an account.', 'error')

    return render_template('login.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')

        if not email or not password or not confirm_password:
            flash('Please fill in all fields.', 'error')
        elif password != confirm_password:
            flash('Passwords do not match. Please try again.', 'error')
        elif len(password) < 6:
            flash('Password must be at least 6 characters long.', 'error')
        elif email in users:
            flash('Email is already registered. Please try logging in.', 'error')
        else:
            users[email] = password  
            flash('Registration successful! You can now log in.', 'success')
            return redirect(url_for('login'))

    return render_template('register.html')


@app.route('/dashboard')
def dashboard():
    if 'user' not in session:
        flash('You need to log in first!', 'error')
        return redirect(url_for('login'))
    return render_template('dashboard.html')

if __name__ == '__main__':
    app.run(debug=True, port=5001)  