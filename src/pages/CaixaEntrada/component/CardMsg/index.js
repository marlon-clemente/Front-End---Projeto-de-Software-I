import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import LinkIcon from '@material-ui/icons/Link';
import ShareIcon from '@material-ui/icons/Share';
import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Grid item xs>
        <Card className={classes.root}>

            <CardHeader
                title="[Sala com problema]"
                subheader="[dd/mm/aaaa]"
            />

            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
            />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          [Identificação do patrimonio]
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Tooltip title="Quem solicitou?">
            <IconButton>
                <PersonIcon />
            </IconButton>
        </Tooltip>
        
        <Tooltip title="Relacionar a um problema">
            <IconButton>
                <LinkIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Mostrar mais">
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                >
                <ExpandMoreIcon />
            </IconButton>
        </Tooltip>

      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            [Descrição completa do relato]
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  );
}
