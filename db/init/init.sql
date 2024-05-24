START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `Questions` (
  `question_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `question_text` text CHARACTER SET utf8,
  `class` int(11),
  `hint` text CHARACTER SET utf8,
  `img_url` text CHARACTER SET utf8,
  `answer_type` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Answers` (
  `answer_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `question_id` int(11) DEFAULT NULL,
  `answer_text` text CHARACTER SET utf8,
  `is_correct` int(11) DEFAULT NULL,
  FOREIGN KEY (question_id) REFERENCES `Questions` (`question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

COMMIT;