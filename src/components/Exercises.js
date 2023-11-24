import React, { useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  console.log("ex", exercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt={"50px"} p={"20px"}>
      <Typography variant="h3" mb={"46px"}>
        Showing Results
      </Typography>

      <Stack
        direction={"row"}
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {exercises.map((exercise, index) => {
          return (
            <p key={index}>
              {<ExerciseCard key={index} exercise={exercise} />}
            </p>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Exercises;
