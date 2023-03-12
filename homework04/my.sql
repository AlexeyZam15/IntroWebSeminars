-- create
CREATE TABLE classmates (
                            Id INTEGER PRIMARY KEY AUTO_INCREMENT,
                            name TEXT NOT NULL,
                            age INTEGER,
                            address TEXT NOT NULL
);

-- insert
INSERT INTO classmates(name, age, address) VALUES ('Алексей', '24', 'КнА');
INSERT INTO classmates(name, age, address) VALUES ('Владимир', '40', 'Москва');
INSERT INTO classmates(name, age, address) VALUES ('Виктор', '43', 'Москва');
INSERT INTO classmates(name, age, address) VALUES ('Ирина', '28', 'Москва');
INSERT INTO classmates(name, age, address) VALUES ('Ирина', '18', 'Москва');
INSERT INTO classmates(name, age, address) VALUES ('Никита', '30', 'Москва');


-- fetch
SELECT name
FROM classmates WHERE address = 'Москва' AND age >= 18 AND age < 30;