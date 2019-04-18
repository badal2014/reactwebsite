import React from 'react'

class Modal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      data: []
    }
  }  
  componentDidMount(){   
      var x = this.props.allUser.filter(e => {
        return e.id == this.props.selectedId  
      })      
      
      this.setState({
        data : x[0]
      })
    }
    
    handleChange(e){
      let data = this.state.data;
      data.title = e.target.value
      this.setState({data})
    }
    render(){     
      console.log(this.state.data);
        return(          
          <div>
          <div className="container">
                  <div className="modalMain">
                  <input type="text" onChange={(e) => this.handleChange(e)} value = {this.state.data.title}/> 
                  <button type="button" onClick={(e) => this.props.modifyData(this.state.data)}>Save</button>
                    <button type="button" onClick={(e) => this.props.modalStat(e)}>Close</button>
                  </div>
          </div>
      </div>
        )
      }
}
export default Modal;
