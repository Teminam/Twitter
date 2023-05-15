app.get('/api/students/:student_id/scores', (req, res) => {
    const studentId = req.params.student_id;
    const query = `
        SELECT students.student_id, students.name, scores.subject, scores.score
        FROM students
        JOIN scores
        ON students.student_id = scores.student_id
        WHERE students.student_id = ${studentId};
        `;
    connection.query(query, (error, results, fields) => {
        if (error) throw error;
        if (results.length > 0) {
        res.send({
            status: 'success',
            data: results
        });
        } else {
        res.send({
            status: 'fail',
            message: 'No student found with the given ID'
        });
        }
    });
    });

// 위 코드에서 app.get() 메소드의 첫 번째 인자로 /api/students/:student_id/scores를 받는 것을 볼 수 있습니다. 이는 :student_id라는 동적 라우팅을 사용하여 학번을 URL의 일부로 받는 것을 의미합니다. 예를 들어 학번이 1234인 학생의 성적을 조회하려면 /api/students/1234/scores와 같은 URL을 사용하면 됩니다.

// 쿼리문에서는 WHERE 절을 이용하여 students.student_id 필드를 동적으로 받은 studentId 변수와 비교하여 검색하도록 구현되어 있습니다. 즉, 해당 학번에 대한 학생의 성적 정보만을 가져오게 됩니다. 결과는 JSON 형태로 반환되며, data 필드 안에 학생 이름, 과목, 점수가 포함됩니다.
