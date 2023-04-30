import {makeStyles} from '@mui/styles';

export default makeStyles((theme) => ({
    mainNav: {
        position: 'fixed',
        backgroundColor: '#fff',
        '& .MuiToolbar-root': {
            // backgroundColor: '#fff',
            backgroundColor: 'rgba(62, 108, 237, 0.7)',
            height: '80px',
            '& .MuiBox-root': {
                '& button': {
                    color: '#565656'
                }
            }
        }
    },
    clubLogo: {
        borderRadius: '0%'
    },
    myNavPaper: {
        backgroundColor: '#ffffffd6',
        borderRadius: '2rem',
        padding: '5px',
    },
    drawerButton: {
        '& div': {
            display: 'flex'
        }
    },
    loginButton: {
        backgroundColor: '#fff',
        borderRadius: '2rem',
        border: 'none',
        '&:hover': {
            backgroundColor: '#fff',
            border: 'none',
        }
    },
}))