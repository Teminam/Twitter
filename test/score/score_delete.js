app.delete('/students/:studentId/scores', (req, res) => {
    const studentId = req.params.studentId;
    
    // 2. 해당 학번을 가진 학생의 정보를 검색합니다.
    const getStudentQuery = `SELECT * FROM students WHERE student_id=${studentId}`;
    connection.query(getStudentQuery, (err, results, fields) => {
    if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    } else {
        if (results.length === 0) {
        res.status(404).send('Student not found');
        } else {
        const studentName = results[0].name;
        
          // 3. 해당 학생의 성적 정보를 삭제합니다.
        const deleteScoreQuery = `DELETE FROM scores WHERE student_id=${studentId}`;
        connection.query(deleteScoreQuery, (err, results, fields) => {
            if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            } else {
            if (results.affectedRows === 0) {
                res.status(404).send('Score not found');
            } else {
                // 4. 삭제된 학생의 성적 정보를 기반으로 전체 학생의 총점, 평균을 다시 계산합니다.
                const updateScoresQuery = `UPDATE scores SET total_score = (
                SELECT SUM(score) FROM (
                    SELECT java_score AS score FROM scores WHERE student_id <> ${studentId}
                    UNION ALL
                    SELECT python_score AS score FROM scores WHERE student_id <> ${studentId}
                    UNION ALL
                    SELECT c_score AS score FROM scores WHERE student_id <> ${studentId}
                ) as all_scores
                ), average_score = (
                SELECT AVG(score) FROM (
                    SELECT java_score AS score FROM scores WHERE student_id <> ${studentId}
                    UNION ALL
                    SELECT python_score AS score FROM scores WHERE student_id <> ${studentId}
                    UNION ALL
                    SELECT c_score AS score FROM scores WHERE student_id <> ${studentId}
                ) as all_scores
                )`;
                
                // 5. 성적 정보가 업데이트 된 데이터를 데이터베이스에 저장합니다.
                connection.query('UPDATE score SET java_score=?, python_score=?, c_score=?, total_score=?, average_score=? WHERE id=?', [javaScore, pythonScore, cScore, totalScore, averageScore, scoreId], function(error, results, fields) {
                    if (error) throw error;
                
                    // 6. 결과를 성공적으로 처리했는지 확인하기 위해 응답 코드와 메시지를 반환합니다.
                    res.status(200).json({
                    code: 200,
                    message: "성적 정보가 성공적으로 업데이트되었습니다."
                    });
                });
