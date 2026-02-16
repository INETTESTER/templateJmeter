/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 64.0, "minX": 0.0, "maxY": 1236.0, "series": [{"data": [[0.0, 64.0], [0.1, 64.0], [0.2, 64.0], [0.3, 64.0], [0.4, 64.0], [0.5, 64.0], [0.6, 64.0], [0.7, 64.0], [0.8, 64.0], [0.9, 64.0], [1.0, 66.0], [1.1, 66.0], [1.2, 66.0], [1.3, 66.0], [1.4, 66.0], [1.5, 66.0], [1.6, 66.0], [1.7, 66.0], [1.8, 66.0], [1.9, 66.0], [2.0, 67.0], [2.1, 67.0], [2.2, 67.0], [2.3, 67.0], [2.4, 67.0], [2.5, 67.0], [2.6, 67.0], [2.7, 67.0], [2.8, 67.0], [2.9, 67.0], [3.0, 70.0], [3.1, 70.0], [3.2, 70.0], [3.3, 70.0], [3.4, 70.0], [3.5, 70.0], [3.6, 70.0], [3.7, 70.0], [3.8, 70.0], [3.9, 70.0], [4.0, 74.0], [4.1, 74.0], [4.2, 74.0], [4.3, 74.0], [4.4, 74.0], [4.5, 74.0], [4.6, 74.0], [4.7, 74.0], [4.8, 74.0], [4.9, 74.0], [5.0, 75.0], [5.1, 75.0], [5.2, 75.0], [5.3, 75.0], [5.4, 75.0], [5.5, 75.0], [5.6, 75.0], [5.7, 75.0], [5.8, 75.0], [5.9, 75.0], [6.0, 77.0], [6.1, 77.0], [6.2, 77.0], [6.3, 77.0], [6.4, 77.0], [6.5, 77.0], [6.6, 77.0], [6.7, 77.0], [6.8, 77.0], [6.9, 77.0], [7.0, 79.0], [7.1, 79.0], [7.2, 79.0], [7.3, 79.0], [7.4, 79.0], [7.5, 79.0], [7.6, 79.0], [7.7, 79.0], [7.8, 79.0], [7.9, 79.0], [8.0, 80.0], [8.1, 80.0], [8.2, 80.0], [8.3, 80.0], [8.4, 80.0], [8.5, 80.0], [8.6, 80.0], [8.7, 80.0], [8.8, 80.0], [8.9, 80.0], [9.0, 80.0], [9.1, 80.0], [9.2, 80.0], [9.3, 80.0], [9.4, 80.0], [9.5, 80.0], [9.6, 80.0], [9.7, 80.0], [9.8, 80.0], [9.9, 80.0], [10.0, 81.0], [10.1, 81.0], [10.2, 81.0], [10.3, 81.0], [10.4, 81.0], [10.5, 81.0], [10.6, 81.0], [10.7, 81.0], [10.8, 81.0], [10.9, 81.0], [11.0, 84.0], [11.1, 84.0], [11.2, 84.0], [11.3, 84.0], [11.4, 84.0], [11.5, 84.0], [11.6, 84.0], [11.7, 84.0], [11.8, 84.0], [11.9, 84.0], [12.0, 90.0], [12.1, 90.0], [12.2, 90.0], [12.3, 90.0], [12.4, 90.0], [12.5, 90.0], [12.6, 90.0], [12.7, 90.0], [12.8, 90.0], [12.9, 90.0], [13.0, 93.0], [13.1, 93.0], [13.2, 93.0], [13.3, 93.0], [13.4, 93.0], [13.5, 93.0], [13.6, 93.0], [13.7, 93.0], [13.8, 93.0], [13.9, 93.0], [14.0, 94.0], [14.1, 94.0], [14.2, 94.0], [14.3, 94.0], [14.4, 94.0], [14.5, 94.0], [14.6, 94.0], [14.7, 94.0], [14.8, 94.0], [14.9, 94.0], [15.0, 99.0], [15.1, 99.0], [15.2, 99.0], [15.3, 99.0], [15.4, 99.0], [15.5, 99.0], [15.6, 99.0], [15.7, 99.0], [15.8, 99.0], [15.9, 99.0], [16.0, 105.0], [16.1, 105.0], [16.2, 105.0], [16.3, 105.0], [16.4, 105.0], [16.5, 105.0], [16.6, 105.0], [16.7, 105.0], [16.8, 105.0], [16.9, 105.0], [17.0, 115.0], [17.1, 115.0], [17.2, 115.0], [17.3, 115.0], [17.4, 115.0], [17.5, 115.0], [17.6, 115.0], [17.7, 115.0], [17.8, 115.0], [17.9, 115.0], [18.0, 116.0], [18.1, 116.0], [18.2, 116.0], [18.3, 116.0], [18.4, 116.0], [18.5, 116.0], [18.6, 116.0], [18.7, 116.0], [18.8, 116.0], [18.9, 116.0], [19.0, 116.0], [19.1, 116.0], [19.2, 116.0], [19.3, 116.0], [19.4, 116.0], [19.5, 116.0], [19.6, 116.0], [19.7, 116.0], [19.8, 116.0], [19.9, 116.0], [20.0, 116.0], [20.1, 116.0], [20.2, 116.0], [20.3, 116.0], [20.4, 116.0], [20.5, 116.0], [20.6, 116.0], [20.7, 116.0], [20.8, 116.0], [20.9, 116.0], [21.0, 125.0], [21.1, 125.0], [21.2, 125.0], [21.3, 125.0], [21.4, 125.0], [21.5, 125.0], [21.6, 125.0], [21.7, 125.0], [21.8, 125.0], [21.9, 125.0], [22.0, 126.0], [22.1, 126.0], [22.2, 126.0], [22.3, 126.0], [22.4, 126.0], [22.5, 126.0], [22.6, 126.0], [22.7, 126.0], [22.8, 126.0], [22.9, 126.0], [23.0, 128.0], [23.1, 128.0], [23.2, 128.0], [23.3, 128.0], [23.4, 128.0], [23.5, 128.0], [23.6, 128.0], [23.7, 128.0], [23.8, 128.0], [23.9, 128.0], [24.0, 129.0], [24.1, 129.0], [24.2, 129.0], [24.3, 129.0], [24.4, 129.0], [24.5, 129.0], [24.6, 129.0], [24.7, 129.0], [24.8, 129.0], [24.9, 129.0], [25.0, 129.0], [25.1, 129.0], [25.2, 129.0], [25.3, 129.0], [25.4, 129.0], [25.5, 129.0], [25.6, 129.0], [25.7, 129.0], [25.8, 129.0], [25.9, 129.0], [26.0, 131.0], [26.1, 131.0], [26.2, 131.0], [26.3, 131.0], [26.4, 131.0], [26.5, 131.0], [26.6, 131.0], [26.7, 131.0], [26.8, 131.0], [26.9, 131.0], [27.0, 131.0], [27.1, 131.0], [27.2, 131.0], [27.3, 131.0], [27.4, 131.0], [27.5, 131.0], [27.6, 131.0], [27.7, 131.0], [27.8, 131.0], [27.9, 131.0], [28.0, 134.0], [28.1, 134.0], [28.2, 134.0], [28.3, 134.0], [28.4, 134.0], [28.5, 134.0], [28.6, 134.0], [28.7, 134.0], [28.8, 134.0], [28.9, 134.0], [29.0, 136.0], [29.1, 136.0], [29.2, 136.0], [29.3, 136.0], [29.4, 136.0], [29.5, 136.0], [29.6, 136.0], [29.7, 136.0], [29.8, 136.0], [29.9, 136.0], [30.0, 138.0], [30.1, 138.0], [30.2, 138.0], [30.3, 138.0], [30.4, 138.0], [30.5, 138.0], [30.6, 138.0], [30.7, 138.0], [30.8, 138.0], [30.9, 138.0], [31.0, 140.0], [31.1, 140.0], [31.2, 140.0], [31.3, 140.0], [31.4, 140.0], [31.5, 140.0], [31.6, 140.0], [31.7, 140.0], [31.8, 140.0], [31.9, 140.0], [32.0, 143.0], [32.1, 143.0], [32.2, 143.0], [32.3, 143.0], [32.4, 143.0], [32.5, 143.0], [32.6, 143.0], [32.7, 143.0], [32.8, 143.0], [32.9, 143.0], [33.0, 145.0], [33.1, 145.0], [33.2, 145.0], [33.3, 145.0], [33.4, 145.0], [33.5, 145.0], [33.6, 145.0], [33.7, 145.0], [33.8, 145.0], [33.9, 145.0], [34.0, 149.0], [34.1, 149.0], [34.2, 149.0], [34.3, 149.0], [34.4, 149.0], [34.5, 149.0], [34.6, 149.0], [34.7, 149.0], [34.8, 149.0], [34.9, 149.0], [35.0, 149.0], [35.1, 149.0], [35.2, 149.0], [35.3, 149.0], [35.4, 149.0], [35.5, 149.0], [35.6, 149.0], [35.7, 149.0], [35.8, 149.0], [35.9, 149.0], [36.0, 151.0], [36.1, 151.0], [36.2, 151.0], [36.3, 151.0], [36.4, 151.0], [36.5, 151.0], [36.6, 151.0], [36.7, 151.0], [36.8, 151.0], [36.9, 151.0], [37.0, 156.0], [37.1, 156.0], [37.2, 156.0], [37.3, 156.0], [37.4, 156.0], [37.5, 156.0], [37.6, 156.0], [37.7, 156.0], [37.8, 156.0], [37.9, 156.0], [38.0, 158.0], [38.1, 158.0], [38.2, 158.0], [38.3, 158.0], [38.4, 158.0], [38.5, 158.0], [38.6, 158.0], [38.7, 158.0], [38.8, 158.0], [38.9, 158.0], [39.0, 161.0], [39.1, 161.0], [39.2, 161.0], [39.3, 161.0], [39.4, 161.0], [39.5, 161.0], [39.6, 161.0], [39.7, 161.0], [39.8, 161.0], [39.9, 161.0], [40.0, 164.0], [40.1, 164.0], [40.2, 164.0], [40.3, 164.0], [40.4, 164.0], [40.5, 164.0], [40.6, 164.0], [40.7, 164.0], [40.8, 164.0], [40.9, 164.0], [41.0, 165.0], [41.1, 165.0], [41.2, 165.0], [41.3, 165.0], [41.4, 165.0], [41.5, 165.0], [41.6, 165.0], [41.7, 165.0], [41.8, 165.0], [41.9, 165.0], [42.0, 177.0], [42.1, 177.0], [42.2, 177.0], [42.3, 177.0], [42.4, 177.0], [42.5, 177.0], [42.6, 177.0], [42.7, 177.0], [42.8, 177.0], [42.9, 177.0], [43.0, 181.0], [43.1, 181.0], [43.2, 181.0], [43.3, 181.0], [43.4, 181.0], [43.5, 181.0], [43.6, 181.0], [43.7, 181.0], [43.8, 181.0], [43.9, 181.0], [44.0, 183.0], [44.1, 183.0], [44.2, 183.0], [44.3, 183.0], [44.4, 183.0], [44.5, 183.0], [44.6, 183.0], [44.7, 183.0], [44.8, 183.0], [44.9, 183.0], [45.0, 187.0], [45.1, 187.0], [45.2, 187.0], [45.3, 187.0], [45.4, 187.0], [45.5, 187.0], [45.6, 187.0], [45.7, 187.0], [45.8, 187.0], [45.9, 187.0], [46.0, 205.0], [46.1, 205.0], [46.2, 205.0], [46.3, 205.0], [46.4, 205.0], [46.5, 205.0], [46.6, 205.0], [46.7, 205.0], [46.8, 205.0], [46.9, 205.0], [47.0, 213.0], [47.1, 213.0], [47.2, 213.0], [47.3, 213.0], [47.4, 213.0], [47.5, 213.0], [47.6, 213.0], [47.7, 213.0], [47.8, 213.0], [47.9, 213.0], [48.0, 224.0], [48.1, 224.0], [48.2, 224.0], [48.3, 224.0], [48.4, 224.0], [48.5, 224.0], [48.6, 224.0], [48.7, 224.0], [48.8, 224.0], [48.9, 224.0], [49.0, 243.0], [49.1, 243.0], [49.2, 243.0], [49.3, 243.0], [49.4, 243.0], [49.5, 243.0], [49.6, 243.0], [49.7, 243.0], [49.8, 243.0], [49.9, 243.0], [50.0, 253.0], [50.1, 253.0], [50.2, 253.0], [50.3, 253.0], [50.4, 253.0], [50.5, 253.0], [50.6, 253.0], [50.7, 253.0], [50.8, 253.0], [50.9, 253.0], [51.0, 253.0], [51.1, 253.0], [51.2, 253.0], [51.3, 253.0], [51.4, 253.0], [51.5, 253.0], [51.6, 253.0], [51.7, 253.0], [51.8, 253.0], [51.9, 253.0], [52.0, 260.0], [52.1, 260.0], [52.2, 260.0], [52.3, 260.0], [52.4, 260.0], [52.5, 260.0], [52.6, 260.0], [52.7, 260.0], [52.8, 260.0], [52.9, 260.0], [53.0, 264.0], [53.1, 264.0], [53.2, 264.0], [53.3, 264.0], [53.4, 264.0], [53.5, 264.0], [53.6, 264.0], [53.7, 264.0], [53.8, 264.0], [53.9, 264.0], [54.0, 270.0], [54.1, 270.0], [54.2, 270.0], [54.3, 270.0], [54.4, 270.0], [54.5, 270.0], [54.6, 270.0], [54.7, 270.0], [54.8, 270.0], [54.9, 270.0], [55.0, 283.0], [55.1, 283.0], [55.2, 283.0], [55.3, 283.0], [55.4, 283.0], [55.5, 283.0], [55.6, 283.0], [55.7, 283.0], [55.8, 283.0], [55.9, 283.0], [56.0, 293.0], [56.1, 293.0], [56.2, 293.0], [56.3, 293.0], [56.4, 293.0], [56.5, 293.0], [56.6, 293.0], [56.7, 293.0], [56.8, 293.0], [56.9, 293.0], [57.0, 342.0], [57.1, 342.0], [57.2, 342.0], [57.3, 342.0], [57.4, 342.0], [57.5, 342.0], [57.6, 342.0], [57.7, 342.0], [57.8, 342.0], [57.9, 342.0], [58.0, 395.0], [58.1, 395.0], [58.2, 395.0], [58.3, 395.0], [58.4, 395.0], [58.5, 395.0], [58.6, 395.0], [58.7, 395.0], [58.8, 395.0], [58.9, 395.0], [59.0, 403.0], [59.1, 403.0], [59.2, 403.0], [59.3, 403.0], [59.4, 403.0], [59.5, 403.0], [59.6, 403.0], [59.7, 403.0], [59.8, 403.0], [59.9, 403.0], [60.0, 403.0], [60.1, 403.0], [60.2, 403.0], [60.3, 403.0], [60.4, 403.0], [60.5, 403.0], [60.6, 403.0], [60.7, 403.0], [60.8, 403.0], [60.9, 403.0], [61.0, 444.0], [61.1, 444.0], [61.2, 444.0], [61.3, 444.0], [61.4, 444.0], [61.5, 444.0], [61.6, 444.0], [61.7, 444.0], [61.8, 444.0], [61.9, 444.0], [62.0, 509.0], [62.1, 509.0], [62.2, 509.0], [62.3, 509.0], [62.4, 509.0], [62.5, 509.0], [62.6, 509.0], [62.7, 509.0], [62.8, 509.0], [62.9, 509.0], [63.0, 512.0], [63.1, 512.0], [63.2, 512.0], [63.3, 512.0], [63.4, 512.0], [63.5, 512.0], [63.6, 512.0], [63.7, 512.0], [63.8, 512.0], [63.9, 512.0], [64.0, 596.0], [64.1, 596.0], [64.2, 596.0], [64.3, 596.0], [64.4, 596.0], [64.5, 596.0], [64.6, 596.0], [64.7, 596.0], [64.8, 596.0], [64.9, 596.0], [65.0, 606.0], [65.1, 606.0], [65.2, 606.0], [65.3, 606.0], [65.4, 606.0], [65.5, 606.0], [65.6, 606.0], [65.7, 606.0], [65.8, 606.0], [65.9, 606.0], [66.0, 640.0], [66.1, 640.0], [66.2, 640.0], [66.3, 640.0], [66.4, 640.0], [66.5, 640.0], [66.6, 640.0], [66.7, 640.0], [66.8, 640.0], [66.9, 640.0], [67.0, 641.0], [67.1, 641.0], [67.2, 641.0], [67.3, 641.0], [67.4, 641.0], [67.5, 641.0], [67.6, 641.0], [67.7, 641.0], [67.8, 641.0], [67.9, 641.0], [68.0, 650.0], [68.1, 650.0], [68.2, 650.0], [68.3, 650.0], [68.4, 650.0], [68.5, 650.0], [68.6, 650.0], [68.7, 650.0], [68.8, 650.0], [68.9, 650.0], [69.0, 692.0], [69.1, 692.0], [69.2, 692.0], [69.3, 692.0], [69.4, 692.0], [69.5, 692.0], [69.6, 692.0], [69.7, 692.0], [69.8, 692.0], [69.9, 692.0], [70.0, 695.0], [70.1, 695.0], [70.2, 695.0], [70.3, 695.0], [70.4, 695.0], [70.5, 695.0], [70.6, 695.0], [70.7, 695.0], [70.8, 695.0], [70.9, 695.0], [71.0, 715.0], [71.1, 715.0], [71.2, 715.0], [71.3, 715.0], [71.4, 715.0], [71.5, 715.0], [71.6, 715.0], [71.7, 715.0], [71.8, 715.0], [71.9, 715.0], [72.0, 726.0], [72.1, 726.0], [72.2, 726.0], [72.3, 726.0], [72.4, 726.0], [72.5, 726.0], [72.6, 726.0], [72.7, 726.0], [72.8, 726.0], [72.9, 726.0], [73.0, 736.0], [73.1, 736.0], [73.2, 736.0], [73.3, 736.0], [73.4, 736.0], [73.5, 736.0], [73.6, 736.0], [73.7, 736.0], [73.8, 736.0], [73.9, 736.0], [74.0, 736.0], [74.1, 736.0], [74.2, 736.0], [74.3, 736.0], [74.4, 736.0], [74.5, 736.0], [74.6, 736.0], [74.7, 736.0], [74.8, 736.0], [74.9, 736.0], [75.0, 753.0], [75.1, 753.0], [75.2, 753.0], [75.3, 753.0], [75.4, 753.0], [75.5, 753.0], [75.6, 753.0], [75.7, 753.0], [75.8, 753.0], [75.9, 753.0], [76.0, 758.0], [76.1, 758.0], [76.2, 758.0], [76.3, 758.0], [76.4, 758.0], [76.5, 758.0], [76.6, 758.0], [76.7, 758.0], [76.8, 758.0], [76.9, 758.0], [77.0, 766.0], [77.1, 766.0], [77.2, 766.0], [77.3, 766.0], [77.4, 766.0], [77.5, 766.0], [77.6, 766.0], [77.7, 766.0], [77.8, 766.0], [77.9, 766.0], [78.0, 767.0], [78.1, 767.0], [78.2, 767.0], [78.3, 767.0], [78.4, 767.0], [78.5, 767.0], [78.6, 767.0], [78.7, 767.0], [78.8, 767.0], [78.9, 767.0], [79.0, 779.0], [79.1, 779.0], [79.2, 779.0], [79.3, 779.0], [79.4, 779.0], [79.5, 779.0], [79.6, 779.0], [79.7, 779.0], [79.8, 779.0], [79.9, 779.0], [80.0, 789.0], [80.1, 789.0], [80.2, 789.0], [80.3, 789.0], [80.4, 789.0], [80.5, 789.0], [80.6, 789.0], [80.7, 789.0], [80.8, 789.0], [80.9, 789.0], [81.0, 817.0], [81.1, 817.0], [81.2, 817.0], [81.3, 817.0], [81.4, 817.0], [81.5, 817.0], [81.6, 817.0], [81.7, 817.0], [81.8, 817.0], [81.9, 817.0], [82.0, 821.0], [82.1, 821.0], [82.2, 821.0], [82.3, 821.0], [82.4, 821.0], [82.5, 821.0], [82.6, 821.0], [82.7, 821.0], [82.8, 821.0], [82.9, 821.0], [83.0, 849.0], [83.1, 849.0], [83.2, 849.0], [83.3, 849.0], [83.4, 849.0], [83.5, 849.0], [83.6, 849.0], [83.7, 849.0], [83.8, 849.0], [83.9, 849.0], [84.0, 863.0], [84.1, 863.0], [84.2, 863.0], [84.3, 863.0], [84.4, 863.0], [84.5, 863.0], [84.6, 863.0], [84.7, 863.0], [84.8, 863.0], [84.9, 863.0], [85.0, 883.0], [85.1, 883.0], [85.2, 883.0], [85.3, 883.0], [85.4, 883.0], [85.5, 883.0], [85.6, 883.0], [85.7, 883.0], [85.8, 883.0], [85.9, 883.0], [86.0, 893.0], [86.1, 893.0], [86.2, 893.0], [86.3, 893.0], [86.4, 893.0], [86.5, 893.0], [86.6, 893.0], [86.7, 893.0], [86.8, 893.0], [86.9, 893.0], [87.0, 961.0], [87.1, 961.0], [87.2, 961.0], [87.3, 961.0], [87.4, 961.0], [87.5, 961.0], [87.6, 961.0], [87.7, 961.0], [87.8, 961.0], [87.9, 961.0], [88.0, 977.0], [88.1, 977.0], [88.2, 977.0], [88.3, 977.0], [88.4, 977.0], [88.5, 977.0], [88.6, 977.0], [88.7, 977.0], [88.8, 977.0], [88.9, 977.0], [89.0, 1001.0], [89.1, 1001.0], [89.2, 1001.0], [89.3, 1001.0], [89.4, 1001.0], [89.5, 1001.0], [89.6, 1001.0], [89.7, 1001.0], [89.8, 1001.0], [89.9, 1001.0], [90.0, 1017.0], [90.1, 1017.0], [90.2, 1017.0], [90.3, 1017.0], [90.4, 1017.0], [90.5, 1017.0], [90.6, 1017.0], [90.7, 1017.0], [90.8, 1017.0], [90.9, 1017.0], [91.0, 1030.0], [91.1, 1030.0], [91.2, 1030.0], [91.3, 1030.0], [91.4, 1030.0], [91.5, 1030.0], [91.6, 1030.0], [91.7, 1030.0], [91.8, 1030.0], [91.9, 1030.0], [92.0, 1044.0], [92.1, 1044.0], [92.2, 1044.0], [92.3, 1044.0], [92.4, 1044.0], [92.5, 1044.0], [92.6, 1044.0], [92.7, 1044.0], [92.8, 1044.0], [92.9, 1044.0], [93.0, 1053.0], [93.1, 1053.0], [93.2, 1053.0], [93.3, 1053.0], [93.4, 1053.0], [93.5, 1053.0], [93.6, 1053.0], [93.7, 1053.0], [93.8, 1053.0], [93.9, 1053.0], [94.0, 1091.0], [94.1, 1091.0], [94.2, 1091.0], [94.3, 1091.0], [94.4, 1091.0], [94.5, 1091.0], [94.6, 1091.0], [94.7, 1091.0], [94.8, 1091.0], [94.9, 1091.0], [95.0, 1098.0], [95.1, 1098.0], [95.2, 1098.0], [95.3, 1098.0], [95.4, 1098.0], [95.5, 1098.0], [95.6, 1098.0], [95.7, 1098.0], [95.8, 1098.0], [95.9, 1098.0], [96.0, 1116.0], [96.1, 1116.0], [96.2, 1116.0], [96.3, 1116.0], [96.4, 1116.0], [96.5, 1116.0], [96.6, 1116.0], [96.7, 1116.0], [96.8, 1116.0], [96.9, 1116.0], [97.0, 1214.0], [97.1, 1214.0], [97.2, 1214.0], [97.3, 1214.0], [97.4, 1214.0], [97.5, 1214.0], [97.6, 1214.0], [97.7, 1214.0], [97.8, 1214.0], [97.9, 1214.0], [98.0, 1216.0], [98.1, 1216.0], [98.2, 1216.0], [98.3, 1216.0], [98.4, 1216.0], [98.5, 1216.0], [98.6, 1216.0], [98.7, 1216.0], [98.8, 1216.0], [98.9, 1216.0], [99.0, 1236.0], [99.1, 1236.0], [99.2, 1236.0], [99.3, 1236.0], [99.4, 1236.0], [99.5, 1236.0], [99.6, 1236.0], [99.7, 1236.0], [99.8, 1236.0], [99.9, 1236.0]], "isOverall": false, "label": "ran1", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 30.0, "series": [{"data": [[0.0, 16.0], [600.0, 6.0], [700.0, 10.0], [800.0, 6.0], [200.0, 11.0], [900.0, 2.0], [1000.0, 7.0], [1100.0, 1.0], [300.0, 2.0], [1200.0, 3.0], [400.0, 3.0], [100.0, 30.0], [500.0, 3.0]], "isOverall": false, "label": "ran1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 38.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 62.0, "series": [{"data": [[0.0, 62.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 38.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 32.75000000000002, "minX": 1.7712111E12, "maxY": 32.75000000000002, "series": [{"data": [[1.7712111E12, 32.75000000000002]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7712111E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 70.0, "minX": 1.0, "maxY": 1236.0, "series": [{"data": [[32.0, 151.5], [33.0, 1098.0], [2.0, 260.0], [35.0, 752.0], [34.0, 304.5], [37.0, 452.33333333333337], [36.0, 270.0], [39.0, 555.5], [38.0, 253.33333333333331], [41.0, 586.7142857142857], [40.0, 555.0], [43.0, 664.5], [42.0, 438.25], [45.0, 559.6666666666666], [44.0, 296.875], [46.0, 333.8], [47.0, 412.0], [48.0, 560.3333333333334], [3.0, 1236.0], [4.0, 143.0], [5.0, 224.0], [6.0, 243.0], [8.0, 701.5], [9.0, 1214.0], [10.0, 977.0], [11.0, 181.0], [12.0, 70.0], [13.0, 205.0], [14.0, 158.0], [15.0, 145.0], [16.0, 149.0], [1.0, 128.0], [18.0, 623.5], [20.0, 177.0], [21.0, 1030.0], [22.0, 100.5], [23.0, 105.0], [24.0, 116.0], [25.0, 151.0], [26.0, 94.0], [27.0, 165.0], [28.0, 543.6666666666666], [31.0, 612.5]], "isOverall": false, "label": "ran1", "isController": false}, {"data": [[32.75000000000002, 425.51000000000005]], "isOverall": false, "label": "ran1-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 48.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 171.66666666666666, "minX": 1.7712111E12, "maxY": 654268.3333333334, "series": [{"data": [[1.7712111E12, 654268.3333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7712111E12, 171.66666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7712111E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 425.51000000000005, "minX": 1.7712111E12, "maxY": 425.51000000000005, "series": [{"data": [[1.7712111E12, 425.51000000000005]], "isOverall": false, "label": "ran1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7712111E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 410.44, "minX": 1.7712111E12, "maxY": 410.44, "series": [{"data": [[1.7712111E12, 410.44]], "isOverall": false, "label": "ran1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7712111E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 302.72999999999996, "minX": 1.7712111E12, "maxY": 302.72999999999996, "series": [{"data": [[1.7712111E12, 302.72999999999996]], "isOverall": false, "label": "ran1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7712111E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 64.0, "minX": 1.7712111E12, "maxY": 1236.0, "series": [{"data": [[1.7712111E12, 1236.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7712111E12, 1015.4000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7712111E12, 1235.8]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7712111E12, 1097.6499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7712111E12, 64.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7712111E12, 248.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7712111E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 248.0, "minX": 100.0, "maxY": 248.0, "series": [{"data": [[100.0, 248.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 236.5, "minX": 100.0, "maxY": 236.5, "series": [{"data": [[100.0, 236.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7712111E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7712111E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7712111E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7712111E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7712111E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7712111E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7712111E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7712111E12, 1.6666666666666667]], "isOverall": false, "label": "ran1-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7712111E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7712111E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7712111E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7712111E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

