import React from 'react';


export default class GithubUser extends React.Component {
    state = {
        isLoading: false,
        user: {},
        errorMessage: '',
        searchInput: ''
    }

    searchForUser = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true, user: {}, errorMessage: '' }, () => {
            fetch(`https://api.github.com/users/${this.state.searchInput}`)
                .then(res => {
                    if (res.status === 404) {
                        throw new Error('User not found');
                    } else {
                        return res.json();
                    }
                })
                .then(data => this.setState({ user: data, isLoading: false }))
                .catch(error => {
                    const errorMessage = error.message;
                    this.setState({ isLoading: false, errorMessage });
                });
        });
    }

    onInputChange = (e) => {
        this.setState({
            searchInput: e.target.value
        });
    }

    githubUserImage = () => {
        return this.state.isLoading
            ? <div>Loading...</div>
            : <img src={this.state.user.avatar_url} alt={this.state.user.name} />;
    }

    render() {
        const { name } = this.state.user;

        return (
            <div>
                <h1>Github User</h1>
                <form onSubmit={this.searchForUser}>
                    <input type="text" value={this.state.searchInput} onChange={this.onInputChange} />
                    <button type="submit">Search</button>
                </form>

                <div>{this.state.errorMessage}</div>
                <p>{name}</p>
                {this.githubUserImage()}
            </div>
        );
    }
}