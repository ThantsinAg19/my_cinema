import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Search as SerachIcon
} from '@material-ui/icons'
import { Button, makeStyles, Paper } from '@material-ui/core';

import { OptionAction, DiscoverAction } from '../../module';
import FormControl, { Types } from '../../component/Formcontrol';

const useStyles = makeStyles({
    root: {
        marginLeft: 10,
        textAlign: 'left',
        padding: 10,
        border: '1px solid #e9e9ef'
    },
    sort_flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    button_div: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    button: {
        alignSelf: 'flex-end',
        marginRight: 5,
        marginTop: 20
    },

})

const SortOrder = [
    {
        value: 'asc',
        label: 'Asc',
    },
    {
        value: 'desc',
        label: 'Desc',
    }
]

/**
 * formik
 */
const INPUT_NAME = {
    with_genres: 'with_genres',
    sort_by: 'sort_by',
    sort_order: 'sort_order'

}
const initialValues = {
    with_genres: [],

    /**
     * default value
     */
    sort_by: 'popularity',
    sort_order: 'desc'
}

const ValidationSchema = Yup.object({
    with_genres: Yup.array(),
    sort_by: Yup.string(),
    sort_order: Yup.string()
})

const SideBar = ({
    genreOption = [],
    sortOption = []
}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        /**
         * fetch options 
         */
        dispatch(OptionAction.action_fetch_genre_option())
    }, [dispatch])

    const handleSubmit = async (data) => {
        let { with_genres, sort_by, sort_order } = data
        let payload = {
            page: 1,
            with_genres,
        }
        
        if (sort_by)
            payload.sort_by = `${sort_by}.${sort_order || 'desc'}`

        else payload.sort_by = 'popularity.desc'

        dispatch(DiscoverAction.action_discover_movies(payload))
    }

    return (
        <Paper className={classes.root}>
            <h3>Search your fav!</h3>
            <Divider/>
            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={handleSubmit}
            >
                {
                    _ => (
                        <>
                            <FormControl
                                name={INPUT_NAME.with_genres}
                                label='Genres'
                                control={Types.multi_select}
                                options={genreOption}
                            />
                            <div className={classes.sort_flex}>
                                <FormControl
                                    name={INPUT_NAME.sort_by}
                                    label='Sort by'
                                    control={Types.select}
                                    options={sortOption}
                                />
                                <FormControl
                                    name={INPUT_NAME.sort_order}
                                    label='Order by'
                                    control={Types.select}
                                    options={SortOrder}
                                />
                            </div>
                            <Divider/>
                            <div className={classes.button_div}>
                                <Button
                                    color="secondary"
                                    variant='contained'
                                    className={classes.button}
                                    onClick={_.resetForm}
                                >
                                    Clear
                                </Button>
                                <Button
                                    color="primary"
                                    variant='contained'
                                    className={classes.button}
                                    onClick={_.submitForm}
                                >
                                    <SerachIcon fontSize='small' />
                                    Search
                                </Button>
                            </div>
                        </>

                    )
                }

            </Formik>
        </Paper>
    )
}

export default SideBar;

const Divider = () => <div style={{borderTop: '2px solid #e9e9ef'}}/>