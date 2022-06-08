import React, { Component } from 'react';

class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    loading: false
                });
            })
    }


    render() {
        const {loading, items} = this.state;
        if (loading) return <div><h1>Loading..</h1></div>;
        
        return (
            <div className='container'>
                <h1> Fetch data from an api in react </h1>
                <div className='row'>
                  {
                    items.map((item,index) => (
                        // <CardComp item={this.state.items[index]}/>
                        // <ol key={item.id} >
                        //     User_Name: {item.username},
                        //     Full_Name: {item.name},
                        //     User_Email: {item.email}
                        // </ol>
                                <div className="col-md-3 myCard">
                                   <h1>{item.name}</h1>
                                   <p>{item.username} {item.email}</p> 

                                </div>
                    ))
                }
                </div>
            </div>
        );
    }
}

export default PostList;