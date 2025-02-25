#!/bin/bash
##########################################################################
##########################################################################
##########################################################################
##########################################################################
##########################################################################
                     projectname="template" #ตั้งชื่อ projhttpsect ให้เหมือนกัน
                     google_sheet="https://docs.google.com/spreadsheets/d/1H7UgGtAy3JKvulLqGXVm5zeNq1FdNKonMxxBETQtjXQ/edit?gid=1610289956#gid=1610289956" 
                     id="3"                 #เปลี่ยน id ทุกครั้งที่ยิง
                     user="1";            #จำนวนผู้ใช้งาน
                     durationx="1";        #วินาที
                     scenario="1"           #scenario="1" ยิงเเบบกำหนด request (duration ได้แค่ 1 วินาที)
                     cid="1"                #scenario="2" ยิงเเบบกำหนด VUs  (กำหนดว่า user x คน ใช้ระบบ x วินาที)
                                            #scenario="3" ยิงเเบบกำหนด request แต่ไม่แม่นยำ (duration กี่วินาทีก็ได้)
                     status="normal"        #พิมพ์คำว่า "normal" เพื่อยิงโหลดเเละ upload report ไปที่ sheet
                                            #พิมพ์คำว่า "report" upload report ล่าสุดไปที่ sheet
##########################################################################
##########################################################################
##########################################################################
##########################################################################
##########################################################################



































folder_report=$(date +"%d-%m-%y") #ห้ามเปลี่ยน
filenamex="$projectname-$user-$id"
report_path="report/$folder_report/$filenamex"
if [ ! -d "$report_path" ]; then
  # ถ้าไม่มีให้สร้างโฟลเดอร์ folder
  mkdir -p "$report_path"
fi
if [ -d "$report_path" ] && [ "$(ls -A $report_path)" ]; then
  echo "❌ Folder dupicate/Change ID"
  exit 1
fi

if [ "$status" = "normal" ]; then
    jmeter -n -t ./main/script.jmx \
    -Juser=$user \
    -Jrampup=$durationx \
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
    k6 run --env filename="$filenamex" --env projectname="$projectname" --env date="$folder_report" --env id="$id" --env user="$user" --env durationx="$durationx" --env google_link="$google_sheet" gafana/insertdata.js --no-summary
elif [ "$status" = "report" ]; then
    # รันแค่ main/insertdata.js
    k6 run --env filename="$filenamex" --env projectname="$projectname" --env date="$folder_report" --env id="$id" --env user="$user" --env durationx="$durationx" --env google_link="$google_sheet" gafana/insertdata.js --no-summary
else
    echo "Invalid report value: $status"
fi
