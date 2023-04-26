import logo from './logo.svg';
import './App.css';
import Nav from './views/Navs';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { Countdown, CountdownByHook } from './views/Countdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import NotFounds from './views/NotFounds';
import SeachYTB from './views/SeachYTB';

function App() {
  let [name1, setName1] = useState('Eric')
  let [valueInput, setValueInput] = useState('')
  let [todos, setTodos] = useState([
    { id: 'todo1', title: 'aaaaaaaaaaaaaa', type: 'abc' },
    { id: 'todo2', title: 'bbbbbbbbbbbbbb', type: 'xyz' },
    { id: 'todo3', title: 'cccccccccccccccc', type: 'abc' },
    { id: 'todo4', title: 'ddddddddddddd', type: 'jqk' },
  ])


  const handleClick = (event) => {
    if (!valueInput) {
      alert("Nhajap")
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 1001), title: valueInput, type: 'abc' }
    setTodos([...todos, newTodo])
    setValueInput('')
  }

  const handleOnChange = (event) => {
    setValueInput(event.target.value);
  }

  const deleteDateTodo = (id) => {
    let currentTodos = todos
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)

  }

  // useEffect(() => {
  //   console.log(">>>> check useEffect")
  // }, [])

  // useEffect(() => {
  //   console.log(">>>> check useEffect valueInput")
  // }, [valueInput])

  // useEffect(() => {
  //   console.log(">>>> check useEffect todos")
  // }, [todos])

  const onTimesup = () => {
    // alert("Times up")
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/seachytb" >
              <SeachYTB />
            </Route>

            <Route path="/blog" exact>
              <Blog />
            </Route>

            <Route path="/blog/:id" >
              <DetailBlog />
            </Route>

            <Route path="/addnewblog" >
              <AddNewBlog />
            </Route>

            <Route path="/todos">
              <Todo
                todos={todos}
                title={'All Todos'}
                deleteDateTodo={deleteDateTodo}
              />

              {/* <Todo
                todos={todos.filter(item => item.type === 'abc')}
                title={'All Todos by abc'}
                deleteDateTodo={deleteDateTodo}
              /> */}
              <input
                type='text' value={valueInput}
                onChange={(event) => handleOnChange(event)}
              />
              <button type='button' onClick={(event) => handleClick(event)}>Click Me !!!</button>
            </Route>
            <Route path="/timer">
              <Countdown
                onTimesup={onTimesup}
              />
              <div>----------------------</div>
              <CountdownByHook
                onTimesup={onTimesup}
              />
            </Route>
            <Route path="/" exact={true}>
              <Covid />
            </Route>

            <Route path="*">
              <NotFounds />
            </Route>
          </Switch>


          {/* <h1>Hello {name1} !!!!</h1> */}



        </header>
      </div>
    </Router>
  );
}

export default App;
