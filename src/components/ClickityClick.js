import React from 'react';
class ClickityClick extends React.Component{
    state = {
        hasBeenClicked: false
    }

    handleClick = () => {
        if(this.state.hasBeenClicked===false){
            this.setState({
                hasBeenClicked: true 
            })
        }

        if(this.state.hasBeenClicked===true){
            this.setState({
                hasBeenClicked: false 
            })
        }

    }

    render(){
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                 <button onClick={this.handleClick}>Click me!</button>

            </div>
        )
    }
}
export default ClickityClick