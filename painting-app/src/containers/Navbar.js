import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Navbar extends React.Component {

    // componentDidMount() {
    //     fetch('http://localhost:3000/users', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }, 
    //         body: JSON.stringify({
    //             user: {
    //                 username: "dangnhon",
    //                 password: 'monkey12345',
    //                 tagline: "this is the first test"
    //             }})
    //     })
    //     .then(resp => resp.json())
    //     .then(test => console.log(test))
    // }

    render () {
        return (
            <div>
                <a href="#about">About</a>
            </div>
        )
    }
}