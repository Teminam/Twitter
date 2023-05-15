const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
// 먼저 mysql 모듈과 express 모듈을 불러옵니다. 그리고 MySQL 데이터베이스에 연결하기 위한 connection 객체를 생성합니다.

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'sungmin_test',
});

// DELETE method route
app.delete('/api/students/:id', (req, res) => {
    const studentId = req.params.id;
    const sql = 'DELETE FROM students WHERE id = ?';
// DELETE 메소드를 사용하기 위해 app.delete() 메소드를 사용합니다. 학생 정보를 삭제하기 위해 /api/students/:id 엔드포인트를 만듭니다. 이 엔드포인트에서는 요청 URL의 id 매개변수로부터 해당하는 학생의 id 값을 가져옵니다.

    connection.query(sql, [studentId], (err, result) => {
    if (err) throw err;
//  DELETE 쿼리문을 작성합니다. students 테이블에서 id가 매개변수로 받은 studentId와 일치하는 학생 정보를 삭제하는 쿼리입니다. 이 쿼리를 connection.query() 메소드로 실행하면 해당하는 학생 정보를 삭제합니다.

    console.log(`Deleted ${result.affectedRows} row(s)`);
    res.send(`Deleted ${result.affectedRows} row(s)`);
    });
// 쿼리 실행 후, result.affectedRows를 통해 영향 받은 레코드 수를 확인하고, 클라이언트에게 응답으로 삭제한 레코드 수를 전송합니다.
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// 마지막으로 app.listen() 메소드로 서버를 실행시킵니다.