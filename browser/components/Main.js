import React from "react";
import axios from "axios";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      singleStudent: {}
    };
  }
  async componentDidMount() {
    const { data } = await axios.get("/student");
    this.setState({
      students: data
    });
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <ul>
          {this.state.students.map(student => {
            return <li key={student.id}>{student.fullName}</li>;
          })}
        </ul>
      </div>
    );
  }
}
