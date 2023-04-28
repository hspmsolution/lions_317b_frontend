import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    mainNav: {
        position: 'fixed',
        backgroundColor: '#fff0',
        '& .MuiToolbar-root': {
            backgroundColor: '#ffffffab',
            height: '80px',
            '& .MuiBox-root': {
                '& button': {
                    color: '#4b4b4b'
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
    }
}))