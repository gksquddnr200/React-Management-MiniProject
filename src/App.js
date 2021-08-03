import React, {Component, PureComponent} from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
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

]

class App extends Component {
  render(){
    return (
      <div>
        {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
          );
        })       
      }
      </div>
    );
  }
}

export default App;
