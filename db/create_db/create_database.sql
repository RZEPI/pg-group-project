DROP DATABASE group_project;
CREATE DATABASE group_project;
USE group_project;

CREATE TABLE Questions (
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    question_text TEXT CHARACTER SET utf8,
    answer_type VARCHAR(10),
	CHECK (answer_type IN ('inputText', 'trueFalse', 'choice'))    
);

CREATE TABLE Answers (
    answer_id INT AUTO_INCREMENT PRIMARY KEY,
    question_id INT,
    answer_text TEXT CHARACTER SET utf8,
    is_correct INT,
    FOREIGN KEY (question_id) REFERENCES Questions(question_id)
);

CREATE TABLE Hints (
    hint_id INT AUTO_INCREMENT PRIMARY KEY,
    question_id INT,
    hint_text TEXT CHARACTER SET utf8,
    FOREIGN KEY (question_id) REFERENCES Questions(question_id)
);



#Q1
INSERT INTO Questions (question_text, answer_type) 
VALUES ('Rolnik dostał zamówienie na 5 litrów mleka, 
mleko po wydojeniu od krowy przelewa zawsze do butelek o pojemności 
250 mililitrów, ile takich butelek musi dostarczyć zamawiającemu?', 
'choice');

SET @last_question_id = LAST_INSERT_ID();

INSERT INTO Answers (question_id, answer_text, is_correct) 
VALUES 
(@last_question_id, '10 butelek', 0), 
(@last_question_id, '20 butelek', 0), 
(@last_question_id, '15 butelek', 1);

#Q2
INSERT INTO Questions (question_text, answer_type) 
VALUES ('Pani Jadzia robi ciasto na pierogi, 
jej waga kuchenna pokazuje wagę w gramach, a ona w przepisie ma 
napisane, że potrzebuje 50 dekagramów mąki. Ile gram musi 
wskazywać waga żeby wsypać tyle mąki ile jest w przepisie?',
'inputText');

SET @last_question_id = LAST_INSERT_ID();

INSERT INTO Answers (question_id, answer_text, is_correct) 
VALUES 
(@last_question_id, '500', 1);

#Q3
INSERT INTO Questions (question_text, answer_type) 

VALUES ('Rolnik po zapakowaniu butelek mleka musi je dostarczyć klientowi, 
prowadzącemu stację benzynową. Przy dostarczeniu zamówienia Rolnik dostanie 
rabat na paliwo. Niestety jego samochód pokazuje, że zostały mu tylko 4 litry
 paliwa w samochodzie. Na mapie w skali 1:100000 jego miejscowość jest oddalona
  o 20cm, a jego samochód spala 1 litr paliwa na 10 kilometrów. Czy Rolnikowi
   uda się dojechać do klienta bez tankowania?'
   , 'trueFalse');

SET @last_question_id = LAST_INSERT_ID();

INSERT INTO Answers (question_id, answer_text, is_correct) 
VALUES 
(@last_question_id, 'Tak', 1), 
(@last_question_id, 'Nie', 0);

#Q4
INSERT INTO Questions (question_text, answer_type) 

VALUES ('Syn rolnika - Marek - wraca ze szkoły autobusem. 
Przystanek na którym czeka na autobus znajduje się 2km od wioski.
 Jednego dnia autobus uciekł Markowi. Marek wie, że długość jego
  kroku, gdy jest zmęczony, wynosi 20cm. Ile kroków wykona Marek
   dochodząc do domu na piechotę?'
   , 'inputText');

SET @last_question_id = LAST_INSERT_ID();

INSERT INTO Answers (question_id, answer_text, is_correct) 
VALUES 
(@last_question_id, '10000', 1);
