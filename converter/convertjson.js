const fs = require('fs');

// รับค่า path จาก environment variable
const jtlFilePath = process.env.JTL_PATH;
const jsonFilePath = process.env.JSON_PATH;

if (!jtlFilePath || !jsonFilePath) {
  console.error("Error: JTL_PATH or JSON_PATH environment variable is not set.");
  return;
}

// เรียกรับ status codes ที่ต้องการนับ
const statusCodes = ["200", "201", "400", "401", "403", "404", "429", "500", "502", "503", "504"];

// สร้าง object เพื่อเก็บข้อมูลการนับแต่ละ status
let statusCounts = {};
statusCodes.forEach(code => {
  statusCounts[code] = 0; // กำหนดค่าเริ่มต้นเป็น 0
});

// อ่านไฟล์ .jtl
fs.readFile(jtlFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading JTL file:", err);
    return;
  }

  const lines = data.split('\n');

  // เรียกใช้งานเพื่อดึงข้อมูลจากแต่ละบรรทัด (สมมุติว่าไฟล์เป็น CSV หรือ CSV-like)
  lines.forEach(line => {
    const columns = line.split(',');
    const statusCode = columns[3];  // สมมุติว่า responseCode อยู่ในคอลัมน์ที่ 4
    if (statusCounts.hasOwnProperty(statusCode)) {
      statusCounts[statusCode] += 1;  // เพิ่มจำนวนสำหรับ status code ที่พบ
    }
  });

  // เขียนผลลัพธ์ลงในไฟล์ JSON
  const result = {
    "statusCounts": statusCounts
  };

  fs.writeFile(jsonFilePath, JSON.stringify(result, null, 2), (err) => {
    if (err) {
      //console.error("Error writing JSON file:", err);
      return;
    }
    //console.log("Status Codes Counts have been saved to", jsonFilePath);
  });
});
