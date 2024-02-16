create table user(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstname varchar(50),
    lastname varchar(50),
    birth_date Date,
    email varchar(50),
    hashedpassword varchar(50),
    phone_number varchar(10),
    address varchar(50),
    postal_code varchar(50),
    city varchar(150),
    country varchar(50)
);

 INSERT INTO user (firstname, lastname, birth_date, email, password, phone_number, address, postal_code, city, country)
VALUES
    ( 'Jean', 'Dupont', '1980-03-12', 'jean.dupont@example.com', 'motdepasse1', '0612345678', '12 Rue de la République', '75001', 'Paris', 'France'),
    ('Marie', 'Martin', '1985-08-22', 'marie.martin@email.com', 'motdepasse2', '0987654321', '456 Avenue des Roses', '69002', 'Lyon', 'France'),
    ('Pierre', 'Lefevre', '1993-02-10', 'pierre.lefevre@email.com', 'motdepasse3', '0654321098', '789 Boulevard du Soleil', '31000', 'Toulouse', 'France'),
    ('Sophie', 'Robert', '1980-11-28', 'sophie.robert@email.com', 'motdepasse4', '0231547698', '101 Rue de beavisage', '44000', 'Nantes', 'France'),
    ('Thomas', 'Dubois', '1998-09-03', 'thomas.dubois@email.com', 'motdepasse5', '0765432189', '202 Chemin de la Paix', '33000', 'Bordeaux', 'France'),
 ('Emma', 'Garcia', '1995-04-20', 'emma.garcia@email.com', 'motdepasse6', '0345678901', '567 Avenue de la Joie', '13001', 'Marseille', 'France'),
    ('Louis', 'Fournier', '1987-07-12', 'louis.fournier@email.com', 'motdepasse7', '0789012345', '890 Boulevard de saul santé', '69003', 'Lyon', 'France'),
    ('Camille', 'Dumas', '1992-01-05', 'camille.dumas@email.com', 'motdepasse8', '0123456789', '123 Rue de la lune', '75002', 'Paris', 'France'),
    ('Hugo', 'Bertrand', '1983-10-15', 'hugo.bertrand@email.com', 'motdepasse9', '0567890123', '456 Avenue du Bonheur', '59000', 'Lille', 'France'),
    ('Chloé', 'Moreau', '1996-08-28', 'chloe.moreau@email.com', 'motdepasse10', '0890123456', '789 Rue de la Sérénité', '69004', 'Lyon', 'France');



CREATE TABLE booking (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    booking_date DATE,
    cancellation_insurance BOOLEAN,
    id_payment INT,
    id_user INT,
    id_travel INT,
    id_period INT,
    id_travel_period INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_booking_payment FOREIGN KEY (id_payment) REFERENCES payment(id),
    CONSTRAINT fk_booking_user FOREIGN KEY (id_user) REFERENCES user(id),
    CONSTRAINT fk_booking_travel FOREIGN KEY (id_travel) REFERENCES travel(id),
    CONSTRAINT fk_booking_period FOREIGN KEY (id_period) REFERENCES period(id),
    CONSTRAINT fk_booking_travel_period FOREIGN KEY (id_travel_period) REFERENCES travel_period(id)
);


INSERT INTO booking (booking_date, cancellation_insurance, id_payment, id_user, id_travel)
VALUES
('2024-02-14', true, 1, 1, 1),
('2024-02-15', false, 2, 2, 2),
('2024-02-16', true, 3, 3, 3),
('2024-02-17', false, 4, 4, 4),
('2024-02-18', true, 5, 5, 5),
('2024-02-19', false, 6, 6, 6),
('2024-02-20', true, 7, 7, 7),
('2024-02-21', false, 8, 8, 8),
('2024-02-22', true, 9, 9, 9),
('2024-02-23', false, 10, 10, 10);

create table travel(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    destination_name varchar(50),
    destination_description varchar(250),
    nb_of_total_seats INT
);

INSERT INTO travel (destination_name, destination_description, nb_of_total_seats)
VALUES
('Paris Trip', 'Explore the beautiful city of Paris with its iconic landmarks.', 50),
('Marseille Adventure', 'Discover the cultural richness of Marseille and its vibrant atmosphere.', 40),
('Alps Excursion', 'Experience the breathtaking beauty of the Alps with this mountain adventure.', 30),
('Côte d\'Azur Getaway', 'Relax on the stunning beaches of the French Riviera.', 60),
('Bordeaux Wine Tour', 'Indulge in the world-renowned wines of Bordeaux on this exquisite tour.', 35),
('Lyon Culinary Experience', 'Savor the flavors of Lyon, the gastronomic capital of France.', 45),
('Normandy Historical Tour', 'Immerse yourself in the rich history of Normandy and its historic landmarks.', 25),
('Strasbourg Christmas Market', 'Enjoy the festive atmosphere of Strasbourg\'s famous Christmas market.', 55),
('Provence Lavender Fields', 'Wander through the picturesque lavender fields of Provence.', 20),
('French Riviera Yachting', 'Luxuriate in the glamour of the French Riviera with a private yachting experience.', 15);


