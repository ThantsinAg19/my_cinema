import React from 'react'
import { Pagination } from "@material-ui/lab"
import { DiscoverAction } from '../../module';
import { useSelector } from 'react-redux';

const Mypagination = ({
    current_page = 1,
    total_pages = 1,
    dispatch
}) => {

    const filter_option = useSelector(state => state?.movie?.filter_option)

    const onChagePage = (event, page) => {
        if (Number(page) !== Number(current_page))
            dispatch(DiscoverAction.action_discover_movies({
                ...filter_option,
                page: page
            }));
    }

    return (
        <div style={{
            marginTop: 10
        }}>
            <Pagination
                color='secondary'
                page={current_page}
                count={total_pages}
                size='large'
                shape="rounded"
                onChange={onChagePage}
                style={{
                    alignSelf: 'flex-end',
                    float: 'right',
                    width: 'auto',
                    border: '1px solid #e9e9ef',
                    padding: 5
                }}
            />
        </div>
    )
}

export default Mypagination