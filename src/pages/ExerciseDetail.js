import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisDbeUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exercisDbeUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      setExerciseDetail(exerciseDetailData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
