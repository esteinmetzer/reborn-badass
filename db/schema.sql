DROP DATABASE IF EXISTS vendors_db;

CREATE DATABASE vendors_db;
USE vendors_db;
CREATE TABLE supplier (
supplier_id INT AUTO_INCREMENT,
supplier_name VARCHAR(255),
address VARCHAR(255),
PRIMARY KEY(supplier_id)
);

CREATE TABLE item (
item_id INT AUTO_INCREMENT,
item_name VARCHAR(255),
description VARCHAR(255),
supplier_id INT,
units_pllt INT,
prj_units INT,
PRIMARY KEY(item_id)
);
