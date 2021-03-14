const students = [
    {
        name: 'Mark',
        marks: [100, 65, 88, 90, 50],
        attends: 0,
        avgMark: getAvgMark,
        max: getMaxMark,
        setAttend: counter(),
        info: getInfo
    },
    {
        name: 'John',
        marks: [83, 10, 65, 0, 50, 83],
        attends: 0,
        avgMark: getAvgMark,
        max: getMaxMark,
        setAttend: counter(),
        info: getInfo
    },
    {
        name: 'Joel',
        marks: [100, 65, 90, 20],
        attends: 0,
        avgMark: getAvgMark,
        max: getMaxMark,
        setAttend: counter(),
        info: getInfo
    },
];

function getAvgMark() {
  let avg = 0;
  this.marks.forEach(e => {
    avg += e/2;
  })
  return avg;
}

function getMaxMark() {
  return Math.max.apply(null, this.marks);
}

function counter(){
  return function(){
    this.attends++;
  }
}

function getInfo(){
  return  `
    Name: ${this.name};
    Average mark: ${this.avgMark()};
    Attends: ${this.attends};
  `;
}

//========TESTS==========================

students.forEach(e => {
  console.log(e.avgMark());  //average mark of all students
})

students.forEach(e => {
  console.log(e.max());      //max mark of all students
})

students.forEach(e => {
  for(let i = 0; i < 5; i++){
  e.setAttend();
  console.log(e.name, e.attends);   //increase the counter of attends of all students
  }
})

students.forEach(e => {
  console.log(e.info());       //get all info about all students
})




