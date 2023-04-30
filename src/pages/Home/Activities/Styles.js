import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    activitiesCont: {
        background: '#112E57'
    },
    activeH: {
        color: 'white',
        textAlign: 'center'
    },
    imageSlider: {
        '& article': {
            width: '100% !important',
            height: '100% !important',
            '& section': {
                '& div': {
                    '& div': {
                        margin: 'auto',
                        maxWidth: '450px !important',
                        minWidth: '50px !important',
                    },
                },
            },
        },
    },
    activityCarouselDiv: {
        position: 'relative',
        '& div': {
        '& .thumbnails': {
            alignItems: 'normal'
        }
        }
    }
}))