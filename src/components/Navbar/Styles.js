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
    drawerButton: {
        '& div': {
            display: 'flex'
        }
    }
}))