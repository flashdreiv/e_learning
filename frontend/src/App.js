import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Switch, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Login/SignupPage";
import HomePage from "./pages/Home/HomePage";
import ProtectedRoute from "./components/common/ProtectedRoute";
import ProtectedCourseRoute from "./components/common/ProtectedCourseRoute";
import AdminOnlyRoute from "./components/common/AdminOnlyRoute";
import ProfilePage from "./pages/Profile/ProfilePage";
import StudentListPage from "./pages/Students/StudentListPage";
import StudentProfilePage from "./pages/Students/StudentProfilePage";
import CategoryList from "./pages/Categories/CategoryList";
import CategoryDetail from "./pages/Categories/CategoryDetail";
import ResultList from "./pages/Results/ResultList";
import ResultDetail from "./pages/Results/ResultDetail";
import Navbar from "./components/common/Navbar";

//Admin Pages
import AdminCategoryList from "./pages/Admin/Categories/AdminCategoryList";
import AdminCategoryDetail from "./pages/Admin/Categories/AdminCategoryDetail";
import AdminCategoryAdd from "./pages/Admin/Categories/AdminCategoryAdd";
import AdminQuestionAdd from "./pages/Admin/Questions/AdminQuestionAdd";
import AdminQuestionList from "./pages/Admin/Questions/AdminQuestionList";
import AdminQuestionEdit from "./pages/Admin/Questions/AdminQuestionEdit";
import AdminPage from "./pages/Admin/AdminPage";
/*
TODO:

Refactor AuthForm and SignUpForm into a single form
Create email format validation on front end
MinValue validation for sign up fields in front-end
No frontend success message yet on api calls

Admin Category Page list pagenumber pagination with pills
Unique together validation in question
Reuse admin category list into admin question list 
Refactor Question ADD/EDIT FORM
Refactor pagination for list
*/
const App = () => {
  const location = useLocation();

  return (
    <div className="ui container">
      {(location.pathname && location.pathname === "/signup") ||
      location.pathname === "/signin" ? null : (
        <Navbar />
      )}
      <Switch>
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute path="/profile" component={ProfilePage} />
        <ProtectedRoute exact path="/students" component={StudentListPage} />
        <ProtectedRoute
          path="/students/profile/:id"
          component={StudentProfilePage}
        />
        <ProtectedRoute exact path="/results" component={ResultList} />
        <ProtectedCourseRoute path="/results/:id" component={ResultDetail} />
        <ProtectedRoute exact path="/categories" component={CategoryList} />
        <ProtectedCourseRoute
          path="/categories/:id"
          component={CategoryDetail}
        />
        <AdminOnlyRoute exact path="/admin" component={AdminPage} />
        <AdminOnlyRoute
          exact
          path="/admin/categories/"
          component={AdminCategoryList}
        />
        <AdminOnlyRoute
          path="/admin/categories/add"
          component={AdminCategoryAdd}
        />
        <AdminOnlyRoute
          path="/admin/categories/:id/question/add"
          component={AdminQuestionAdd}
        />
        <AdminOnlyRoute
          exact
          path="/admin/categories/:categoryId/question/edit/:questionId"
          component={AdminQuestionEdit}
        />
        <AdminOnlyRoute
          path="/admin/categories/:id/questions"
          component={AdminQuestionList}
        />
        <AdminOnlyRoute
          exact
          path="/admin/categories/:id"
          component={AdminCategoryDetail}
        />
        <Route path="/signin" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </div>
  );
};

export default App;
