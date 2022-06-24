import React from 'react';
import Modal from 'react-modal';
import './post.css';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      desc: props.description,
      content: props.content,
        isOpen: false
    }
    this.openUpdateModal = this.openUpdateModal.bind(this);
    this.closeUpdateModal = this.closeUpdateModal.bind(this);
  }

  openUpdateModal() {
    console.log("test");
    this.setState( {isOpen: true});
  }

  closeUpdateModal() {
    this.setState({isOpen: false});
  }

  updatePost() {
    /**
     * 
     *  Appeler la fonction update de l'API
     * 
     */
  }

  deletePost() {
    /**
     * 
     *  Appeler la fonction delete de l'API
     * 
     */
  }

  render() {
    return (
      <div>
        <div onClick={this.openUpdateModal} class="card">
          <div>{this.state.title}</div>
          <div>{this.state.desc}</div>
          <div>{this.state.content}</div>
        </div>
        <Modal isOpen={this.state.isOpen} onRequestClose={this.closeUpdateModal}>
            <button onClick={this.closeUpdateModal}>close</button>
            <div>test</div>
        </Modal>
      </div>
    )
  }
}