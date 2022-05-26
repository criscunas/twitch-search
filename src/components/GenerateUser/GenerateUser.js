import "./GenerateUser.scss";
import { Paper, Grid } from "@material-ui/core";

export const GenerateUser = ({channel}) => {
 
  const {display_name, followers, err} = channel
  
  return (
    <div className="user">
      <Paper className="user__container" elevation={3} style = {{backgroundColor:"hsla(0,0%,100%,.05)"}}>
        {err ? 
          <p className= "user__error"> User not found </p>
          :
          <Grid container spacing={1} className="user__grid">
            <Grid item xs={6}>
              <p className="user__grid_header"> Channel </p> <br/>
              <p className="user__grid_name"> {display_name} </p>
            </Grid>
            <Grid item xs={6}>
              <p className="user__grid_header"> Followers</p> <br/>
              <p className="user__grid_followers"> {followers} </p>
            </Grid>
          </Grid>
        }
      </Paper>
    </div>
 );
};
