START TRANSACTION;

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL
);

CREATE TABLE `notes` (
  `note_id` int PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `body` text,
  `last_updated` datetime DEFAULT (now())
);

CREATE TABLE `share` (
  `share_id` int PRIMARY KEY,
  `note_id` int
);

ALTER TABLE `share` ADD FOREIGN KEY (`note_id`) REFERENCES `notes` (`note_id`);

COMMIT;
