const express = require('express');
const router = express.Router(); // express의 router 객체를 생성한다..
const ctrl = require('./user.ctrl'); // user.ctrl.js를 불러온다..


router.get('/', ctrl.index); 

// 라우팅 설정 로직

//express에서 routing을 위한 전용 router 객체를 제공한다..
// router는 express의 미들웨어로 동작한다..


// ~~ 


//root index에서 사용하기위해 module로 뺌
module.export = router;