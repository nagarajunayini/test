import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { HeigchartsService } from '../heigcharts.service';
import { element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  @ViewChild('charts') public chartEl: ElementRef;
  @ViewChild('charts1') public chartE2: ElementRef;

 graph= {
    "GraphData": [{
      "KpiName": "GCL",
      "Month": "Month3",
      "Sc_WOffDate": "Apr-2016",
      "Sc_OpenDate": "01-2016",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":1.18,
      "17":2.28,
      "18":3.38,
      "19":4.48
    }, {
      "KpiName": "GCL",
      "Month": "Month4",
      "Sc_WOffDate": "May-2016",
      "Sc_OpenDate": "01-2016",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":4.18,
      "17":5.28,
      "18":6.38,
      "19":7.48
    }, {
      "KpiName": "GCL",
      "Month": "Month5",
      "Sc_WOffDate": "Jun-2016",
      "Sc_OpenDate": "01-2016",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":8.18,
      "17":9.28,
      "18":10.38,
      "19":11.48
    }, {
      "KpiName": "GCL",
      "Month": "Month6",
      "Sc_WOffDate": "Jul-2016",
      "Sc_OpenDate": "01-2016",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":4.18,
      "17":29.28,
      "18":3.38,
      "19":9.84
    }, {
      "KpiName": "GCL",
      "Month": "Month7",
      "Sc_WOffDate": "Aug-2016",
      "Sc_OpenDate": "01-2016",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "Y-Axis": 3.794,
      "16":6.52,
      "17":8.93,
      "18":8.38,
      "19":9.84
    }, {
      "KpiName": "GCL",
      "Month": "Month8",
      "Sc_WOffDate": "Sep-2016",
      "Sc_OpenDate": "01-2016",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":2.52,
      "17":3.93,
      "18":9.64,
      "19":9.85
    }, {
      "KpiName": "GCL",
      "Month": "Month9",
      "Sc_WOffDate": "Oct-2016",
      "Sc_OpenDate": "01-2016",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":1.52,
      "17":2.93,
      "18":3.64,
      "19":6.85
    }, {
      "KpiName": "GCL",
      "Month": "Month10",
      "Sc_WOffDate": "Dec-2016",
      "Sc_OpenDate": "01-2016",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":3.52,
      "17":7.93,
      "18":9.64,
      "19":11.85
    }, {
      "KpiName": "GCL",
      "Month": "Month11",
      "Sc_WOffDate": "Aug-2019",
      "Sc_OpenDate": "01-2016",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":4.52,
      "17":8.93,
      "18":10.64,
      "19":11.85
    }, {
      "KpiName": "GCL",
      "Month": "Month12",
      "Sc_WOffDate": "Jan-2017",
      "Sc_OpenDate": "01-2017",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":4.52,
      "17":8.93,
      "18":10.64,
      "19":11.85,
    },
    {
      "KpiName": "LTL",
      "Month": "Month1",
      "Sc_WOffDate": "May-2018",
      "Sc_OpenDate": "01-2018",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":4.52,
      "17":8.93,
      "18":10.64,
      "19":11.85,
    }, {
      "KpiName": "LTL",
      "Month": "Month2",
      "Sc_WOffDate": "May-2018",
      "Sc_OpenDate": "01-2018",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":4.52,
      "17":8.93,
      "18":10.64,
      "19":11.85
    }, {
      "KpiName": "LTL",
      "Month": "Month3",
      "Sc_WOffDate": "May-2018",
      "Sc_OpenDate": "01-2018",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":4.52,
      "17":8.93,
      "18":10.64,
      "19":11.85
    }, {
      "KpiName": "LTL",
      "Month": "Month4",
      "Sc_WOffDate": "May-2018",
      "Sc_OpenDate": "01-2018",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":1.52,
      "17":2.93,
      "18":3.64,
      "19":6.85
    }, {
      "KpiName": "LTL",
      "Month": "Month5",
      "Sc_WOffDate": "May-2018",
      "Sc_OpenDate": "01-2018",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":4.52,
      "17":5.93,
      "18":5.64,
      "19":6.85
    }, {
      "KpiName": "LTL",
      "Month": "Month6",
      "Sc_WOffDate": "May-2018",
      "Sc_OpenDate": "01-2018",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":10.52,
      "17":11.93,
      "18":12.64,
      "19":13.85
    }, {
      "KpiName": "LTL",
      "Month": "Month7",
      "Sc_WOffDate": "Jun-2018",
      "Sc_OpenDate": "01-2018",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":14.52,
      "17":15.93,
      "18":16.64,
      "19":17.85
    }, {
      "KpiName": "LTL",
      "Month": "Month8",
      "Sc_WOffDate": "Aug-2018",
      "Sc_OpenDate": "01-2018",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":18.52,
      "17":19.93,
      "18":20.64,
      "19":21.85
    }, {
      "KpiName": "LTL",
      "Month": "Month9",
      "Sc_WOffDate": "Dec-2018",
      "Sc_OpenDate": "01-2018",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":6.52,
      "17":9.93,
      "18":11.64,
      "19":13.85
    }, {
      "KpiName": "LTL",
      "Month": "Month10",
      "Sc_WOffDate": "Jan-2019",
      "Sc_OpenDate": "01-2019",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":15.52,
      "17":18.93,
      "18":19.64,
      "19":21.85
    }, {
      "KpiName": "LTL",
      "Month": "Month11",
      "Sc_WOffDate": "Feb-2019",
      "Sc_OpenDate": "01-2019",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":3.52,
      "17":7.93,
      "18":8.64,
      "19":12.85
    }, {
      "KpiName": "LTL",
      "Month": "Month12",
      "Sc_WOffDate": "Mar-2019",
      "Sc_OpenDate": "01-2019",
      "OPSLink": "FBTHLASWB",
      "KpiLevel": "TIME",
      "16":1.52,
      "17":4.93,
      "18":8.64,
      "19":12.85
    }]
  }
  X_axis_gcl=[]
  X_axis_ltl=[]
   gcl_16=[]
   gcl_17=[]
   gcl_18=[]
   gcl_19=[]
   ltl_16=[]
   ltl_17=[]
   ltl_18=[]
   ltl_19=[]

  constructor(private highcharts: HeigchartsService) { }
  ngOnInit(){
    
    this.graph.GraphData.forEach(element=>{
      if(element.KpiName=='GCL'){
        this.X_axis_gcl.push(element.Month)
        this.gcl_16.push(element['16'])
        this.gcl_17.push(element['17'])
        this.gcl_18.push(element['18'])
        this.gcl_19.push(element['19'])
      }
      if(element.KpiName=='LTL'){
        this.X_axis_ltl.push(element.Month)
        this.ltl_16.push(element['16'])
        this.ltl_17.push(element['17'])
        this.ltl_18.push(element['18'])
        this.ltl_19.push(element['19'])
      }
    })
  }
  ngAfterViewInit() {
    setTimeout(()=>{
      this.highcharts.createChart(this.chartEl.nativeElement, this.myOptions);
      this.highcharts.createChart(this.chartE2.nativeElement, this.myOptions2);


    },3000);
  }
 
   myOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Gross Credit Loss (GCL)'
    },
    xAxis: {
      categories:this.X_axis_gcl
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: '1-2016',
      data: this.gcl_16
    }, {
      name: '1-2017',
      data:this.gcl_17
    }, {
      name: '1-2018',
      data: this.gcl_18
    },
    {
      name: '1-2019',
      data: this.gcl_19
    }]
  };

  myOptions2 = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Life Time Loss (LTL)'
    },
    xAxis: {
      categories:this.X_axis_ltl
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: '1-2016',
      data: this.ltl_16
    }, {
      name: '1-2017',
      data:this.ltl_17
    }, {
      name: '1-2018',
      data: this.ltl_18
    },
    {
      name: '1-2019',
      data: this.ltl_19
    }]
  };

  

}
