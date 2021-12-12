import React from 'react';
import { Box, Card, CardContent, Paper } from "@material-ui/core";
import { Skeleton } from '@material-ui/lab';

const MovSkeleton = ({
    classes = {}
}) => {
    return (
        <Paper className={classes.card_container}>
            {
                Array.from(Array(20).keys()).map((index) => (
                    <Card
                        key={index}
                        className={classes.card_style}
                    >
                        <Box>
                            <Skeleton height={270} variant='rect'/>
                        </Box>
                        <CardContent className={classes.card_content}>
                            <b>
                                <Skeleton variant='rect'/>
                            </b>
                            <br />
                            <Skeleton height={20} width={'40%'}/>
                        </CardContent>
                    </Card>
                ))
            }
        </Paper>
    )
}

export default MovSkeleton;