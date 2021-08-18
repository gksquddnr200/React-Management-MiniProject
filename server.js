const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/customers', (req,res)=>{
    res.send([
                   
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '한병욱',
    'birthday': '960523',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이요한',
    'birthday': '9600102',
    'gender': '남자',
    'job': '디자이너'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '안재엽',
    'birthday': '970810',
    'gender': '여자',
    'job': '프로그래머'
  }

    ])

});

app.listen(port, ()=> console.log(`Listening on port ${port}`));

