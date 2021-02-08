import React, { Children, Component } from 'react';
import DeleteElem from './deleteElem';
import Habit from './habit';
import Habitaddform from './habitaddform';

class Habits extends Component {    

    handleAdd = name =>{
        this.props.onAdd(name);
    }
    handleReset =()=>{
        this.props.onReset();
    }
    handleDelete =() =>{
        this.props.onDel();
    }
     render() {
        return (
            <>
                <Habitaddform onAdd = {this.handleAdd}/>
                <ul>
                {
                    this.props.habits.map(habit => 
                    <Habit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        onDelete={this.props.onDelete}
                    />)
                }
                </ul>  
                <button className="btnReset" onClick={this.handleReset}>ResetAll</button> 
                <DeleteElem onDel = {this.handleDelete}/>             
            </>            
        );
    }
}

export default Habits;