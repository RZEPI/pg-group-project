from flask import Flask, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'db'
app.config['MYSQL_PORT'] = 3306
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'admin'
app.config['MYSQL_DB'] = 'proj_grupowy'

mysql = MySQL(app)


class SingleQuestionResponse:
    def __init__(self):
        self.id = None
        self.title = None
        self.text = None
        self.class_level = None
        self.hint = None
        self.img_url = None
        self.type = None
        self.answers = None


class Question:
    def __init__(self, title, question_id):
        self.title = title
        self.id = question_id


class QuestionsResponse:
    def __init__(self):
        self.questions = []


class ErrorResponse:
    def __init__(self, error_message):
        self.error = error_message


def create_question_response(result):
    tmp_response = SingleQuestionResponse()
    tmp_response.type = result[0]
    tmp_response.text = result[1]
    tmp_response.title = result[2]
    tmp_response.class_level = result[3]
    tmp_response.hint = result[4]
    tmp_response.img_url = f"/images/{result[5]}.svg"
    return tmp_response


def get_question_from_db(query, params, is_answer):
    try:
        with mysql.connection.cursor() as cur:
            cur.execute(query, params)
            if is_answer:
                result = cur.fetchall()
                answers = [answer[0] for answer in sorted(result, key=lambda x: x[1], reverse=True)]
                return answers
            else:
                result = cur.fetchone()
                if not result:
                    return ErrorResponse("Question not found for the given index.")
                return create_question_response(result)
    except Exception as e:
        return ErrorResponse(str(e))


def get_questions_from_db(query, params):
    questions_response = QuestionsResponse()
    try:
        with mysql.connection.cursor() as cur:
            cur.execute(query, params)
            results = cur.fetchall()
            if not results:
                return ErrorResponse("Questions not found for the given class.")
            for row in results:
                question = Question(title=row[0], question_id=row[1])
                questions_response.questions.append(question)
        return questions_response
    except Exception as e:
        return ErrorResponse(str(e))


@app.route('/questions/<int:question_id>/')
def get_question(question_id):
    question_query = "SELECT answer_type, question_text, question_title, class, hint, img_url\
    FROM Questions WHERE question_id = %s"
    response = get_question_from_db(question_query, (question_id,), False)

    if isinstance(response, ErrorResponse):
        return jsonify(response.__dict__)

    answer_query = "SELECT answer_text, is_correct FROM Answers WHERE question_title = %s"
    response.answers = get_question_from_db(answer_query, (response.title,), True)
    return jsonify(response.__dict__)


@app.route('/<int:class_level>/questions/')
def get_questions_by_class_level(class_level):
    question_query = "SELECT question_title, question_id FROM Questions WHERE class = %s"
    response = get_questions_from_db(question_query, (class_level,))

    if isinstance(response, ErrorResponse):
        return jsonify(response.__dict__)

    questions = [{'title': question.title, 'id': question.id} for question in response.questions]
    return jsonify(questions)


if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')