create table payment(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    payment_date Date,
    unit_price DECIMAL(10,2),
    quantity TINYINT CHECK (quantity > 0 AND quantity <= 10);
);

SELECT 
    id,
    payment_date
    unit_price,
    quantity,
    unit_price * quantity AS product
FROM 
    payment;

INSERT INTO payment (payment_date, unit_price, quantity)
VALUES
('2024-02-14', 120.00, 3),
('2024-02-15', 120.00, 2),
('2024-02-16', 120.00, 1),
('2024-02-17', 400.75, 2),
('2024-02-18', 225.99, 4),
('2024-02-19', 180.85, 1),
('2024-02-20', 100.00, 9),
('2024-02-21', 160.45, 3),
('2024-02-22', 130.20, 1),
('2024-02-23', 220.75, 2);

create table period(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    date_departure Date,
    date_return Date,
    duration_stay INT,
    price DECIMAL(10,2) NOT NULL
);

INSERT INTO period (date_departure, date_return, duration_stay, price)
VALUES
('2024-03-01', '2024-03-07', 6, 800.00),
('2024-04-10', '2024-04-15', 5, 600.50),
('2024-05-20', '2024-05-27', 7, 1200.75),
('2024-06-15', '2024-06-20', 5, 900.30),
('2024-07-05', '2024-07-12', 7, 1500.00),
('2024-08-10', '2024-08-16', 6, 1100.50),
('2024-09-18', '2024-09-25', 7, 1300.25),
('2024-10-12', '2024-10-18', 6, 1000.75),
('2024-11-22', '2024-11-28', 6, 950.20),
('2024-12-05', '2024-12-12', 7, 1400.00);

create table travel_period(
     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_travel INT,
    CONSTRAINT fk_travel_period FOREIGN KEY (id_travel) REFERENCES travel(id),
    id_period INT,
    CONSTRAINT fk_period_travel FOREIGN KEY (id_period) REFERENCES period(id),
    type_transport varchar(50)
);
 
INSERT INTO travel_period (id_travel, id_period, type_transport)
VALUES
(1, 1, 'Train'),
(2, 2, 'Bus'),
(3, 3, 'Flight'),
(4, 4, 'Car'),
(5, 5, 'Flight'),
(6, 6, 'Train'),
(7, 7, 'Bus'),
(8, 8, 'Flight'),
(9, 9, 'Car'),
(10, 10, 'Train');

/*jointure booking*/
SELECT
    booking.id AS booking_id,
    booking.booking_date,
    booking.cancellation_insurance,
    user.id AS user_id,
    user.firstname,
    user.lastname,
    user.birth_date,
    user.email,
    user.phone_number,
    user.address,
    user.postal_code,
    user.city,
    user.country,
    travel.id AS travel_id,
    travel.destination_name,
    travel.destination_description,
    travel.nb_of_total_seats,
    payment.id AS payment_id,
    payment.payment_date,
    payment.sum
FROM
    b
SELECT
    booking.id AS booking_id,
    booking.booking_date,
    booking.cancellation_insurance,
    user.id AS user_id,
    user.firstname,
    user.lastname,
    user.birth_date,
    user.email,
    user.phone_number,
    user.address,
    user.postal_code,
    user.city,
    user.country,
    travel.id AS travel_id,
    travel.destination_name,
    travel.destination_description,
    travel.nb_of_total_seats,
    payment.id AS payment_id,
    payment.payment_date,
    payment.sum
FROM
booking
INNER JOIN user ON booking.id_user = user.id
INNER JOIN travel ON booking.id_travel = travel.id
INNER JOIN payment ON booking.id_payment = payment.id;


SELECT 
    id,
    payment_date
    unit_price,
    quantity,
    unit_price * quantity AS product
FROM 
    payment;

    SELECT
    booking.id AS booking_id,
    booking.booking_date,
    user.id AS user_id,
    user.lastname,
    user.firstname,
    travel.id AS travel_id,
    travel.destination_name,
    payment.id AS payment_id,
    payment.payment_date,
    payment.price * payment.quantity AS total_price
FROM
booking
INNER JOIN user ON booking.id_user = user.id
INNER JOIN travel ON booking.id_travel = travel.id
INNER JOIN payment ON booking.id_payment = payment.id;