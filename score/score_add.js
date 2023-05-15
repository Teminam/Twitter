// 1. MySQL과 Node.js를 사용하여 데이터베이스 연결을 설정합니다.
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'suntmin_test'
});

// 2. 쿼리문을 작성하여 학생 정보와 성적 정보를 join한 결과를 가져옵니다.
const getStudentScores = (callback) => {
    const query = `
    SELECT * FROM 성적테이블
    JOIN 학생테이블 ON 성적테이블.학번 = 학생테이블.학번
    `;
    connection.query(query, (error, results) => {
    if (error) {
        throw error;
    } else {
        callback(results);
    }
    });
};

// 3. 학생 정보와 성적 정보를 join한 결과에서 평균 점수를 계산하여 새로운 필드로 추가합니다.
const calculateAverageScore = (studentScores) => {
    return studentScores.map((studentScore) => {
    const { 자바점수, 파이썬점수, C언어점수 } = studentScore;
    const 총점 = 자바점수 + 파이썬점수 + C언어점수;
    const 평균 = 총점 / 3;
    return {
        ...studentScore,
        총점,
        평균
    };
    });
};

// 4. 계산된 평균 점수를 기준으로 내림차순으로 정렬합니다.
const sortStudentScores = (studentScores) => {
    return studentScores.sort((a, b) => {
    if (a.평균 === b.평균) {
        return b.학번 - a.학번;
    } else {
        return b.평균 - a.평균;
    }
    });
};

// 5. 등록된 학생의 전체 수와 해당 학생의 석차를 계산하여 출력합니다.
const calculateRank = (studentScores) => {
    const sortedScores = sortStudentScores(studentScores);
    const rankedScores = sortedScores.map((score, index) => {
    return {
        ...score,
        순위: index + 1
    };
    });
    return rankedScores;
};

// 6. 학생 점수를 등록하는 API 코드입니다.
const addStudentScore = (학번, 자바점수, 파이썬점수, C언어점수) => {
    const query = `
        INSERT INTO 성적테이블 (학번, 자바점수, 파이썬점수, C언어점수, 등록된날짜)
        VALUES ('${학번}', ${자바점수}, ${파이썬점수}, ${C언어점수}, NOW())
    `;
    connection.query(sql, [student_id, java_score, python_score, c_score, total_score, avg_score], (err, result) => {
        if (err) throw err;
        console.log('Score added successfully');
        res.sendStatus(200);
        });
    };