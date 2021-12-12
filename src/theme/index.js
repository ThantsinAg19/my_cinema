import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#491C54',
            contrastText: '#e9e9ef'
        },
        secondary: {
            main: '#c43b23'
        },
    },
    typography: {
        button: {
            textTransform: 'none'
        },
        fontSize: 14,
        fontFamily: ['system-ui;']
    }
})

export default theme;