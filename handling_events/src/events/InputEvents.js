import React, { Component } from 'react';

class InputEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseDown: false,
            mouseClicked: 0,
            inputText: 'Hello World!',
            formInputText: 'Hello World 2'
        }

        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleOnClick() {
        // this.setState({
        //     mouseClicked: this.state.mouseClicked + 1
        // });
        this.setState((state)=>{
            return {
                mouseClicked: state.mouseClicked + 1,
            }
        });
        console.log(this.state.mouseClicked);
    }

    handleMouseDown() {
        this.setState({
            mouseDown: true,
        });
    }

    handleMouseUp() {
        this.setState({
            mouseDown: false,
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Input Events</h1>
                <section>
                    <h3>Mouse Events:</h3>
                    <button onClick={()=>{this.handleOnClick()}} 
                            onMouseDown={()=>{this.handleMouseDown()}} 
                            onMouseUp={()=>{this.handleMouseUp()}}>
                        Click Me
                    </button>
                    {/* Solution 2 */}
                    <button onClick={this.handleOnClick} 
                            onMouseDown={this.handleMouseDown} 
                            onMouseUp={this.handleMouseUp}>
                        Click Me 2
                    </button>
                    {/* Solution 1 */}
                    {/* <button onClick={this.handleOnClick.bind(this)} 
                                onMouseDown={this.handleMouseDown.bind(this)} 
                                onMouseUp={this.handleMouseUp.bind(this)} >
                        Click Me 2
                    </button> */}
                    <p>Button Mouse Down: {this.state.mouseDown ? 'true': 'false'}</p>
                    <p>Button Clicked: {this.state.mouseClicked}</p>
                </section>
                <section>
                    <h3>Input Change Events:</h3>
                    <input type="text" value={this.state.inputText}/>
                    <p>Input Value: {this.state.inputText}</p>                    
                </section>
                <section>
                    <h3>Form Submit Events:</h3>
                    <input type="text" value={this.state.formInputText}/>
                    <button>
                        Submit
                    </button>
                    <p>Input Value: {this.state.formInputText}</p>
                    <p>Submitted Value: </p>
                </section>
                
            </React.Fragment>
        )
    }
}

export default InputEvents;