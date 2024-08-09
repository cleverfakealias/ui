import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SkillsSection from "./components/SkillsSection";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const skills: string[] = [
    "Java",
    "Python",
    "Typescript",
    "Node.js",
    "React.js",
    "Vue.js",
    "Docker",
    "Cloud Infrastructure",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h3">Benjamin Hickman</Typography>
            <Typography variant="h4">Software Engineer.</Typography>
            <Typography variant="h5">
              Thinker. Maker. Man of many hats.
            </Typography>
            <br />
            <div>
              <a
                href="https://github.com/cleverfakealias"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon /> GitHub
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/ben-hickman-02978819b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </Grid>

          <Grid item xs={4} className="text-right">
            <img
              src={"/me.jpg"}
              alt="Me"
              className="my-photo"
              style={{ width: "50%" }}
            />
          </Grid>
        </Grid>
        <div className="my-5 text-center">
          <SkillsSection skills={skills} />
        </div>
        <br />
        <Typography paragraph={true}>
          Please feel free to explore my work, unfortunately, most of it I can't
          actually show you. Reach out if you believe we could create something
          great together.
        </Typography>
        <br />
        <ContactForm />
      </div>
    </main>
  );
}
