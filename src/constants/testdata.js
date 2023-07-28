const testData = [];

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const nextMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();

for (let day = currentDate.getDate(); day <= nextMonth; day++) {
  const tasks = [];
  const hasTasks = Math.random() < 0.5; // Randomly determine if the day will have tasks or not

  if (hasTasks) {
    const numTasks = Math.floor(Math.random() * 5) + 20; // Random number of tasks between 3 and 7

    for (let i = 1; i <= numTasks; i++) {
      tasks.push({
        title: `some title ${i}`,
        description: `some lorem ipsum ${i}`,
        done: Math.random() < 0.5 // Randomly assign true or false for "done" in each task
      });
    }
  }

  testData.push({
    weekday: new Date(currentDate.getFullYear(), currentMonth, day).toLocaleString('en-us', {
      weekday: 'short'
    }),
    day: day,
    tasks: tasks
  });
}

export default testData;
