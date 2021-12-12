import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
    Card,
    CardContent,
    makeStyles,
    Paper
} from "@material-ui/core";
import {
    Star,
    StarHalf,
    StarOutline
} from '@material-ui/icons'

import { DiscoverAction } from "../../module";
import { BASE_IMG_URL } from "../../httpService/httpService";
import Mypagination from "./pagination";
import MovSkeleton from "./skeleton";

const useStyles = makeStyles({
    root: {
        // padding: 10
        display: 'flex',
        flexDirection: 'column'
    },
    card_container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        border: '1px solid #e9e9ef',
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 20
    },
    card_style: {
        border: '1px solid #e9e9ef',
        width: 250,
        maxWidth: 250,
        margin: 10
    },
    card_content: {
        textOverflow: 'ellipsis',
        borderTop: '1px solid #e9e9ef',
        textAlign: 'left'
    },
    media_cotainer: {
        position: 'relative'
    },
    card_media: {
        height: 270,
    },
    voting_box: {
        fontSize: 12,
        padding: 5,
        right: 0,
        position: 'absolute',
    }
})


const HomePage = ({
    isLoading = true,
    errorMessage = '',
    page = 1,
    results = [],
    total_pages = 0,
}) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {

        /**
         * fetch data by default movies
         */
        dispatch(DiscoverAction.action_discover_movies({
            page: 1
        }));

    }, [dispatch])

    if (isLoading)
        return <MovSkeleton classes={classes} />

    return (
        <div className={classes.root}>
            <Paper className={classes.card_container}>
                {
                    results.map((mov, index) => (
                        <Card
                            key={index + mov?.title}
                            className={classes.card_style}
                        >
                            <div className={classes.media_cotainer}>

                                <VotedStar
                                    vote_avg={Number(mov?.vote_average)}
                                    className={classes.voting_box}
                                />
                                <img
                                    src={`${BASE_IMG_URL}/t/p/w220_and_h330_face${mov?.poster_path}`}
                                    className={classes.card_media}
                                    alt={`${mov?.original_title}`} />
                            </div>
                            <CardContent className={classes.card_content}>
                                <b>
                                    {mov?.title}
                                </b>
                                <br />
                                <span style={{ fontSize: 13 }}>
                                    {mov?.release_date}
                                </span>
                            </CardContent>
                        </Card>
                    ))
                }
            </Paper>
            <Mypagination
                current_page={page}
                total_pages={total_pages}
                dispatch={dispatch}
            />
        </div>
    )

}

export default HomePage;

const IconFontSize = 16
const IconColor = "primary"
const VotedStar = ({
    vote_avg = 0,
    className = ""
}) => {
    let icon = <StarHalf
        fontSize="small"
        color={IconColor}
        style={{ fontSize: IconFontSize }} />

    if (vote_avg >= 1 && vote_avg <= 4)
        icon = <StarOutline
            fontSize="small"
            olor={IconColor}
            style={{ fontSize: IconFontSize }} />

    else if (vote_avg > 7)
        icon = <Star
            fontSize="small"
            color={IconColor}
            style={{ fontSize: IconFontSize }} />

    return (
        <Paper className={className}>
            <span>{vote_avg}</span>{'  '}{icon}
        </Paper>
    )

}