const URL =
  "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&hourly=pm10,pm2_5";

const tableBody = document.getElementById("tableBody");
const options = {
  weekday: "long",
  hour: "numeric",
}
const dateFormatter = new Intl.DateTimeFormat("ro-RO" , options);


fetch(URL, {method: "GET"})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);


    data.hourly.time.forEach((time , i) => {
      const row = document.createElement("tr");

      const timeCell = document.createElement("td");
      timeCell.innerText = dateFormatter.format(new Date(time));
      row.appendChild(timeCell);

      const quality25Cell = document.createElement("td");
      quality25Cell.innerText = data.hourly.pm2_5[i] + " μg/m³";
      row.appendChild(quality25Cell);

      const quality10Cell = document.createElement("td");
      quality10Cell.innerText = data.hourly.pm10[i] + " μg/m³";
      row.appendChild(quality10Cell);

      tableBody.appendChild(row);
    });


  });



