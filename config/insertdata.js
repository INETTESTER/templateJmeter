import http from 'k6/http';

const filename = __ENV.filename || "Hello";
const date = __ENV.date || "Hello";
const id = __ENV.id || "1";
const google_link = __ENV.google_link || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
const projectname = __ENV.projectname || "1";
const report_path = __ENV.report_path || "1";

const reportPath = `../report/${date}/${filename}/statistics.json`;
const reportPath2 = `../report/${date}/${filename}/results.json`;

const jsonData = open(reportPath);
const jsonData2 = open(reportPath2);

export default function () {

  const startIndex = google_link.indexOf('/d/') + 3;
  const endIndex = google_link.indexOf('/edit');
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

  const e200 = data2.statusCounts["200"] || 0;
  const e201 = data2.statusCounts["201"] || 0;
  const e400 = data2.statusCounts["400"] || 0;
  const e401 = data2.statusCounts["401"] || 0;
  const e403 = data2.statusCounts["403"] || 0;
  const e404 = data2.statusCounts["404"] || 0;
  const e422 = data2.statusCounts["422"] || 0; // ✅ เพิ่ม
  const e429 = data2.statusCounts["429"] || 0;
  const e500 = data2.statusCounts["500"] || 0;
  const e502 = data2.statusCounts["502"] || 0;
  const e503 = data2.statusCounts["503"] || 0;
  const e504 = data2.statusCounts["504"] || 0;

  const unknown = request - (
    e200 + e201 + e400 + e401 + e403 + e404 +
    e422 + e429 + e500 + e502 + e503 + e504
  );

  const error = http_reqs_passes;

  const sumerror = error - (
    unknown + e400 + e401 + e403 + e404 +
    e422 + e429 + e500 + e502 + e503 + e504
  );

  const finalunknown = unknown + sumerror;

  const now = new Date();
  const startTime = new Date(now.getTime() - (testtime * 1000));
  const endTime = new Date(now.getTime());

  console.log("API: " + projectname);
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
    if (item.status === "200" || item.status === "201") {
      console.log(`✅ ${item.status}: ${item.passes}`);
    } else {
      console.log(`❌ ${item.status}: ${item.passes}`);
    }
  });

  if (error != 0) {
    if (finalunknown != 0) {
      console.log("❓ Unknown errors : " + finalunknown);
    }
    console.log("⭐ Number of errors : " + error);
  }

  const sheetDB = 'https://script.google.com/macros/s/AKfycbzbMajrXU7q7t08h_iG22gukrzXmyHZnlOxaU30jNUXP0HlsbgB2bAdJM3MmjubZkR_/exec?action=insertsummary';

  const payload2 = {
    projectname,
    request,
    date,
    start: formatTime(startTime),
    end: formatTime(endTime),
    average: avg,
    min,
    max,
    p90,
    p95,
    tps,
    error,
    id,
    e400,
    e401,
    e403,
    e404,
    e422, // ✅ เพิ่มส่งเข้า sheet
    e429,
    e500,
    e502,
    e503,
    e504,
    eunknow: finalunknown,
    vus: user,
    duration: durationx
  };

  http.post(sheetDB, JSON.stringify(payload2), {
    headers: { 'Content-Type': 'application/json' }
  });

  let urlgetdata = 'https://script.google.com/macros/s/AKfycbzbMajrXU7q7t08h_iG22gukrzXmyHZnlOxaU30jNUXP0HlsbgB2bAdJM3MmjubZkR_/exec?action=getdata';

  http.post(urlgetdata, JSON.stringify({
    projectnames: projectname,
    sheetid: spreadsheetID,
  }), {
    headers: { 'Content-Type': 'application/json' } // 🔥 fix header
  });
}

function formatTime(date) {
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
}
