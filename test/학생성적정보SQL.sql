create database sungmin_test;
use sungmin_test;

CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  student_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  phone_number TEXT,
  email TEXT,
  address TEXT,
  registered_date DATE
);

CREATE TABLE scores (
  id INTEGER PRIMARY KEY,
  java_score INTEGER,
  python_score INTEGER,
  c_score INTEGER,
  registered_date DATE,
  total_score INTEGER,
  average_score FLOAT,
  FOREIGN KEY (id) REFERENCES students (id)
);

SELECT students.id, students.student_id, students.user_name, students.phone_number, students.email, students.address, students.registered_date,
 scores.java_score, scores.python_score, scores.c_score, scores.registered_date 
FROM scores 
INNER JOIN scores ON students.student_id = scores.student_id;


insert into students(id, student_id, user_name, phone_number, email, address, registered_date) values ('1', '202301', '김사과', '010-1111-1111', 'apple@apple.com', '경기도 고양시', '2023-03-01');
insert into students(id, student_id, user_name, phone_number, email, address, registered_date) values ('2', '202302', '반하나', '010-2222-2222',  'banana@banana.com', '경기도 성남시', '2023-03-02');
insert into students(id, student_id, user_name, phone_number, email, address, registered_date) values ('3', '202303', '오렌지', '010-3333-3333',  'orange@orange.com', '일산동구 마두동', '2023-03-03');
insert into students(id, student_id, user_name, phone_number, email, address, registered_date) values ('4', '202304', '이메론', '010-4444-4444',  'melon@melon.com', '서울시 서초구', '2023-03-04');
insert into students(id, student_id, user_name, phone_number, email, address, registered_date) values ('5', '202305', '표도르', '010-5555-5555',  'grapes@grapes.com', '서울시 마포구', '2023-03-05');

insert into scores(id, java_score, python_score, c_score, registered_date, total_score, average_score) values ('1', '100', '100', '100', '2023-03-01', '300', '100');
insert into scores(id, java_score, python_score, c_score, registered_date, total_score, average_score) values ('2', '90', '90', '90', '2023-03-02', '270', '90');
insert into scores(id, java_score, python_score, c_score, registered_date, total_score, average_score) values ('3', '80', '80', '80', '2023-03-03', '240', '80');
insert into scores(id, java_score, python_score, c_score, registered_date, total_score, average_score) values ('4', '70', '70', '70', '2023-03-04', '210', '70');
insert into scores(id, java_score, python_score, c_score, registered_date, total_score, average_score) values ('5', '60', '60', '60', '2023-03-05', '180', '60');


select * from students;
select * from scores;

desc students;
desc scores;