import { Typography } from "@mui/material";
import {Container } from "@mui/system";
import { Box } from "@mui/system";
import { Routes,Route } from "react-router-dom";
import FinalScore from "./Pages/FinalScore";
import Questions from "./Pages/Questions";
import Settings from "./Pages/Settings";

function App() {
  return (
<Routes>
<Container maxWidth="sm">
<Box textAlign="center" mt={5}>
<Route  path="/" element={<Settings/>}>
  <Typography variant="h2" fontWeight="bold"></Typography>
</Route>
<Route path="/questions" element={<Questions/>}></Route>
<Route path="/score" element={<FinalScore/>}></Route>
</Box>
</Container>
</Routes>
  );
}

export default App;
