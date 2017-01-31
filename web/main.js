const { play } = require("rps");
const React = require("react");
const ReactDom = require("react-dom");

const Play = React.createClass({

    getInitialState(){
        return {

        }
    },

    submitPlay(e){
        e.preventDefault()
        play(this.state.p1, this.state.p2, this)
    },

    p1Changed(e){
        this.setState({p1: e.target.value})
    },

    p2Changed(e){
        this.setState({p2: e.target.value})
    },

    p1Invalid(){
        alert("P1 input invalid")
    },

    p2Invalid(){
        alert("P2 input invalid")
    },

    p2Wins(){
        alert("P2 wins")
    },

    p1Wins(){
        alert("P1 wins")
    },

    tie(){
      alert("Theres a tie")
    },

    render(){
        return <div>
            <form onSubmit = {this.submitPlay}>
                <input type="text" name="p1" onChange={this.p1Changed}/>
                <input type="text" name="p2" onChange={this.p2Changed}/>
                <input type="submit" value="Play"/>

            </form>
        </div>
    }
})
ReactDom.render(
    <Play></Play>,
    document.getElementById("app")
);