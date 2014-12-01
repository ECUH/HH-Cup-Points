window.onload = function() { init() };
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1P1dw4IQAvdGmExzdgIdtwxmkdaBe438ZDMyvAJ78PQw/pubhtml?gid=0&single=true'

function init() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   simpleSheet: true } );
}

function render_table(data, headers){
}

function render_table_headers(headers){
  var table = "";
  var keys = Object.keys(headers);
  // Print the header
  table = table + "<thead>"
  table = table + "<tr>"
  for (key of keys){
      table = table + "<th>" + key + "</th>";
  }
  table = table + "</tr>"
  table = table + "</thead>"
  return table;
}

function render_table_row(headers, line){
  var table = "";
  var keys = Object.keys(headers);
  table = table + '<tr>';
  for (key of keys){
    console.log(key);
    table = table + '<td>' + line[headers[key]] + '</td>';
  }
  table = table + '</tr>';
  return table;
}

function showInfo(data) {
  // calculate the totals
  var cee_total = 0;
  var ee_total = 0;
  var me_total = 0;

  for(line of data){
    if( ! (line.cee==="" && line.ee==="" && line.me==="")){
      // console.log(line.cee);
      // console.log(line.ee);
      // console.log(line.me);
      cee_total = cee_total +  parseInt(line["cee"]);
      ee_total = ee_total +  parseInt(line["ee"]);
      me_total = me_total +  parseInt(line["me"]);
    }
  }
  // console.log(cee_total);
  // console.log(me_total);
  // console.log(ee_total);


  document.getElementById("cee-points").innerHTML = cee_total;
  document.getElementById("ee-points").innerHTML = ee_total;
  document.getElementById("me-points").innerHTML = me_total;

}





