import {Fragment} from "react";
import {MovieDetails} from "../model/types/MovieDetails";
import {HStack, VStack} from "../../../shared/UI/Stack";
import {useSelector} from "react-redux";
import {getExpandableFiltersGenres} from "../../ExpandableFilters/model/selectors/getExpandableFilters";

import classes from "./MovieDetails.module.scss";
import {BrowserView, MobileView} from "react-device-detect";
interface MovieDetailsCardProps {
    movie: MovieDetails
}
export const MovieDetailsCard = (props: MovieDetailsCardProps) => {
    const {movie} = props
    const {
        poster_path,
        genre_ids,
        title,
        overview,
        release_date,
    } = movie

    const genres = useSelector(getExpandableFiltersGenres);

    return (
        <>
            <BrowserView className={classes.fullWidth}>
                <HStack max gap='20' align='start' className={classes.MovieDetails}>
                    <img src={'assets/sherlock.jpg'} alt="movie picture"/>
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