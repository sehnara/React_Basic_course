import React, { PureComponent } from 'react';
import './app.css';
import Habitaddform from './components/habitaddform';
import Habits from './components/habits';
import Navbar from './components/navbar';


class App extends PureComponent {
  state = {
    habits :[ 
        {id :1, name : "Reading", count : 0},
        {id :2, name : "Running", count : 0},
        {id :3, name : "Coding", count : 0}
      ]
  };
  handleIncrement = (habit)=>{
    const habits = this.state.habits.map(item =>{
        if(item.id === habit.id){
          return {...habit, count : habit.count +1};
        }else{
          return item;
        }
    });
    this.setState({habits});
  }
  handleDecrement = (habit) =>{
    const habits = this.state.habits.map(item =>{
      if(item.id === habit.id){
        return {...habit, count : habit.count <= 0 ?  0 : habit.count -1};
      }else{
        return item;
      }
  });
  this.setState({habits});      
  }   

  handleDelete =(habit) =>{
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits});
  }
  handleAdd = name =>{
    const habits = [...this.state.habits, {id:Date.now(), name, count:0}];
    this.setState({habits});
  }
  handleReset = () =>{
   const habits = this.state.habits.map(item=> {
    if(item.count===0){
      return item;
    } else{
      return {...item, count : 0};
    }
    
    });
   this.setState({habits});
  }
 
  handleDel = () =>{
    const habits = [...this.state.habits];
    habits.splice(0,habits.length);
    this.setState({habits});
  }

  render() {
    return (
      <>       
        <Navbar totalCount = {this.state.habits.filter(item =>item.count >0).length}/>
        <Habits  
            habits = {this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd = {this.handleAdd}
            onReset = {this.handleReset}
            onDel = {this.handleDel}
        />
      </>      
    );    
  }
}
export default App;