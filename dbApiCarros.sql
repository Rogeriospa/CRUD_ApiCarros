create database dbApiCarros;

use dbApiCarros;

create table carros (
codigo int primary key auto_increment,
modelo varchar(30),
placa varchar(7)
);

insert into carros (modelo, placa) values ('Toyota Corolla', 'EM04929');
insert into carros (modelo, placa) values ('Honda Civic', 'ELV1590');