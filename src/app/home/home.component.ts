// home.component.ts
import { Component, AfterViewInit } from '@angular/core';

declare var Highcharts: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  isSidebarExpanded = false;

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
  

  ngAfterViewInit(): void {
    Highcharts.chart('container', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Monthly Sales'
      },
      xAxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        accessibility: {
          description: 'Months of the year'
        }
      },
      yAxis: {
        title: {
          text: 'Sales'
        },
        labels: {
          format: '{value}'
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: [{
        name: 'Product A',
        marker: {
          symbol: 'square'
        },
        data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, {
          y: 26.4,
          marker: {
            // symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
          },
          accessibility: {
            // description: 'Sunny symbol, this is the highest sales point in the chart.'
          }
        }, 22.8, 17.5, 12.1, 7.6]
      }, {
        name: 'Product B',
        marker: {
          symbol: 'diamond'
        },
        data: [{
          y: 1.5,
          marker: {
            // symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
          },
          accessibility: {
            // description: 'Snowy symbol, this is the lowest sales point in the chart.'
          }
        }, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
      }]
    });
    
  }
  
}
