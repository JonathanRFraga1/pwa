use forca;

create table if not exists users(
  id INT(8) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nickname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
) AUTO_INCREMENT = 1;

-- insert into users (nickname, email, senha) values('admin', 'admin@gmail.com', 'admin');

select * from users;