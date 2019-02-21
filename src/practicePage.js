import React from "react";

class PracticePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
        date: new Date(),
        alertValue:"",
        empName: "",
        fileVal:"",
        error:false

    };
}
componentDidMount(){
    this.timerId=setInterval(() => this.tick() , 1000);
}
componentWillUnmount(){
    clearInterval(this.timerId);
}
    
tick() {
    this.setState({
        date: new Date()
    });
}
handleChange(e){
       var r=this.state.empName
    if(e.target.id=="text"){
        this.setState({
            alertValue :e.target.value
        });

    }
    else if (e.target.id=="empName"){
        this.setState({
            empName :e.target.value
        });
    }
    else if (e.target.id=="fileVal"){
        this.setState({
            fileVal :e.target.value
        });
    }
}
handleSubmit(e){
    var r=this.state.alertValue
    // alert("jdsnxm",r)    
    // var s=this.state.empName
   
    if(r!= undefined){
        console.log(r);
        alert(r.toUpperCase())
        
    }
    // if(s!= undefined){
    //     console.log(s);
    //     alert(s.toUpperCase())
        
    // }
}
errorMsg(){
    if(this.state.empName ==""){
        this.setState({
            error: true
        })
    }else{
        this.setState({
            error: false
        })
    }
}

    
      render() {
        // console.log(this.state.alertValue);
          const{alertValue,empName,fileVal}=this.state
        
        return (
            
            
            <div>
                <h1>Hello My First Clock</h1>
                <h2>Time is  {this.state.date.toLocaleTimeString()}</h2>
                <form  onSubmit={(e) => this.handleSubmit(e)} value={this.state.alertValue} >
                    <input type="text" value={alertValue} id="text" onChange={(e) =>this.handleChange(e)}/>
                    {/* <button type="submit" onClick={(e) => this.handleSubmit(e)} value={this.state.alertValue} >Submit</button> */}
                    <select id="empName" value={empName} onChange={(e) =>this.handleChange(e)}>
                    <option>choose</option>
                        <option value="badal">Badal</option>
                        <option value="suman">Suman</option>
                        <option value="sahil">Sahil</option>
                    </select>
                    {this.state.error ? <span>fill input</span>:null}
                    {/* <input type="date" /> */}
                    <input type="file" id="fileVal" value={fileVal} onChange={(e) =>this.handleChange(e)}/>
                    <label>{this.state.fileVal}</label>
                    <button type="button" onClick={()=>this.errorMsg()}>
                        ok
                    </button>

                </form>
            </div>
        );
      }

    }

export default PracticePage;  