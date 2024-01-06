from flask import Flask, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_PORT'] = 53755 
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'admin'
app.config['MYSQL_DB'] = 'proj_grupowy'

mysql = MySQL(app)

@app.route('/')
def index():
    try:
        with mysql.connection.cursor() as cur:
            cur.execute("SELECT * FROM Questions")
            result = cur.fetchall()
            answers = [{'question_id': row[0], 'question_text': row[1]} for row in result]
        return render_template('index.html', data=answers)
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True)
