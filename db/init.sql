CREATE DATABASE IF NOT EXISTS test;
USE test;
CREATE TABLE IF NOT EXISTS Dogs(
    `id` int NOT NULL AUTO_INCREMENT,
    `image` blob NOT NULL,
    PRIMARY KEY (`id`)
);
-- Only insert the images if the table is empty
INSERT INTO Dogs (`image`)
SELECT *
FROM (
        SELECT LOAD_FILE('/var/lib/mysql-files/dogs/1.jpeg')
        UNION
        SELECT LOAD_FILE('/var/lib/mysql-files/dogs/2.jpeg')
        UNION
        SELECT LOAD_FILE('/var/lib/mysql-files/dogs/3.jpeg')
        UNION
        SELECT LOAD_FILE('/var/lib/mysql-files/dogs/4.jpeg')
        UNION
        SELECT LOAD_FILE('/var/lib/mysql-files/dogs/5.jpeg')
    ) T
WHERE NOT EXISTS (
        SELECT *
        FROM Dogs
    );