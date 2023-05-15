const calculateAverage = (javaScore, pythonScore, cScore) => {
    const totalScore = javaScore + pythonScore + cScore;
    const averageScore = totalScore / 3;
    return averageScore.toFixed(2); // 소수점 둘째자리까지 반올림
    }

  // 예시: 성적 정보에서 각 학생의 평균 점수를 계산
    const studentScores = [
    { student_id: 1, java_score: 80, python_score: 75, c_score: 85 },
    { student_id: 2, java_score: 90, python_score: 85, c_score: 80 },
    { student_id: 3, java_score: 70, python_score: 80, c_score: 90 }
    ];

    const studentScoresWithAverage = studentScores.map(score => {
    const averageScore = calculateAverage(score.java_score, score.python_score, score.c_score);
    return {
        student_id: score.student_id,
        java_score: score.java_score,
        python_score: score.python_score,
        c_score: score.c_score,
        average_score: averageScore
    };
    });
    console.log(studentScoresWithAverage);

    // 위 코드에서 calculateAverage 함수는 각 학생의 평균 점수를 계산하는 함수입니다. 
    // 이 함수를 이용하여 studentScores 배열에서 각 학생의 평균 점수를 계산하고, studentScoresWithAverage 배열에 각 학생의 정보와 함께 추가합니다. 
    // 최종적으로 studentScoresWithAverage 배열을 출력합니다.

    const sortByAverageDesc = (students) => {
        return students.sort((a, b) => {
            return b.average - a.average;
        });
    };
    
    const sortedStudents = sortByAverageDesc(studentsWithScore);
    console.log(sortedStudents);
    
// 위의 코드는 계산된 평균 점수를 기준으로 내림차순으로 정렬하는 코드입니다. 
// studentsWithScore 배열은 join을 통해 학생 정보와 성적 정보가 합쳐진 결과입니다. 
// sortByAverageDesc 함수는 Array.sort() 메소드를 사용하여 평균 점수를 기준으로 정렬한 결과를 반환합니다. 
// sort() 메소드의 콜백 함수에서는 b.average - a.average를 반환하는데, 이는 b.average가 더 큰 경우에는 음수가 반환되어 b가 a보다 앞으로 오게 됩니다. 즉, 평균 점수가 높은 학생이 앞으로 오게 됩니다.

students
    .leftJoin('scores', 'students.id', 'scores.student_id')
    .select('students.id', 'students.name', 'scores.score')
    .groupBy('students.id')
    .avg('scores.score as avg_score')
    .orderBy('avg_score', 'DESC')
    .orderBy('students.id', 'DESC')
    // 이전에 작성한 코드에서 orderBy 메소드 체인을 한 번 더 이어서 작성하면 됩니다. 먼저, 같은 평균 점수일 경우 학번을 기준으로 내림차순으로 정렬하기 위해 orderBy('id', 'DESC')를 추가합니다. 이는 이전에 이미 DESC로 정렬했으므로, 같은 평균 점수에서 다른 경우 학번을 기준으로 내림차순으로 정렬됩니다.

    // 이렇게 작성하면 평균 점수가 높은 학생부터 내림차순으로 정렬되며, 평균 점수가 같은 경우 학번을 기준으로 내림차순으로 정렬됩니다.


for (let i = 0; i < result.length; i++) {
    const student = result[i];
    console.log(`${i + 1} 등 - 학번: ${student.id}, 이름: ${student.name}, 평균점수: ${student.avgScore}`);
    }

// for문을 사용하여 result 배열을 반복하면서 각 학생의 정보를 출력합니다.
// result 배열의 인덱스 i에 1을 더한 값을 사용하여 해당 학생의 석차를 출력합니다.
// student 변수를 사용하여 현재 반복 중인 학생의 정보를 저장합니다.
// console.log 함수를 사용하여 학생의 정보를 출력합니다. 출력되는 정보는 학번, 이름, 평균점수로 구성되며, template literal을 사용하여 출력합니다.