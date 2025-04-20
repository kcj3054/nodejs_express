var podyParser = require("body-parser");
var express = require("express");
var user = require("./api/user/index.js");

var app = express();
const syncDb = require("./bin/sync-db.js");

app.use(podyParser.json());
app.use('/user', user);


syncDb().then(() => {   
    console.log("Database synced successfully");

    app.listen(3000, function () {
        console.log("Server is running on port 3000");
    }
}

/*
const express = require('express')
const app = express()
const port = 3000

// 여기서 req,res 는 http의 req, res가 아니라 express의 req, res이다.s
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// npm install express ... 
// node_moudles 안에 존재하게된다.. 

// 


// http method는 express application method로 구현되어있다.
// app.get, app.post, app.put, app.delete, app.all, app.use, app.listen
// app.get('/user', (req, res) => { .. 

//app.get 예제


/* http 상태 코드 .. */

/*
400 - bad request
404 - not found
409 - 이미있는 자원인데 또 생성할 때.. conflict
5xx - 서버 오류
*/

//tdd
// mocha, superTest..
// test 돌릴 때 test script를 작성해놓는다.. 
// node_moudles/.bin/mocha....
// mocha index.spec.js


//bodyParser 모듈.
// express에서는 body를 지원해주지않아서. bodyParser를 사용해야한다..
// api 공식 문서에있음. 



// [next js]
// -> react가 library이고, react framework가 next js.

// webpack  -> vite 
// - webpack은 사용하기 조금 어려웠다..
// config 부분들?... 조금 더 구체적으로.. 궁금하네;;

// - vite
//   - esm 문법에 맞춰서 진행하자.
//   - webpack에 비해 local 개발환경이 빨라짐.
//     - webpack은 100개의 js중 1개만 수정해도 다 빌드 돌면서 reload 되는데
//  vite는 수정된 하나의 파일만 transfile(.. ? )된다.
//   - vi test, -> 

// [node!]
// - node orm에서 json으로 옮기다 보니.. 
// bigInt 타입이 무조건 문자열로 온다.
//   - 궁금하네 테스트해보자. (java는 big decimal있어서 괜찮다네..)

// - js쪽에서말하는 module이머지?...
  



// npm install express. 
// morgran, (middleware..), third party module..
// - require('moragan')...

// 일반 미들웨어, vs 에러 미들웨어...


// - express에는 라우팅 전용 개체도 존재한다..

// - 

// app.get('

// ======================
// package.json에 내가 사용하는 dependency 의존성이 다 있는 
// 상태에서는 node_moudle이 없더라도 
// npm init을하면 의존성들 다 설치된다..  

// package.json에 dependency 추가할 때.. --save 옵션을 주면된다. 
// 예전에는 --save 옵션이 맞았어. 하지만 요즘은 안 써도 자동으로 추가돼.
// npm 5.0이상부터는 --save 옵션 불필요.. 



// ================================================

// touch 파일명
// - 빈 파일을 만들거나 기존 파일의 수정시간을 갱신 함 .


s
// [ORM]
// - 데이터베이스를 개체로 추상화해 논것을 ORM (Object Relational
// Mapping)

// - 잘못사용하면 성능이슈가 있다.

// - node orm은 sequelize가있다. 시퀄라이저.. 

// -insert users ('name') values ('alice');
// -> User(model).create({name: 'alice'})

// - delete from users where 

// ============

