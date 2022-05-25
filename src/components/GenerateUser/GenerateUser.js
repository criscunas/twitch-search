import "./GenerateUser.scss";
import { v4 as uuid } from "uuid";
import { Paper, CardHeader, Avatar, Grid } from "@material-ui/core";

export const GenerateUser = ({ user }) => {
 const { profile_image_url, display_name } = user;

 return (
  <div className="user" >
  <Paper className="user__container" elevation={2}>
   <Grid container spacing={1} className = "user__grid">
    <Grid item xs={2}>
      <div className="user__grid_image">
      <Avatar src={profile_image_url} />
      </div>
    </Grid>
    <Grid item xs={6}>
     <p className="user__grid_name"> {display_name} </p>
    </Grid>
    <Grid item xs={4}>
      <p className="user__grid_followers"> 111111111 </p>
   </Grid>
   </Grid>
  </Paper>
  </div>
 );
};
