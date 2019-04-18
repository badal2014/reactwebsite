import React from "react";
import {Example} from './hooks';
// import Columns from "./columns";

class Practice extends React.Component {
        constructor(props) {
                super();
                this.state = {
                        age: props.age,
                        name: "",
                        data: [],
                        inputVal: "",
                        idFound: "",
                        dataFound: {},
                        name: "",
                        job: "",
                }
        }
        // componentWillMount() {
        //         this.myFun();
        //         setTimeout(() => {
        //                 clearInterval(this.interval)
        //         }, 1300)
        //         // this.set = setInterval(() => {
        //         //         this.myFun();
        //         //         setTimeout(() => {
        //         //                 clearInterval(this.interval)
        //         //         }, 1300)
        //         // },1500);
        // }

        componentWillUnmount() {
                clearInterval(this.set)
        }

        myFun() {
                let text = "Sahil ";
                let length = text.length;
                let i = 0;
                this.interval = setInterval(() => {
                        this.setState({
                                name: i < length ? this.state.name.concat(text.charAt(i)) : this.state.name
                        })
                        i++;
                        if (this.state.name == "Sahil") {
                                this.setState({
                                        name: ""
                                })
                        }
                }, 300)
        }

        makeMeOlder() {
                this.setState({
                        age: this.state.age + 3


                });
                console.log(this.age)


        }



        // --------------------------API CALL-------------------------------------------------------x
        // badal(e) {
        //          console.log('h')
        //         // console.log(this.state.data);
        //         var size = this.state.data;
        //         // console.log(size.length);



        //         for (let i = 0; i < size.length; i++) {
        //                 console.log(size[i])

        //                 if (size[i].id == e.target.value) {
        //                         //     i++
        //                         // console.log("id match found at" + i);
        //                         // this.setState({
        //                         //   idFound: i,
        //                         // })
        //                         this.setState({
        //                                 dataFound: size[i],
        //                         });
        //                         console.log(size[0].name);
        //                         // console.log(this.state.idFound)
        //                         break;
        //                 }
        //                 // else{
        //                 //   console.log("no Matchh Found")
        //                 // }
        //         }

        //         // document.getElementById(  )
        // }
        handleChange(event) {
                this.setState({ inputVal: event.target.value });
                // console.log(this.state.inputVal)
        }
        componentDidMount() {
                

                // fetch("https://jsonplaceholder.typicode.com/comments")
                // fetch("https://reqres.in/api/users/2")
                fetch("https://reqres.in/api/users/6")
                        .then(res => res.json())
                        .then(
                                (result) => {
                                        // console.log(result[0]);
                                        this.setState({
                                                data: result.data
                                                
                                        })
                                        console.log(this.state.data);
                                        // this.setState({
                                        //   isLoaded: true,
                                        //   items: result.items
                                        // });
                                },
                                (error) => {
                                        console.log(error);

                                        // this.setState({
                                        //   isLoaded: true,
                                        //   error
                                        // });
                                }
                        )

        }

        



        // ---------------------------------API CALL END---------------------------/


        createJob(e) {
                e.preventDefault();
                let data = {
                        "name": this.state.username,
                        "job": this.state.job
                    }
                fetch('https://reqres.in/api/users', {
                        method: 'post',
                        body: JSON.stringify(data)
                }).then(res => res.json())
                        .then(
                                (result) => {
                                        console.log(result);
                                        
                                },
                                (error) => {
                                        console.log(error);
                                         
                                }
                        )
        }


        render() {
                return (
                        <div>
                                <button type= "button" >Call ME</button>
                                <Example/>
                                <p>Name is {this.state.name}|</p>

                                <p>badal</p>
                                <button type="button" onClick={() => this.makeMeOlder()}>make me older</button>
                                <button type="button" onClick={this.props.greet}>Greet</button>

                                <table>
                                        <tr>

                                        </tr>
                                </table>
                                <button type="button" onClick={() => this.props.history.push('/#')}>Go Back To Home</button>

                                {/* <input type="text" name="search" id="searchDate" onChange={(e) => this.badal(e)} /> */}
                                <input type="text" name="search" id="searchData"/>
                                <button type="button">Search </button>


                                {this.state.data == null ? "" : 
                                                <div> <h4 >{this.state.data.first_name}</h4>
                                                        
                                                </div>
                                
                                }
                                {/* {this.state.data.length == 0 ? null : this.state.data.map((data,key) => (<div class="col-md-3 eachPost"> */}
                                {/* <div className="shadow"> */}
                                {/* <img src={data.avatar} /> */}
                                {/* <h4>{data.name}</h4>
                    <p>{data.id}</p>
                    <p>{data.email}</p> */}
                                {/* <p>{data.last_name}</p> */}
                                {/* </div> */}
                                {/* </div>))} */}

                                <form onSubmit={(e) => this.createJob(e)}>
                                        {/* Name<input type="text" onChange={(e) => this.setState({ username: e.target.value })} value={this.state.username} />
                                        Job <input type="text" onChange={(e) => this.setState({ job: e.target.value })} value={this.state.job} /> */}

                                        Name <input type="text" onChange={(e) => this.setState({username : e.target.value})} value={this.state.value}/ >
                                        Job<input type="text" onChange={(e) =>this.setState({job:e.target.value})} value={this.state.job}/>

                                        <button type="submit">Submit</button>
                                </form>
                        </div>
                );
        }
}
export default Practice;  