import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  dataSource: any;
  @Input() chartData:Param[];
  public chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          // stepSize: 10,
          beginAtZero: true
        }
      }]
    }
  }
 
  dateLabel: any[];
  constructor(private userService: UserService) {
    
  }

  print(chartImage: any) {
    var sBase64 = chartImage.getBase64Image();
    // console.log(sBase64);
    let newWindow;
    newWindow = window.open();
    newWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
        </head>
        <body onload="window.print();window.close()">
        <img src="${sBase64}" />
      </html>`
    );
    newWindow.document.close();
  }

  ngOnInit(): void {
   //this.prepareChart()
  }
  ngOnChanges(){
    this.prepareChart()
    //console.log(this.chartData)
  }
  prepareChart(){
    this.dateLabel = this.chartData.map(emp => emp.createdDt)
    var outObject = this.chartData.reduce(function(a, param) {
     
     
      let estKey = (param['parameter']); 
    
      (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(param);
      return a;
    }, {});
  const  chObj=[] ;
    for (var key in outObject) {
      const temp= new ChartObj();
      temp.label=key
      temp.backgroundColor=this.getRandomColor(),
      temp.barThickness= 16
      outObject[key].forEach(element => {
        temp.data.push(element.exceedence)
        
      });
      chObj.push(temp);
    }
      this.dataSource = {
        labels: this.dateLabel,
        datasets: chObj
      }; 
    
  }
  getRandomColor() {
    var colors = [ 'orange','#4bc0c0','#29215c','#f66342','#63256a'];
    return colors[Math.floor(Math.random() * colors.length)];
    }
}
export interface Param{
      createdDt?:string
      exceedence: string,
      parameter: string,
      stationName?: string,
     
}
export class ChartObj{
  label:string
  backgroundColor: string
  data:any[]=[] 
  barThickness:number
  constructor(){}  
}