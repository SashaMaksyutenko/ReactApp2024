import React from "react";
import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";
class MainBody extends React.Component {
  render() {
    const whatWeWillBuild = "React JS";
    const lectureCount = 3;
    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          We will build {whatWeWillBuild} App
          TaskOPedia! <br />
          Total Lecture - {lectureCount}
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        <div className="container row">Students Enrolled</div>
        <Student
          experience={2}
          name="Kris Walley"
          headshot="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGZhY2V8ZW58MHx8MHx8fDA%3D"
        >
          <StudentReview />
        </Student>
        <Student
          experience={5}
          name="Angel Patrice"
          headshot="https://images.unsplash.com/photo-1611695434398-4f4b330623e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZhY2V8ZW58MHx8MHx8fDA%3D"
        >
          <StudentReview />
        </Student>
        <Student
          experience={7}
          name="Rene Parker"
          headshot="https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGZhY2V8ZW58MHx8MHx8fDA%3D"
        />
      </div>
    );
  }
}
export default MainBody;