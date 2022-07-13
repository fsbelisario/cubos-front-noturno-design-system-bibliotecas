import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        width: 180,
        height: 354,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    cardTitle: {
        height: 10,
        color: 'black',
        fontWeight: 'fontWeightBold'
    },
    media: {
        width: '100%',
        height: 'autoHeight'
    },
    cardContent: {
        padding: 5,
        height: 'autoHeight',
        textAlign: 'left'
    },
    contentTitle: {
        color: 'black'
    },
    contentText: {
        fontSize: 14,
        display: 'flex',
        flexDirection: 'column'
    }
}));