import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { translateWords } from "../utils/features";

const Learning = () => {
  const [count, setCount] = useState<number>(0);
  const [audioSrc, setAudioSrc] = useState<string>("");
  const audioRef = useRef(null);
  const params = useSearchParams()[0].get("language") as LangType;
  const navigate = useNavigate();

  const handleNext = (): void => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    translateWords('hi').then(()=>{
      console.log('worked');
    })
  }, []);

  return (
    <Container maxWidth="sm" sx={{ padding: "1rem" }}>
      <Button
        onClick={
          count === 0 ? () => navigate("/") : () => setCount((prev) => prev - 1)
        }
      >
        <ArrowBack />
      </Button>
      <Typography m={"2rem 0"}>Learning Made Easy</Typography>
      <Stack direction={"row"} spacing={"1rem"}>
        {/* word */}
        <Typography variant="h4">
          {count + 1} - {"Sample"}
        </Typography>

        {/* meaning */}
        <Typography color={"blue"} variant="h4">
          : {"Lol"}
        </Typography>

        <Button sx={{ borderRadius: "50%" }}>
          <VolumeUp />
        </Button>
      </Stack>

      <Button
        sx={{
          margin: "3rem 0",
        }}
        variant="contained"
        fullWidth
        onClick={count === 7 ? () => navigate("/quiz") : handleNext}
      >
        {count === 7 ? "Text" : "Next"}
      </Button>
    </Container>
  );
};

export default Learning;