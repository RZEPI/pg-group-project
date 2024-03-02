from flask import Flask, jsonify
from flask_mysqldb import MySQL
app = Flask(__name__)

app.config['MYSQL_HOST'] = 'db'
app.config['MYSQL_PORT'] = 3306
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'admin'
app.config['MYSQL_DB'] = 'proj_grupowy'

mysql = MySQL(app)

class ProperResponse:
    def __init__(self):
        self.id = None
        self.text = None
        self.type = None
        self.answers = None

class ErrorResponse:
    def __init__(self, error_message):
        self.error = error_message


def get_from_db(query, is_answer):
    tmp_response = ProperResponse()
    try:
        with mysql.connection.cursor() as cur:
            cur.execute(query)
            if is_answer:
                result = cur.fetchall()
                tmp_response.answers = []
                result = sorted(result, key=lambda x: x[1], reverse=True)
                for answer in result:
                    tmp_response.answers.append(answer[0])
            else:
                result = cur.fetchone()
                if not result:
                    return ErrorResponse("Question not found for the given index.")
                else:
                    tmp_response.type = result[0]
                    tmp_response.text = result[1]
                    tmp_response.id = result[2]
        return tmp_response
    except Exception as e:
        return ErrorResponse(str(e))


@app.route('/question/<int:question_id>/')
def get_question(question_id):
    response = get_from_db(f"SELECT answer_type, question_text, question_id FROM Questions WHERE question_id = {question_id}", False)

    if isinstance(response, ErrorResponse):
        return jsonify(response.__dict__)

    response.answers = get_from_db(f"SELECT answer_text, is_correct FROM Answers WHERE question_id = {question_id}",
                                   True).answers
    return jsonify(response.__dict__)


if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')
    