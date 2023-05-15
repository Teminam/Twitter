const Sequelize = require('sequelize');
const sequelize = new Sequelize('sungmin_test', 'root', '1111', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306'
});

//  학생 정보를 저장하는 모델을 정의합니다.
const Student = sequelize.define('student', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contact: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    registered_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
    });
// 위 코드에서 define() 메서드를 사용하여 student 모델을 정의하였습니다. 모델의 필드는 학생 테이블 필드와 동일합니다.


// 다음과 같이 학생 정보 수정 API를 구현합니다.
app.put('/api/student/:id', (req, res) => {
    const id = req.params.id;
    const { student_number, name, contact, email, address, registered_date } = req.body;
    Student.update({
        student_number,
        name,
        contact,
        email,
        address,
        registered_date
    }, {
        where: { id }
    })
    .then(result => {
        res.status(200).send({ message: '학생 정보가 수정되었습니다.' });
    })
    .catch(error => {
        console.log(error);
        res.status(500).send({ message: '서버 에러가 발생하였습니다.' });
    });
    });

    // 위 코드에서 /api/student/:id 엔드포인트에 PUT 요청이 들어오면, 해당하는 학생 정보를 수정합니다. 

    // 다음으로 update 메서드를 사용하여 학생 정보를 업데이트하였습니다. update 메서드는 첫 번째 인수로 업데이트할 필드와 값을, 두 번째 인수로 업데이트할 조건을 전달받습니다. 위 코드에서는 id를 조건으로 사용하였습니다.

    