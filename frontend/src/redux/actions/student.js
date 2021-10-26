import {
  FETCH_USER_DETAILS,
  UPDATE_USER_DETAILS,
  FETCH_STUDENT_LIST,
  FETCH_STUDENT_DETAIL,
  FOLLOW_STUDENT,
  FETCH_STUDENT_LESSONS,
  FETCH_STUDENT_LESSON,
} from "./types";
import api from "../../api/api";
const getUserDetails = (id) => async (dispatch, getState) => {
  const { userData } = getState().auth;
  const response = await api.get(`/profile/${id ? id : userData.user_id}/`);
  dispatch({ type: FETCH_USER_DETAILS, payload: response.data });
};

const updateUserDetails = (formValues) => async (dispatch, getState) => {
  const { userData } = getState().auth;
  const response = await api.patch(`/profile/${userData.user_id}/`, formValues);
  dispatch({ type: UPDATE_USER_DETAILS, payload: response.data });
};

const getStudentList = (limit, offset) => async (dispatch) => {
  const response = await api.get("/students/", {
    params: {
      limit: limit,
      offset: offset,
    },
  });
  dispatch({ type: FETCH_STUDENT_LIST, payload: response.data });
};
const getStudentDetail = (id) => async (dispatch) => {
  const response = await api.get(`/students/follow/${id}`);
  dispatch({ type: FETCH_STUDENT_DETAIL, payload: response.data });
};
const followStudent = (id) => async (dispatch) => {
  const response = await api.post(`/students/follow/${id}`, null);
  dispatch({ type: FOLLOW_STUDENT, payload: response.data });
};

const getStudentLessons = () => async (dispatch) => {
  api.get(`/students/lessons/`).then((response) => {
    dispatch({ type: FETCH_STUDENT_LESSONS, payload: response.data });
  });
};

const getStudentLesson = (id) => async (dispatch) => {
  api.get(`/students/lessons/${id}`).then((response) => {
    dispatch({ type: FETCH_STUDENT_LESSON, payload: response.data });
  });
};

export {
  getUserDetails,
  updateUserDetails,
  getStudentList,
  getStudentDetail,
  followStudent,
  getStudentLessons,
  getStudentLesson,
};
