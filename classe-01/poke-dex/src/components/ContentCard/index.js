import useStyles from './style';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function ContentCard({ name, image, abilities }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.cardTitle}
                title={name}
            />
            <CardMedia
                className={classes.media}
                component="img"
                image={image}
                title={name}
            />
            <CardContent className={classes.cardContent}>
                <Typography
                    className={classes.contentTitle}
                    variant="h6"
                >
                    Abilities
                </Typography>

                {abilities && abilities.map(ability => (
                    <Typography
                        className={classes.contentText}
                        variant="body2"
                        color="textSecondary"
                        key={ability.ability.name}
                    >
                        {ability.ability.name}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
}

export default ContentCard;