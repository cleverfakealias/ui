import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const SkillsSection = ({ skills }: { skills: string[] }) => (
  <div className="my-5 text-center">
    <Typography variant="h2" className="my-5">
      Skills Snapshot
    </Typography>
    <Grid container spacing={2}>
      {skills.map((skill, index) => (
        <Grid item xs={2} key={skill}>
          <Paper elevation={3}>
            <Typography variant="body1" align="center">
              {skill}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default SkillsSection;
