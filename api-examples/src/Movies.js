import React from 'react';
import { Link } from 'react-router-dom';

export default class Movies extends React.Component {
    state = { movies: [] };

    componentDidMount() {
        fetch('http://omdbapi.com/?apikey=REDACTED&s=star wars')
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }));
    }

    render() {
        return (
            <div>
                <h1>Movies</h1>
                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.imdbID}>
                            <Link to={`/movies/${movie.imdbID}`}>
                                {movie.Title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}