import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ALL_CLASSES } from "../store/classes";
import { json } from "react-router-dom";

const BACKEND_URL = "http://localhost:5001";

export async function fetchGet(
  url,
  signal,
  errorMsg = "Error while fetching data"
) {
  const response = await axios.get(url, { signal });
  if (response.status !== 200)
    throw new json({ message: errorMsg }, { status: response.status });
  return response.data;
}
export async function fetchQuestion({ signal, id }) {
  return fetchGet(
    `${BACKEND_URL}/questions/${id}`,
    signal,
    "Error while fetching question data"
  );
}

export async function fetchAllQuestions({ signal }) {
  return fetchGet(
    `${BACKEND_URL}/questions`,
    signal,
    "Error while fetching all questions"
  );
}

export async function fetchQuestionsForClass({ signal, classId }) {
  return fetchGet(`${BACKEND_URL}/${classId}/questions`, signal);
}

export async function fetchFirstQuestion({ signal, classId }) {
  return fetchGet(
    `${BACKEND_URL}/${classId}/questions/first`,
    signal,
    "Error while fetching question data"
  );
}
export async function fetchNextQuestion({ signal, id }) {
  return fetchGet(
    `${BACKEND_URL}/questions/${id}/next`,
    signal,
    "Error while fetching next question data"
  );
}

export async function fetchRandomQuestion({ signal, classId }) {
  return fetchGet(
    `${BACKEND_URL}/${classId}/question/random`,
    signal,
    "Error while fetching random question data"
  );
}

export function getClassIdFromUrl(url) {
  return new URL(url).searchParams.get("classId") || ALL_CLASSES[0];
}

export const queryClient = new QueryClient();
