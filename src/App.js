import { Typography, Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Typography variant="h5">Material UI</Typography>
      {/* Box is being used in the following code. It works like a container 
      -> we use component="as div, or section", whatever we want to use we will simply write in it.
      */}
      <Box width={300} boxShadow={1} p={3} component="section">
        <h1>Get Started</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </Box>
    </div>
  );
}

export default App;
