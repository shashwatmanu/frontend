
import { Container } from "@mui/material";
import { TaskManager } from "./components/TaskManager";
import { Nav } from "../src/components/Appbar";

const App = () => {
  return (
    <>
      <Nav />
      <Container maxWidth="lg">
        <TaskManager />
      </Container>
    </>
  );
};

export default App;