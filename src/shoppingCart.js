import React from "react";

class ShoppingCart extends React.Component{

    state={
        array:['badal' , 'kunal' , 'Gajendra'],
        // value: this.props.passState.value
    };

    formatCount(){
        const {value} = this.props.passState;
        return value === 0 ? 'zero' : value;   
            
    }
    // incrementCount(){
    //     this.setState({
    //         value : this.state.value +1            
    //     })
    // }
    decrementCount(){
        this.setState({
            value : this.state.value -1            
        })
    }   

    renderTags(){
        if(this.state.array.length === 0 )
        return <p>Ther are no tags</p>;
        return <ul>{this.state.array.map(tag => <li key= {tag}>{tag}</li>)}</ul>;

    }
      render() {
          console.log("props", this.props);
          
        let btnClass = this.getBadgedClass();
        return (
            <div> 
                {this.props.id}
                    <span className={this.getBadgedClass()}>{this.formatCount()}</span>
                    <button onClick={() => this.props.incrementCounter(this.props.passState)} className="btn btn-secondary btn-sm m-2">Increment</button>
                    <button onClick={() => this.decrementCount()} className="btn btn-secondary btn-sm">Decrement</button>
                    {/* {this.state.array.length===0 && 'please create tags'} */}
                    {/* {this.renderTags()} */}
                    <button className="btn-danger btn-sm" onClick={() => this.props.onDelete(this.props.passState.id)}>Delete</button>
            </div>
        );
      }

    getBadgedClass() {
        let btnClass = "badge m-2 badge-";
        btnClass += (this.props.passState.value) === 0 ? 'warning' : 'primary';
        return btnClass;
    }
}
export default ShoppingCart;  