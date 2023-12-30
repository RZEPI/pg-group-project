-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Dec 30, 2023 at 02:17 PM
-- Wersja serwera: 5.7.44
-- Wersja PHP: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `group_project`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Answers`
--

CREATE TABLE `Answers` (
  `answer_id` int(11) NOT NULL,
  `question_id` int(11) DEFAULT NULL,
  `answer_text` text CHARACTER SET utf8,
  `is_correct` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Answers`
--

INSERT INTO `Answers` (`answer_id`, `question_id`, `answer_text`, `is_correct`) VALUES
(1, 1, '10 butelek', b'0'),
(2, 1, '20 butelek', b'0'),
(3, 1, '15 butelek', b'1'),
(4, 2, '500', b'1'),
(5, 3, 'Tak', b'1'),
(6, 3, 'Nie', b'0'),
(7, 4, '10000', b'1');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Questions`
--

CREATE TABLE `Questions` (
  `question_id` int(11) NOT NULL,
  `question_text` text CHARACTER SET utf8
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Questions`
--

INSERT INTO `Questions` (`question_id`, `question_text`) VALUES
(1, 'Rolnik dostał zamówienie na 5 litrów mleka, \r\nmleko po wydojeniu od krowy przelewa zawsze do butelek o pojemności \r\n250 mililitrów, ile takich butelek musi dostarczyć zamawiającemu?'),
(2, 'Pani Jadzia robi ciasto na pierogi, \r\njej waga kuchenna pokazuje wagę w gramach, a ona w przepisie ma \r\nnapisane, że potrzebuje 50 dekagramów mąki. Ile gram musi \r\nwskazywać waga żeby wsypać tyle mąki ile jest w przepisie?'),
(3, 'Rolnik po zapakowaniu butelek mleka musi je dostarczyć klientowi, \r\nprowadzącemu stację benzynową. Przy dostarczeniu zamówienia Rolnik dostanie \r\nrabat na paliwo. Niestety jego samochód pokazuje, że zostały mu tylko 4 litry\r\n paliwa w samochodzie. Na mapie w skali 1:100000 jego miejscowość jest oddalona\r\n  o 20cm, a jego samochód spala 1 litr paliwa na 10 kilometrów. Czy Rolnikowi\r\n   uda się dojechać do klienta bez tankowania?'),
(4, 'Syn rolnika - Marek - wraca ze szkoły autobusem. \r\nPrzystanek na którym czeka na autobus znajduje się 2km od wioski.\r\n Jednego dnia autobus uciekł Markowi. Marek wie, że długość jego\r\n  kroku, gdy jest zmęczony, wynosi 20cm. Ile kroków wykona Marek\r\n   dochodząc do domu na piechotę?\r\n');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `Answers`
--
ALTER TABLE `Answers`
  ADD PRIMARY KEY (`answer_id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indeksy dla tabeli `Questions`
--
ALTER TABLE `Questions`
  ADD PRIMARY KEY (`question_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Answers`
--
ALTER TABLE `Answers`
  MODIFY `answer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Questions`
--
ALTER TABLE `Questions`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Answers`
--
ALTER TABLE `Answers`
  ADD CONSTRAINT `Answers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `Questions` (`question_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
