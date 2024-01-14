<<<<<<< HEAD
from flask import Flask, jsonify
from flask_mysqldb import MySQL
import json

app = Flask(__name__)

app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_PORT'] = 52000
=======
from flask import Flask, render_template
from flask_mysqldb import MySQL
import json

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
<<<<<<< HEAD
app.config['MYSQL_PORT'] = 53755 
>>>>>>> a1f7ec8 (Added first version of the backend - app.py.)
=======
app.config['MYSQL_PORT'] = 52000
>>>>>>> fc5af36 (Added Question_Type to the response, improved code quality)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'admin'
app.config['MYSQL_DB'] = 'proj_grupowy'

mysql = MySQL(app)

<<<<<<< HEAD
def get_from_db(query, isAnswer):
    tmp_response = []
    try:
        with mysql.connection.cursor() as cur:
            cur.execute(query)
            if isAnswer:
                result = cur.fetchall()
                for answer in result:
                    if int(answer[1]) == 1:
                        tmp_response.append(answer[0])
                for answer in result:
                    if int(answer[1]) != 1:
                        tmp_response.append(answer[0]) 
            else:
                result = cur.fetchone()
                tmp_response.append(result[0])
                tmp_response.append(result[1])
        return tmp_response
    except Exception as e:
        return f"Error: {str(e)}"

@app.route('/question/<int:question_id>/', methods=['GET'])
def get_question(question_id):
    response = []
    response.extend(get_from_db(f"SELECT answer_type, question_text FROM Questions WHERE question_id = {question_id}", False))
    response.extend(get_from_db(f"SELECT answer_text, is_correct FROM Answers WHERE question_id = {question_id}", True))
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=5001)

=======
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
<<<<<<< HEAD
=======
@app.route('/question/<int:question_id>/')#, methods=['GET'])
def get_question(question_id):
    response = []
    response.extend(get_from_db(f"SELECT answer_type, question_text FROM Questions WHERE question_id = {question_id}", False))
    response.extend(get_from_db(f"SELECT answer_text, is_correct FROM Answers WHERE question_id = {question_id}", True))
    # Zapisz response do pliku JSON DO CELÓW TESTOWYCH
    with open('response.json', 'w') as json_file:
        json.dump(response, json_file, indent=2)
    return jsonify(response)
>>>>>>> fc5af36 (Added Question_Type to the response, improved code quality)

if __name__ == '__main__':
    app.run(debug=True)
>>>>>>> a1f7ec8 (Added first version of the backend - app.py.)
