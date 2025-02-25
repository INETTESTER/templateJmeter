import http from 'k6/http';
const filename = __ENV.filename || "Hello";
const date = __ENV.date || "Hello";
const id = __ENV.id || "1";
const google_link = __ENV.google_link || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
const projectname = __ENV.projectname || "1";
const reportPath = `../report/${date}/${filename}/statistics.json`;
const reportPath2 = `../report/${date}/${filename}/results.json`;
const jsonData = open(reportPath);
const jsonData2 = open(reportPath2);
export default function () {
  const startIndex = google_link.indexOf('/d/') + 3;
  const endIndex = google_link.indexOf('/edit');

  // ดึงรหัสของ Google Sheets ออกมา
  const spreadsheetID = google_link.substring(startIndex, endIndex);
  const data = JSON.parse(jsonData);
  const data2 = JSON.parse(jsonData2);
  const avgIterationDuration = data.Total.meanResTime;
  const minIterationDuration = data.Total.minResTime;
  const maxIterationDuration = data.Total.maxResTime;
  const pnineone = data.Total.pct2ResTime;
  const pninefive = data.Total.pct3ResTime;
  const request = data.Total.sampleCount;
  const http_reqs_passes = data.Total.errorCount;
  const tps = (data.Total.throughput).toFixed(2);
  const testtime = Math.ceil(request / tps);
  const avg = (avgIterationDuration / 1000).toFixed(2);
  const min = (minIterationDuration / 1000).toFixed(2);
  const max = (maxIterationDuration / 1000).toFixed(2);
  const p90 = (pnineone / 1000).toFixed(2);
  const p95 = (pninefive / 1000).toFixed(2);
  const e200 = data2.statusCounts["200"];
  const e201 = data2.statusCounts["201"];
  const e400 = data2.statusCounts["400"];
  const e401 = data2.statusCounts["401"];
  const e403 = data2.statusCounts["403"];
  const e404 = data2.statusCounts["404"];
  const e429 = data2.statusCounts["429"];
  const e500 = data2.statusCounts["500"];
  const e502 = data2.statusCounts["502"];
  const e503 = data2.statusCounts["503"];
  const e504 = data2.statusCounts["504"];
  const unknown = request - (e200 + e201 + e400 + e401 + e403 + e404 + e429 + e500 + e502 + e503 + e504);
  const error = http_reqs_passes;
  const sumerror = error - (unknown + e400 + e401 + e403 + e404 + e429 + e500 + e502 + e503 + e504);
  const finalunknown = unknown + sumerror;

  const now = new Date();
  const startTime = new Date(now.getTime() - (testtime * 1000));
  const endTime = new Date(now.getTime());

  console.log("projectname: " + projectname);
  console.log("ID: " + id);
  console.log("==============================");
  console.log(`Request: ${request}`);

  const statusCounts = data2.statusCounts;
  const filteredPasses = Object.keys(statusCounts)
    .filter((key) => statusCounts[key] > 0)
    .map((key) => ({
      status: key,
      passes: statusCounts[key]
    }));

  filteredPasses.forEach((item) => {
    //console.log(`${item.status}: ${item.passes}`);
    if (item.status === "200" || item.status === "201") {
      console.log(`✅ ${item.status}: ${item.passes}`);
    }
    else {
      console.log(`❌ ${item.status}: ${item.passes}`);
    }
  });
  if (error != 0) {
    if (finalunknown != 0) {
      console.log("❓ Unknown errors : " + finalunknown);
    }
    console.log("⭐ Number of errors : " + error);
  }
  const sheetDB = 'https://script.google.com/macros/s/AKfycbyOMNksImH823XdyegUl20B16Ed7w3qOitEhd4kSacY3KQQZCbrXW1EGubx0BL3puet/exec?action=insertsummary';
  const payload2 = {
    projectname: projectname,
    request: request,
    date: date,
    start: formatTime(startTime),
    end: formatTime(endTime),
    average: avg,
    min: min,
    max: max,
    p90: p90,
    p95: p95,
    tps: tps,
    error: error,
    id: id,
    e400: e400,
    e401: e401,
    e403: e403,
    e404: e404,
    e429: e429,
    e500: e500,
    e502: e502,
    e503: e503,
    e504: e504,
    eunknow: finalunknown,
    vus: user,
    duration: durationx
  }
  const params2 = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  http.post(sheetDB, JSON.stringify(payload2), params2);
  let urlgetdata = 'https://script.google.com/macros/s/AKfycbwoCkOJwYVfCPiSr3_SuLQP3-QscLnXt5fGagCAl94V2ePbiyfHs-qy8mUriB2zPaC0/exec?action=getdata';
  let paramsgetdata = {
    headersgetdata: {
      'Content-Type': 'application/json'
    },
  };
  let payloadgetdata = JSON.stringify({
    projectnames: projectname,
    sheetid: spreadsheetID,
  });

  http.post(urlgetdata, payloadgetdata, paramsgetdata);
}
function formatTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}