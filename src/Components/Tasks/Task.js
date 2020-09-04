import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    margin: 3,
  },
  title: {
    fontSize: 15,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
  },
  time: {
    fontSize: 14,
  },
});

export default function Task(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <div className={classes.content}>
        <Checkbox onChange={props.task.handleComplete} color="primary" />
        <Typography className={classes.title}>{props.task.task}</Typography>
        <Typography className={classes.time}>{props.task.time}</Typography>
      </div>
    </Card>
  );
}
