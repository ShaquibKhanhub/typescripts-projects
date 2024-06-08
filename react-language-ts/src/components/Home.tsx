import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "Japanese",
    code: "ja",
  },
  {
    name: "Hindi",
    code: "hi",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "French",
    code: "fr",
  },
];

const Home = () => {
  const navigate = useNavigate()
  const handleSelectLanguage=(language:string):void=>{
    navigate(`/learn?language=${language}`)
  }
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" p={"2rem"} textAlign={"center"}>
        Welcome, Begin your journey of learning.
      </Typography>
      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {languages.map((item, i) => (
          <Button onClick={()=>handleSelectLanguage(item.code)} key={i} variant="contained">{item.name}</Button>
        ))}
      </Stack>

      <Typography textAlign={"center"}>
        Choose one language from above
      </Typography>
    </Container>
  );
};

export default Home;
