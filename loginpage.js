const start = document.getElementById("start");
const workstart = document.getElementById("workstart");
const Durationtime = document.getElementById("Durationtime");
const addBtn = document.getElementById("addBtn");
const warning = document.getElementById("warning");

let students = [];

addBtn.onclick = () => {
  const time1 = start.value;
  const time2 = workstart.value;
  const time3 = Durationtime.value;
  if (time1 == "" && time2 == "" && time3 == "") {
    warning.innerText = "Please Fill Up The Form";
    warning.style.color = "red";
  } else {
    const info = {
      work: time1,
      hour: time2,
      time: time3,
   
    };
    students.push(info);
    start.value = "";
    workstart.value = "";
    Durationtime.value = "";
    warning.innerText="";
  }

  addinfo();
};

const addinfo = () => {
  const total = document.getElementById("total");
  total.innerHTML = "";
  for (const student of students) {
    const li = document.createElement("li");
    li.innerText=`${student.work}= ${student.hour} =${student.time}`;
    total.appendChild(li);
  }
};
