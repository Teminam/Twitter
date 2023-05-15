// 1. MySQL과 Node.js를 사용하여 데이터베이스 연결을 설정합니다.
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'sungmin_test'
});

// 2. PUT 요청을 처리하는 코드를 작성합니다.
app.put('/students/:id/score', (req, res) => {
    const student_id = req.params.id;
    const score = req.body.score;

  // 3. 기존 학생 정보와 성적 정보를 JOIN하여 해당 학생의 총점과 평균을 계산합니다.
    const query1 = `
    SELECT students.*, SUM(scores.score) AS total_score, AVG(scores.score) AS avg_score 
    FROM students 
    JOIN scores ON students.id = scores.student_id 
    WHERE students.id = ${student_id}
    `;

    connection.query(query1, (error, results, fields) => {
    if (error) throw error;
    
    const student = results[0];
    const total_score = student.total_score - student.score + score;
    const avg_score = total_score / (student.num_scores - 1);
    
    // 4. 수정된 점수를 적용하여 다시 총점과 평균을 계산합니다.
    const query2 = `
        UPDATE scores 
        SET score = ${score} 
        WHERE student_id = ${student_id}
    `;
    
    connection.query(query2, (error, results, fields) => {
        if (error) throw error;
        
        const query3 = `
        UPDATE students 
        SET score = ${score}, total_score = ${total_score}, avg_score = ${avg_score}
        WHERE id = ${student_id}
    `;
    
      // 5. 총점과 평균을 수정하여 DB에 저장합니다.
    connection.query(query3, (error, results, fields) => {
        if (error) throw error;
        
        res.send('성적이 수정되었습니다.');
    });
    });
});
});

// 위 코드에서는 먼저 학생 정보와 성적 정보를 JOIN하여 해당 학생의 총점과 평균을 계산합니다. 
// 이후 수정된 점수를 적용하여 다시 총점과 평균을 계산한 후 DB에 저장합니다. 
// 마지막으로 API 요청에 대한 응답으로 '성적이 수정되었습니다.' 메시지를 반환합니다.