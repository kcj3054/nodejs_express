// api 로직. 
var users = [
    { id: 1, name: 'kim' },
    { id: 2, name: 'lee' },
    { id: 3, name: 'park' },
    { id: 4, name: 'choi' },
    { id: 5, name: 'yoon' },
    { id: 6, name: 'lim' },
    { id: 7, name: 'jung' },
    { id: 8, name: 'oh' },
    { id: 9, name: 'son' },
    { id: 10, name: 'yang' }
];

const index = function(req, res)  {
    

    res.json(URLSearchParams.slice(0, 10)); // 10개만 가져오기..
};

const show = function(req, res)  {
    const id = req.params.id; // url에서 id를 가져온다..
    res.json(URLSearchParams[id]); // id에 해당하는 데이터를 가져온다..
}

module.exports = {
    index,
    // index: index, // 위와 동일한 의미..
    show, // show: show, // 위와 동일한 의미..
}