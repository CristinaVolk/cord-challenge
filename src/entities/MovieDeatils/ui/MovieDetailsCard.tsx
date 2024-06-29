import {Fragment, useEffect} from "react";
import {useSelector} from "react-redux";
import {BrowserView, MobileView} from "react-device-detect";

import {MovieDetails} from "../model/types/MovieDetails";
import classes from "./MovieDetails.module.scss";
import {getExpandableFiltersGenres} from "../../../features/ExpandableFilters/model/selectors/getExpandableFilters";
import {HStack, VStack} from "../../../shared/UI/Stack";
import {getMoviesDetailsPicture} from "../model/selectors/getMovieDetailsSelector";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {fetchMoviePicture} from "../model/services/fetchMoviePicture";

interface MovieDetailsCardProps {
    movie: MovieDetails
}
export const MovieDetailsCard = (props: MovieDetailsCardProps) => {
    const {movie} = props
    const {
        backdrop_path,
        genre_ids,
        title,
        overview,
        release_date,
    } = movie

    const picturePath = useSelector(getMoviesDetailsPicture)
    const genres = useSelector(getExpandableFiltersGenres)
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(fetchMoviePicture(backdrop_path))
    }, [dispatch])

    return (
        <>
            <BrowserView className={classes.fullWidth}>
                <HStack max gap='20' align='start' className={classes.MovieDetails}>
                    {picturePath && <img src={picturePath} alt="movie picture"/>}
                    <VStack gap='20'>
                        <h2 className={classes.title}>{title}</h2>
                        <h5 className={classes.genres}>{
                            genres
                                .filter(genre => genre_ids.indexOf(genre.id) !== -1)
                                .map(genre => <Fragment key={genre.id}> | {genre.name}</Fragment>)
                        }</h5>
                        <span className={classes.overview}>{overview}</span>
                        <span>{release_date}</span>
                    </VStack>
                </HStack>
            </BrowserView>

            <MobileView className={classes.fullWidth}>
                <HStack max gap='20' align='start' className={classes.MovieDetailsMobile}>
                    <img src={'assets/sherlock.jpg'} alt="movie picture" />
                    <VStack gap='20'>
                        <h2 className={classes.title}>{title}</h2>
                        <h6 className={classes.genres}>{
                            genres
                                .filter(genre => genre_ids.indexOf(genre.id) !== -1)
                                .map(genre => <Fragment key={genre.id}> | {genre.name}</Fragment>)
                        }</h6>
                        <span>{overview}</span>
                        <span>{release_date}</span>
                    </VStack>

                </HStack>
            </MobileView>
        </>
    )
}