import React from "react";

class Practice extends React.Component{
        constructor(props){
                super();
                this.state={
                        age: props.age,
                        
                }
        }

        makeMeOlder(){
                this.setState({
                        age: this.state.age +3
                

                });
                console.log(this.age)

                
        }
      render() {
        return (
            <div>
                  
                    <p>Name is {this.props.name}</p>
                    <p>user name is {this.props.user.name}</p>
                    <p>age is {this.state.age}</p>
                    <ul>
                            {this.props.user.hobbies.map((hobby)=><li>{hobby}</li>)}
                    </ul>
                    <button type="button" onClick={() => this.makeMeOlder()}>make me older</button>
                    <button type="button" onClick={this.props.greet}>Greet</button>
                
                    
            </div>
        );
      }
}
export default Practice;  