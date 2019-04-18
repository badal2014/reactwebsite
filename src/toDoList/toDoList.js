import React from 'react'
import Modal from './modal';


class ToDOList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUser: [],
            openModal : false,
            selectedId: "",
            loader: false
        }
    }

    fetchData = () => {
        var r = new XMLHttpRequest();
        this.setState({
            loader: true
        })
        r.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        // let t = this
        r.onreadystatechange = () => {
            if (r.readyState != 4 || r.status != 200) return;
            this.setState({
                loader: false,
                allUser: JSON.parse(r.responseText)
            })
        };
        r.send("banana=yellow");
    }

    EditList(e) {
        var x = this.state.allUser.map(d => {
            d.title = d.id == e.target.id ? "aa" : d.title;
            return d
        })
        this.setState({
            allUser: x
        })
    }
    modalState(e){   

        this.setState({
            selectedId: e.target.id,
            openModal : !this.state.openModal
        })        
    }
    modifyData(e){
       var x =  this.state.allUser.filter(d => {
            d.title = d.id == e.id ? e.title : d.title;
            return d
        })
        this.setState({
            allUser: x,
            openModal : !this.state.openModal
        })
    }
    deleteItem(e){
        var x = this.state.allUser.filter(f => {            
            return f.id !== parseInt(e.target.id)      
        })
        console.log(x);
        
    }
    

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <h1>Loader state: {this.state.loader.toString()}</h1>
                <button type="button" onClick={this.fetchData}>Fetch Data</button>
                {this.state.allUser.map((e, key) => (<div key={key} >{e.title} <button type="button" id={e.id} onClick={(e) => this.modalState(e)}>Edit</button><button type="button" id={e.id} onClick={(e) => this.deleteItem(e)}>Delete</button></div>))}
                {this.state.openModal == true ? <Modal {...this.state} {...this.props} allUser={this.state.allUser} modalStat={(e) => this.modalState(e)} modifyData={(e) => this.modifyData(e)} /> : null}
            </div>
        )
    }

}
export default ToDOList