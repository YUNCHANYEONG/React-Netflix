import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MovieCard = ({item}) => {

    const { genreList } = useSelector(state => state.movie);

    return (
        <div 
            className='movieCard'
            style={{
                backgroundImage:"url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}`+")", 
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
            }}
        >
            <div className='overlay'>
                <h1 style={{fontSize:20}}>{item.title}</h1>
                <div>{item.genre_ids.map((id) => 
                        <Badge bg="danger" className="badge">
                            {genreList.find(item=>item.id==id).name}
                            </Badge>)}
                </div>
                <div style={{fontSize:14}}>
                    <span>{item.vote_average}</span>
                    <span>{item.adult?"청불":"Under 18"}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard