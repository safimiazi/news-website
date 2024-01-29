export function displayDate() {
    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const day = daysOfWeek[currentDate.getDay()];
    const month = monthsOfYear[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    return`Today is ${day}, ${month} ${date}, ${year}`;
  }
  
  // Call the function to display the current date
//   displayDate();
  