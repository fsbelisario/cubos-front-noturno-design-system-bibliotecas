import useStyles from './style';
import Alert from '@material-ui/lab/Alert';

function SearchAlert() {
    const classes = useStyles();

    return (
        < div className={classes.root} >
            <Alert severity="warning">Pokemon não encontrado!</Alert>
        </div >
    );
}

export default SearchAlert;