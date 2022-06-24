import React from 'react';
import axios from 'axios';
import SearchBar from './components/searchbar';
import Modal from 'react-modal';
import Post from './components/post';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBarInput: '',
            filters: [],
            data: [{ title: "bite", description: "chatte", content: "couille" }],
            isCreateModalIsOpen: false,
            postName: '',
            postDesc: '',
            postContent: ''
        }
        this.openCreationModal = this.openCreationModal.bind(this);
        this.closeCreationModal = this.closeCreationModal.bind(this);
    }
    getPost(input) {
        axios({
          method: 'get',
          url: `http://localhost:8080/get-posts?searchInput=${this.state.searchBarInput}`,
          headers: {},
          data: {
            filters: this.state.filters
          }
        });
    }
    
    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }
    
    openCreationModal() {
        this.setState( {isCreateModalIsOpen: true} );
    }

    closeCreationModal() {
        this.setState( {isCreateModalIsOpen: false} );
        this.setState( {postName: '', postDesc: '', postContent: ''});
    }

    createPost() {
        /**
         * 
         *   Appeler la fonction create de l'API avec axios
         * 
         */
      }
    

    render() {
        return (
            <div>
                <SearchBar />
                <button onClick={this.openCreationModal}>Add a post</button>
                <Modal isOpen={this.state.isCreateModalIsOpen} onRequestClose={this.closeCreationModal}>
                <button onClick={this.closeCreationModal}>close</button>
                    <form onSubmit={this.createPost}>
                        <label>
                        Titre:
                        <input type="text" name="postName" value={this.state.postName} onChange={(e) => this.handleChange(e)} />
                        </label>
                        <label>
                        Description:
                        <input type="text" name="postDesc" value={this.state.postDesc} onChange={(e) => this.handleChange(e)} />
                        </label>
                        <label>
                        Message:
                        <input type="text" name="postContent" value={this.state.postContent} onChange={(e) => this.handleChange(e)} />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </Modal>
                <div>
                  {this.state.data.map(post => <Post title={post.title} description={post.description} content={post.content}/>)}
                </div>
            </div>
        )
    }
}