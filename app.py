from flask import Flask, render_template, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_PORT'] = 52635        # must be adjusted with every Docker run
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
            questions = [{'question_id': row[0], 'question_text': row[1]} for row in result]
        return render_template('index.html', data=questions)
    except Exception as e:
        return f"Error: {str(e)}"

@app.route('/question/<int:question_id>/')#, methods=['GET'])
def question(question_id):
    response = []
    try:
        with mysql.connection.cursor() as cur:
            # Question
            cur.execute("SELECT question_text FROM Questions WHERE question_id = %s", (question_id,))
            question = cur.fetchone()
            response.append(question[0])
            # Answers
            cur.execute("SELECT answer_text, is_correct FROM Answers WHERE question_id = %s", (question_id,))
            answers_result = cur.fetchall()
            for answer in answers_result:
                if int(answer[1]) == 1:
                    response.append(answer[0])
            for answer in answers_result:
                if int(answer[1]) != 1:
                    response.append(answer[0])     
        # IN response WE HAVE: question, correct answer, wrong answers     
        return render_template('question.html', data=response)
    except Exception as e:
        return f"Error: {str(e)}"
    
if __name__ == '__main__':
    app.run(debug=True)
