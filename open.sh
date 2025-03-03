#!/bin/bash
##########################################################################
##########################################################################
##########################################################################
##########################################################################
##########################################################################
                     API="template" 
                     google_sheet="https://docs.google.com/spreadsheets/d/1H7UgGtAy3JKvulLqGXVm5zeNq1FdNKonMxxBETQtjXQ/edit?gid=1610289956#gid=1610289956" 
                     id="1"                 #เปลี่ยน id ทุกครั้งที่ยิง
                     user="10";              #จำนวนผู้ใช้งาน
                     duration="1";          #หน่วยวินาที
                     status="normal"        #พิมพ์คำว่า "normal" เพื่อยิงโหลดเเละ upload report ไปที่ sheet
                                            #พิมพ์คำว่า "report" upload report ล่าสุดไปที่ sheet
##########################################################################
##########################################################################
##########################################################################
##########################################################################
##########################################################################



































folder_report=$(date +"%d-%m-%y") #ห้ามเปลี่ยน
filenamex="$API-$user-$id"
report_path="report/$folder_report/$filenamex"
if [ ! -d "$report_path" ]; then
  # ถ้าไม่มีให้สร้างโฟลเดอร์ folder
  mkdir -p "$report_path"
fi
if [ "$status" = "normal" ]; then
  if [ -d "$report_path" ] && [ "$(ls -A $report_path)" ]; then
    echo "❌ Folder dupicate/Change ID"
    exit 1
  fi
fi

if [ "$status" = "normal" ]; then
    jmeter -n -t ./main/script.jmx \
    -Juser=$user \
    -Jrampup=$duration \
    -l report/$folder_report/$filenamex/results.jtl \
    -e -o report/$folder_report/$filenamex


    # รอจนกว่าการรันเสร็จสิ้น
    wait
    # กำหนดค่าของไฟล์ JTL และ JSON จาก environment variable
    export JTL_PATH="$report_path/results.jtl"
    export JSON_PATH="$report_path/results.json"

    # รัน Node.js script ที่จะใช้ environment variables
    node converter/convertjson.js
    wait
    # รัน main/insertdata.js
    if [ -f "$report_path/results.json" ] && [ -s "$report_path/statistics.json" ]; then
      echo "✨ Uploading report..."
      win_path="$(pwd -W)/$report_path/index.html"
      rm jmeter.log
      k6 run --env filename="$filenamex" --env report_path="$win_path" --env projectname="$API" --env date="$folder_report" --env id="$id" --env user="$user" --env durationx="$duration" --env google_link="$google_sheet" gafana/insertdata.js --no-summary
    fi
elif [ "$status" = "report" ]; then
    # รันแค่ main/insertdata.js
    if [ -f "$report_path/results.json" ] && [ -s "$report_path/statistics.json" ]; then
      echo "✨ Uploading report..."
      win_path="$(pwd -W)/$report_path/index.html"
      rm jmeter.log
      k6 run --env filename="$filenamex" --env report_path="$win_path" --env projectname="$API" --env date="$folder_report" --env id="$id" --env user="$user" --env durationx="$duration" --env google_link="$google_sheet" gafana/insertdata.js --no-summary
    else
      echo "❌ Report not found"
    fi
else
    echo "❌ Invalid report value: $status"
fi
