import { connect } from "react-redux";
import {  SideBar } from '../pages';

export default connect(
    (state) => ({
        /**
         * option
         */
        genreOption: state.option.option_genre,
        sortOption : state.option.option_sortBy
    }),
    null
)(SideBar);