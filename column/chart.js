$(function () {
        $('#container').highcharts({
            credits: {
                enabled: false
            },
            chart: {
                type: 'column'
            },
            title: {
                text: 'Holmes Hall Cup Points (Spring 2014)'
            },
            xAxis: {
                categories: [
                    'Current Points',
                ]
            },
            yAxis: {
                min: 340,
                title: {
                    text: 'Current Points'
                }
            },
            /* Remove the tooltip..
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            */
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    pointWidth: 200,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Civil/Environmental',
                color: '#FFE599',
                data: [353]
    
            }, {
                name: 'Electrical/Computer',
                color: '#A4C2F4',
                data: [365]
    
            }, {
                name: 'Mechanical',
                color: '#EA9999',
                data: [377]
            }]
        });
    });
    

