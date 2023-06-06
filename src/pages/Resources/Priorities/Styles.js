import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    priority: {
        '& .MuiPaper-root': {
            display: 'flex',
            alignItems: 'center',
            textAlign: 'justify',
            padding: '2rem 0.7rem',
            backgroundColor: 'rgba(29, 60, 122, 0.85)',
            color: 'white',
            
        },
        '& .MuiBox-root': {
            justifyContent: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem'
        }
    }
}))