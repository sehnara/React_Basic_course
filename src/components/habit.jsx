import React, { PureComponent } from 'react';

class Habit extends PureComponent {
   
    handleIncrement = ()=>{
       this.props.onIncrement(this.props.habit);
    }
    handleDecrement = () =>{
        this.props.onDecrement(this.props.habit);
    }  
    handleDelete =() =>{
        this.props.onDelete(this.props.habit);
    } 
    render() {
        // console.log(this.props);

        const {name, count} = this.props.habit;

        return (
            <li className= "habit">
                <span className="habit_name">{name}</span>  
                <span className="habit_count">{count}</span>   
                <button className="habit_button habit_increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>             
                <button className="habit_button habit_decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit_button habit_delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        )
    }
}

export default Habit;
