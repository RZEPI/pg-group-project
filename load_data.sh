#!/bin/bash

# Dane logowania do MySQL
MYSQL_USER=root
MYSQL_PASSWORD=admin
MYSQL_DATABASE=proj_grupowy
MYSQL_CONTAINER=db

# Ścieżki do plików CSV w kontenerze
QUESTIONS_CSV=/tmp/questions.csv
ANSWERS_CSV=/tmp/answers.csv

# Kopiowanie plików CSV do kontenera MySQL
docker cp ./db/data/questions.csv ${MYSQL_CONTAINER}:${QUESTIONS_CSV}
docker cp ./db/data/answers.csv ${MYSQL_CONTAINER}:${ANSWERS_CSV}

# Ładowanie danych z plików CSV do tabel
docker-compose exec ${MYSQL_CONTAINER} mysql -u ${MYSQL_USER} -p${MYSQL_PASSWORD} ${MYSQL_DATABASE} -e "
    LOAD DATA INFILE '${QUESTIONS_CSV}'
    INTO TABLE Questions
    CHARACTER SET utf8mb4
    FIELDS TERMINATED BY ','
    ENCLOSED BY '\"'
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS
    (question_title, question_text, class, hint, img_url, answer_type);

    LOAD DATA INFILE '${ANSWERS_CSV}'
    INTO TABLE Answers
    CHARACTER SET utf8mb4
    FIELDS TERMINATED BY ','
    ENCLOSED BY '\"'
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS
    (question_title, answer_text, is_correct);
"
# Usuwanie plików CSV z kontenera MySQL
docker exec ${MYSQL_CONTAINER} rm .${QUESTIONS_CSV} .${ANSWERS_CSV}
