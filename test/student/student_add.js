// 필요한 모듈 import
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// express 객체 생성
const app = express();

// JSON 데이터 파싱을 위한 미들웨어 등록
app.use(bodyParser.json());

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'sungmin_test'
});

// 데이터베이스 연결
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected!');
});

// 학생 정보 추가 API 구현
app.post('/students', (req, res) => {
    // POST 요청으로 전송된 데이터 추출
    const { studentNumber, name, phoneNumber, email, address, registeredDate } = req.body;

    // INSERT 쿼리문 생성
    const sql = `INSERT INTO students (student_number, name, phone_number, email, address, registered_date) 
                VALUES ('${studentNumber}', '${name}', '${phoneNumber}', '${email}', '${address}', '${registeredDate}')`;

    // 데이터베이스 쿼리 실행
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('New student added to database!');
    });
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
