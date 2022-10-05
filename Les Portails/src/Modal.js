import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export class Modal extends Component {
    constructor(props) {
        super(props);
      this.popUpContainer = document.createElement('div')
      document.body.appendChild(this.popUpContainer);
    }
    
    render() {
        return ReactDOM.createPortal(
            <div className="modal" onClick={this.props.close}>
                <div>
                    <p> Hello oumaima </p>
                    <button> Fermer </button>
                </div>,
                this.popUpContainer
               {/*  document.getElementById('second-root') */}
                
                )
            </div>
        )
    }
}

export default Modal
