import { 
    ExpansionPanel, 
    ExpansionPanelDetails, 
    ExpansionPanelSummary, 
    ImageList,
    ImageListItem,
    Typography 
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import BedroomI from '../../Media/girls_bedroom_1.png';
import Building from '../../Media/building_1.2.png';
import Hammer from '../../Media/hammer_01.png';

function Expansions (props) {
    const { classes } = props;
    const itemData = [
        {
          img: BedroomI,
          title: 'Bedroom I',
        },
        {
          img: Building,
          title: 'Illuminated Building I',
        },
        {
          img: Hammer,
          title: 'Hammer',
        },
      ];
    return (
        <div className={classes.expansionDiv}>
             <ExpansionPanel className={classes.panelDetails1}>
        <ExpansionPanelSummary className={classes.summary}>
          <Typography>Software</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panelDetails2}>
        <ExpansionPanelSummary className={classes.summary}>
          <Typography>Art & Graphics</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panelDetails3}>
        <ExpansionPanelSummary className={classes.summary}>
          <Typography>Writings</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
        </div>
    )
}

const styles = {
    expansionDiv: {
        paddingTop: '10px',
    },
    panelDetails1: {
        border: '3px solid #636B46',
        width:'70%',
    },
    panelDetails2: {
        border: '3px solid #636B46',
        width:'65%',
    },
    panelDetails3: {
        border: '3px solid #636B46',
        width:'60%',
    },
    summary: {
        backgroundColor: '#636B46',
        color: '#E9E7DA',
    }
}
export default withStyles(styles)(Expansions);