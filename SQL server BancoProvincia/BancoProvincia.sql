use master;
go
create database BancoProvincia;
go
use BancoProvincia;
go
create table cliente
(
id_cliente int primary key,
primer_nombre varchar(50) not null,
segundo_nombre varchar(50) null,
primer_apellido varchar(50) not null,
segundo_apellido varchar(50) null,
apellido_casada varchar(50) null,
direccion_cliente varchar(200) not null,
celular varchar(15) not null,
telefono varchar(15) null,
edad int not null,
sexo varchar(10) not null,
fecha_registro datetime not null,
fecha_actualizacion datetime null,
movimiento char(1) not null
);

go

create table usuario
(
id_usuario int primary key,
usuario varchar(25) not null unique,
clave varchar(40) not null,
estado varchar(1) not null,
id_cliente int not null,
fecha_registro datetime not null,
fecha_actualizacion datetime null,
movimiento char(1) not null,
CONSTRAINT FK_CLIENTE_USUARIO FOREIGN KEY (id_cliente)
REFERENCES dbo.cliente(id_cliente)
);