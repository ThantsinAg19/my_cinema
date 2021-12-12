import { connect } from "react-redux";
import { Home } from '../pages';

export default connect(
    (state) => ({
        isLoading:state.movie.isLoading,
        errorMessage:state.movie.errorMessage,
        
        page:state.movie.page,
        results:state.movie.results,
        total_pages:state.movie.total_pages,
        total_results:state.movie.total_results,

        /**
         * option
         */
        genreOption: state.option.option_genre,
        sortOption : state.option.option_sortBy
    }),
    null
)(Home);