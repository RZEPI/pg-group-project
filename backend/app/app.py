from flask import Flask, jsonify, abort
from flask_mysqldb import MySQL
from flask_cors import CORS

from random import choice
import queries

app = Flask(__name__)
CORS(app)

app.config["MYSQL_HOST"] = "db"
app.config["MYSQL_PORT"] = 3306
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "admin"
app.config["MYSQL_DB"] = "proj_grupowy"

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
        self.next_question_id = None


class Question:
    def __init__(self, title, question_id):
        self.title = title
        self.id = question_id


class QuestionsResponse:
    def __init__(self):
        self.questions = []



def create_question_response(query_result):
    tmp_response = SingleQuestionResponse()
    tmp_response.id = query_result[0]
    tmp_response.type = query_result[1]
    tmp_response.text = query_result[2]
    tmp_response.title = query_result[3]
    tmp_response.class_level = query_result[4]
    tmp_response.hint = query_result[5]
    tmp_response.img_url = f"/images/{query_result[6]}.svg"

    return tmp_response


def parse_answers(answers):
    parsed_answers = []
    for answer, is_correct in answers:
        if is_correct:
            parsed_answers = [answer] + parsed_answers
        else:
            parsed_answers.append(answer)
    return parsed_answers


def connect_to_database(wrapped_function):
    def wrapper(*args, **kwargs):
        try:
            with mysql.connection.cursor() as cur:
                return wrapped_function(cur, *args, **kwargs)
        except Exception as e:
            print(e)
            abort(404, description=str(e))

    return wrapper


def fetch_query(cursor, query, params, multiple_recods=False):
    fetching_function = cursor.fetchall if multiple_recods else cursor.fetchone

    cursor.execute(query, params)
    fetching_result = fetching_function()

    if not fetching_result:
        raise Exception("No records found.")
    
    return fetching_result


@connect_to_database
def get_question_from_db(cursor, question_id, is_first=False):
    query = queries.FIRST_QUESTION_QUERY if is_first else queries.QUESTION_QUERY

    question_data = fetch_query(
        cursor,
        query,
        (question_id,),
    )
    
    question = create_question_response(question_data)
    question.next_question_id = fetch_query(
        cursor,
        queries.NEXT_QUESTION_ID_QUERY,
        (question_id, question.class_level),
    )[0]
    answers = fetch_query(cursor, queries.ANSWERS_QUERY, (question.title,), True)
    question.answers = parse_answers(answers)
    return question


@connect_to_database
def get_all_questions_from_db(cursor, class_level):
    questions = fetch_query(cursor, queries.ALL_QUESTIONS_QUERY, (class_level,), True)
    parsed_questions = QuestionsResponse()
    for question in questions:
        parsed_question = Question(question[0], question[1])
        parsed_questions.questions.append(parsed_question.__dict__)

    return parsed_questions


@app.route("/questions/<int:question_id>/")
def get_question(question_id):
    response = get_question_from_db(question_id)

    return jsonify(response.__dict__)


@app.route("/<int:class_level>/questions/")
def get_questions_by_class_level(class_level):
    response = get_all_questions_from_db(class_level)

    return jsonify(response.__dict__)


@app.route("/<int:class_level>/question/random")
def get_random_question(class_level):
    response = get_all_questions_from_db(class_level)
    random_question = choice(response.questions)
    response = get_question_from_db(random_question["id"])

    return jsonify(response.__dict__)


@app.route("/<int:class_level>/questions/first")
def get_first_question(class_level):
    response = get_question_from_db(class_level, True)

    return jsonify(response.__dict__)


if __name__ == "__main__":
    app.run(debug=True, port=5001, host="0.0.0.0")
