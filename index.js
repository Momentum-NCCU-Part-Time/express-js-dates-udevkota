const express = require("express");
const dayjs = require("dayjs");
const port = 3000;

const app = express();
let currentDate = new Date();

app.get("/api/dates/today", (req, res) => {
  const todayDate = dayjs().format("dddd MMM D, YYYY");
  // res.json({ date: })
  res.send(`<h1>${todayDate}</h1>`);
});

app.get("/api/dates/tomorrow", (req, res) => {
  const tomorrowDate = dayjs(currentDate.setDate(currentDate.getDate() + 1)).format("dddd MMM D, YYYY");
  res.send(`<h1>${tomorrowDate}</h1>`);
});

app.get("/api/dates/yesterday", (req, res) => {
  const yesterdayDate = dayjs(currentDate.setDate(currentDate.getDate() - 1)).format("dddd MMM D, YYYY");
  res.send(`<h1>${yesterdayDate}</h1>`);
});

app.get("/api/day-of-week/:year/:month/:day", (req, res) => {
  const input = `${req.params.year}-${req.params.month}-${req.params.day}`;
  const dayOfWeek = dayjs(input).format("dddd");
  res.send(`<h1>${dayOfWeek}</h1>`);
  //test /api/day-of-week/2024/1/16
});

app.get("/api/current-time", (req, res) => {
  const current24Time = dayjs().format('H:mm:s')
  res.send(`<h1>${current24Time}</h1>`);
});

app.get("/api/current-time?format=12", (req, res) => {
  const formatVal = req.query.format;
  res.send(`<h1>${formatVal} </h1>`);

  // if (req.query.format === 12) {
  //   res.send(`<h1>this conditional is working </h1>`);
  // }
  // const current24Time = dayjs().format('H:m:s')
  // const input = `${req.params.year}-${req.params.month}-${req.params.day}`;
  // const dayOfWeek = dayjs(input).format("dddd");
  // res.send(`<h1>${current24Time}</h1>`);
});

// app.get("/api/current-time?format=12", (req, res) => {
//   // console.log("emoji", req.params);

//   const current12Time = dayjs().format('h:m:s A')
//   // const input = `${req.params.year}-${req.params.month}-${req.params.day}`;
//   // const dayOfWeek = dayjs(input).format("dddd");
//   res.send(`<h1>${current12Time}</h1>`);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
