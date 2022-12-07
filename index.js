const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");
const category = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("Learn Dev API is Running");
});

app.get("/course-category", (req, res) => {
  res.send(category);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const category_course = courses.filter((course) => course.id === id);
  res.send(category_course);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find((course) => course.id === id);
  res.send(selectedCourses);
});

app.listen(port, () => {
  console.log(`Learn Dev Server running on port ${port}`);
});
