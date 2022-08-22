import https from "https";

const url = "https://hookb.in/qBOrlG1lJZtEqJGEyagw";

const request = https.request(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

}, (response) => {
  response.addListener("data", (data) => {
    console.info(`Receive data: ${data.toString()}`)
  })
})
const body = JSON.stringify({
  firstName: "Agung",
  lastName: "Wahyudi",
})
request.write(body);
request.end()