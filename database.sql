drop database if exists crud;
create database crud;

use crud;

create table user(
    id int unsigned not null primary key auto_increment,
    email varchar(100) not null unique,
    password varchar(100) not null
);

insert into user (email, password) values
    ("jdoe@mail.com", "123456");
