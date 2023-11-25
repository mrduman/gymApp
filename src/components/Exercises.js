import React, { useEffect, useState } from "react";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const currentExercises = exercises.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

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
        {currentExercises.map((exercise, index) => {
          return (
            <p key={index}>
              {<ExerciseCard key={index} exercise={exercise} />}
            </p>
          );
        })}
      </Stack>
      <Stack mt={"100px"} alignItems={"center"}>
        {exercises.length > 10 && (
          <Pagination
            page={currentPage}
            count={Math.ceil(exercises.length / pageSize)}
            onChange={paginate}
            color="primary"
            shape="rounded"
            size="large"
            defaultPage={1}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

/** Second solution of pagination
   *   const indexOfLastExercises = currentPage * pageSize;
       const indexOfFirstExercises = indexOfLastExercises - pageSize;
       const currentExercises = exercises.slice(
       indexOfFirstExercises,
       indexOfLastExercises
  );
   */
