import useStyles from './style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SearchForm({ search, setSearch, handleSearch }) {
    const classes = useStyles();

    return (
        <form
            className={classes.root}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Search new Pokemon"
                variant="outlined"
                value={search}
                onChange={e => setSearch(e.target.value.toLocaleLowerCase())}
            />
            <Button
                variant="contained"
                color="secondary"
                onClick={handleSearch}
            >
                Search
            </Button>
        </form>
    );
}

export default SearchForm;