import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// export default class MovieDetails extends React.Component {
//     state = { details: {} };

//     componentDidMount() {
//         const { imdbID } = this.props.match.params;
//         fetch(`http://omdbapi.com/?apikey=REDACTED&i=${imdbID}`)
//             .then(res => res.json())
//             .then(data => this.setState({ details: data }));
//     }

//     render() {
//         const { details } = this.state;
//         return (
//             <div>
//                 <h1>{details.Title}</h1>
//                 <img
//                     src={details.Poster}
//                     alt={`${details.Title} poster`}
//                 />
//             </div>
//         )
//     }
// }

export default function MovieDetails() {
    const [details, setDetails] = useState({});
    const { imdbID } = useParams();

    useEffect(() => {
        fetch(`http://omdbapi.com/?apikey=REDACTED&i=${imdbID}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    });

    return (
        <div>
            <h1>{details.Title}</h1>
            {details.Poster && (
                <img
                    src={details.Poster}
                    alt={`${details.Title} poster`}
                />
            )}
        </div>
    )
}