const types = {
    SET_GENRE_OPTION: "SET_GENRE_OPTION",
    SET_SUBTITLE_OPTION: "SET_SUBTITLE_OPTION",
}

const sortOption = [
    {
        value: 'popularity',
        label: 'Popularity'
    },
    {
        value: 'release_date',
        label: 'Release Date'
    },
    {
        value: 'revenue',
        label: 'Revenue'
    },
    {
        value: 'primary_release_date',
        label: 'Primary release date'
    },
    {
        value: 'original_title',
        label: 'Original Title'
    },
    {
        value: 'vote_average',
        label: 'Vote average'
    },
    {
        value: 'vote_count',
        label: 'Vote count'
    },
];

export const intitalState = {
    option_genre: [],
    option_subTitles: [],
    option_sortBy: sortOption,
}

const Reducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.SET_GENRE_OPTION:
            return {
                ...state,
                option_genre: action.payload
            }

        case types.SET_SUBTITLE_OPTION:
            return {
                ...state,
                option_subTitles: action.payload
            }

        default:
            return state;
    }
}

export default Reducer;

/**
 * actions
 * @param {*} data 
 * @returns 
 */
export const set_genre_option = (data = []) => ({
    type: types.SET_GENRE_OPTION,
    payload: data
})

export const set_subtitle_option = (data = []) => ({
    type: types.SET_SUBTITLE_OPTION,
    payload: data
})