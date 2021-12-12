const types = {
    SET_LOADING: "SET_LOADING",
    SET_ERROR_MESSAGE: "SET_ERROR_MESSAGE",
    SET_MOVIES_RESLT: "SET_MOVIES_RESLT",
    SET_FILTER_OPTION: "SET_FILTER_OPTION"
}

const initialState = {

    isLoading: false,
    errorMessage: '',

    /**
     * movie result
     */
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,

    filter_option: {}
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case types.SET_LOADING:
            return {
                ..._getCommonState(state),
                isLoading: action.payload
            }

        case types.SET_ERROR_MESSAGE:
            return {
                ..._getCommonState(state),
                errorMessage: action.payload
            }

        case types.SET_MOVIES_RESLT:
            const {
                page = 1,
                results = [],
                total_pages = 1,
                total_results = 0
            } = action

            return {
                ...state,
                page,
                results,
                total_pages,
                total_results
            }

        case types.SET_FILTER_OPTION:
            return {
                ...state,
                filter_option: action.payload
            }
        default:
            return {
                ..._getCommonState(state)
            }
    }
}

const _getCommonState = (state) => ({
    ...state,
    // isLoading: false,
    errorMessage: ''
})

export default Reducer;

/**
 *  actions
 * @param {*} state 
 * @returns 
 */

export const set_loading_state = (isLoading = false) => ({
    type: types.SET_LOADING,
    payload: isLoading
})

export const set_errorMessage = (message = '') => ({
    type: types.SET_ERROR_MESSAGE,
    payload: message
})

export const set_discovered_movies = ({
    page = 1,
    results = [],
    total_pages = 1,
    total_results = 0
}) => ({
    type: types.SET_MOVIES_RESLT,
    page,
    results,
    total_pages,
    total_results
})

export const set_filter_option = (option = {}) => ({
    type: types.SET_FILTER_OPTION,
    payload: option
})