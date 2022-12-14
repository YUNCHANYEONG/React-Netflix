import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {

    const dispatch = useDispatch();
    const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(state => state.movie);



    useEffect(() => {
        dispatch(movieAction.getMovies());
    },[]);

    // 로딩이 참이면 로딩을 보여준다. 로딩이 거짓이면 데이터를 보여준다.
    // 참 : 데이터 도착 전
    // 거짓 : 데이터 도착 후 혹은 에러 발생시
    if(loading){
        return (
            <div className='basic-loading'>
                <ClipLoader color="#f00" loading={loading} size={120} />
            </div>
        )
    }

    return (
        <div className='basic'>
            <Banner movie={popularMovies.results[0]} />
            <div className="slide-wrapper">
                <h3>Popular Movie</h3>
                <MovieSlide movies={popularMovies} />
                <h3>Top rated Movie</h3>
                <MovieSlide movies={topRatedMovies} />
                <h3>upcoming Movie</h3>
                <MovieSlide movies={upcomingMovies} />
            </div>
            <div className="bottom-area"/>
        </div>
    )
}

export default Home