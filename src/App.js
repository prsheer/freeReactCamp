import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem'
import todosData from './todosData'
import Conditional from './Conditional'


class App extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        return (
            <form action="">
                <input type="text" value={this.state.firstName} name="firstName" placeholder="First name" onChange={this.handleChange}/>
                <input type="text" value={this.state.lastName} name="lastName"  placeholder="Last name" onChange={this.handleChange}/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App;

/*
class App extends Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        this.setState(prevStep => {
            return {
                isLoggedIn: !prevStep.isLoggedIn
            }
        })
    }

    render() {

        let buttonText = this.state.isLoggedIn === true ? 'Log in ' : 'Log out'

        return (
            <div><button onClick={this.handleSubmit}>{buttonText}</button></div>
        );
    }
}

export default App;*/
/*
class App extends Component {

    constructor() {
        super()
        this.state = {
            unreadMessages: ["54"]
        }

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {


        return (
            <div><h2>you have {this.state.unreadMessages.length} messages left</h2></div>
        );
    }
}

export default App;

*/
/*
class App extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: true
        }

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {


        return (
            <Conditional isLoading={this.state.isLoading} />
        );
    }
}

export default App;
/*
class App extends Component {

    constructor() {
        super()
        this.state = {
            todos: todosData
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {

        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })

    }

    render() {

        const todosComponents = this.state.todos.map(
            item => <TodoItem
                key={item.id}
                item={item}
                handleChange={this.handleChange}
            />)

        return (
            <div className="todo-item">
                {todosComponents}
            </div>
        );
    }
}

export default App;



class App extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState(prevStep => {
            return {
                count: prevStep.count + 1
            }
        })
    }

    render() {


        return (
            <div className="todo-item">
                <button onClick={this.handleChange}>Change! </button>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default App;
class App extends Component {

    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {


        return (
            <div>
                <button onClick={() => {console.log("I am clicked")}}></button>
            </div>
        );
    }
}

export default App;

class App extends Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        let wordDisplay = "In";

        if (!this.state.isLoggedIn) {
            wordDisplay = "Out"
        }

        return (
            <div className="todo-item">
                <h1>Is this love? {wordDisplay}</h1>
            </div>
        );
    }
}

export default App;




class App extends Component {
    render() {

        const jokesComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/> )

        return (
            <div className="todo-item">
                {jokesComponents}
            </div>
        );
    }
}

export default App;


function App() {



  return (
    <div>
      {jokesComponents}
  )

}

export default App;
*/

/*
class App extends Component {
  render() {
    return (
      <div className="todo-item">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>
    );
  }
}

export default App;



class App extends Component {
  render() {
     return (
       <div className="todo-item">
        <ContactCard
           name="Test1"
           imgUrl="http://placekitten.com/300/200"
           phone="(212)67567 56757"
           email="test1@gmail.com"
          /><ContactCard
           name="Test2"
           imgUrl="http://placekitten.com/300/200"
           phone="(212)67567 56757"
           email="test12@gmail.com"
        />
        <ContactCard
           name="Test3"
           imgUrl="http://placekitten.com/300/200"
           phone="(212)67567 56757"
           email="test13@gmail.com"
        />
        <ContactCard
           name="Test4"
           imgUrl="http://placekitten.com/300/200"
           phone="(212)67567 56757"
           email="test14@gmail.com"
        />
       </div>
      );
  }
}
export default App;

*/

/*

class App extends Component {
    render() {
        return (
            <div className="todo-item">
                <ContactCard
                    contact={{name:"test112", imgUrl:"http://placekitten.com/300/200", phone:"(212)67567 56757", email:"test13@gmail.com"}}
                />
            </div>
        );
    }
}

export default App;
*/
