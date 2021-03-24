import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import React  from 'react'
import {  useSelector } from 'react-redux'
import styles from "./dashboard.module.css"

const useStyles=makeStyles((theme)=>({
    root:{
        flexGrow:1,
        minHeight:250,
    },
    control: {
        padding: theme.spacing(4),
      }
}))

const DisplayCard = (props) => {
  
    const data=useSelector(state=>state.pincodeData)
     
    const isLoading=useSelector(state=>state.loading)
    const classes=useStyles()
    console.log(data )
    return (
        <Grid item container style={{ justifyContent: "center" }}>
      {isLoading ? (
        <h3>...isLoading</h3>
      ): data.length!==0?  (
         
        data && data.map((item) => <Grid item xs={10} md={4} lg={4} className={classes.control}  key={item.id}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">Insitution Name :{item.InsitutionName}</Typography>
                    <Typography color="textSecondary">Branch Name : {item.BranchName}</Typography>
                    <Typography color="textSecondary">Address : {item.Address}</Typography>
                    <Typography color="textSecondary">City : {item.City}</Typography>
                    <Typography color="textSecondary">Contact Number : {item.ContactNumber.join(", ")}</Typography>
                    <Typography color="textSecondary">Branch Incharge : {item.BranchIncharge}</Typography>
                    <Typography color="textSecondary">Pincode covered : {item.Pincodecovered.join(", ")}</Typography>
                </CardContent>
            </Card>
        </Grid>
        )
      ):<h2 className={styles.badluck}>Bad Bad Luck, No Donut For You!!</h2>  }
        
    </Grid>
    )
}

export default DisplayCard
