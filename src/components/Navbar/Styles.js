import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    mainNav: {
        position: 'fixed',
        backgroundColor: '#fff0',
        '& .MuiToolbar-root': {
            backgroundColor: '#ffffffab',
            // height: '80px',
            '& .MuiBox-root': {
                '& button': {
                    color: '#4b4b4b'
                },
                '& button:hover':{
                    color:'white'
                }
            }
        },
       
    },
    clubLogo: {
        borderRadius: '0%'
    },
    drawerButton: {
        color: '#4b4b4b',
        '& div': {
            display: 'flex'
        }
    }
}))