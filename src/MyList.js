import { Component } from 'react';

class MyList extends Component {

  state= {
    userInput: '',
    list: []
  }


  changeEvent(e) {
    this.setState({userInput: e})
  }

addItem(input) {
    if (input === '') {
        alert('Пожалуйста, напишите определение')
    }
    else {
        let listArray = this.state.list;
        listArray.push(input)
        this.setState({list: listArray, userInput: ''})
    }
}

crossWord =(event) => {
const li = event.target;
li.classList.toggle('crossed')
}

deleteAll =() => {
  let listArray =this.state.list;
  listArray =[];
  this.setState({list: listArray})
}

onChangeSubmit =(e) => {
  e.preventDefault();
}

  render() {
  return(
    <div >
      <form onSubmit={this.onChangeSubmit}>
        <div className='container'>
    <input type='text' placeholder = 'Запиши сюда...'
    onChange = {(e) => {this.changeEvent(e.target.value)}}
    value = {this.state.userInput}/>
    <button onClick = {()=> this.addItem(this.state.userInput)}>Добавить</button>
    </div>
    <div className='container'>
        <ul>
{this.state.list.map((item,index) => (
        <li onClick={this.crossWord} key ={index}>
            {item}
        </li>
    ))
}
    </ul>
    </div>

   <div className='container'>
     <button className='btn' onClick={this.deleteAll}>удалить все</button>
   </div>
   </form>
    </div>
  )

}
}

export default MyList;