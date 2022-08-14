import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'indigital-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {

  indicators: any [] = [];
  indicatorMaximun: any;
  indicatorMinimum: any;
  labels: string [] = [];
  data: number [] = [];
  cantMaximum: number = 0;
  cantMinimum: number = 0;
  constructor(
    public customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
   this.customerService.indicators().subscribe(data => {
    this.indicators = data;
    this.generateLabels();
    this.pieChartLabels = this.labels;
    this.pieChartDatasets = [{
      data: this.data
    }];
    this.cantMaximum = Math.max(...this.data);
    this.cantMinimum = Math.min(...this.data);
    this.indicatorMaximun = this.indicators.find( indicator => indicator.cant === this.cantMaximum);
    this.indicatorMinimum = this.indicators.find( indicator => indicator.cant === this.cantMinimum);
   })


  }

  generateLabels() {
    this.indicators.forEach( indicator => {
      this.labels.push(`${this.convertMonth(indicator.mes)}, ${indicator.anio}`)
      this.data.push(Number(indicator.cant));
    });
  }

  convertMonth(month: number): string {
    let monthConvert = '';
    switch (month) {
      case 1:
        monthConvert = 'Enero'
      break;
      case 2:
        monthConvert = 'Febrero'
      break;
      case 3:
        monthConvert = 'Marzo'
      break;
      case 4:
        monthConvert = 'Abril'
      break;
      case 5:
        monthConvert = 'Mayo'
      break;
      case 6:
        monthConvert = 'Junio'
      break;
      case 7:
        monthConvert = 'Julio'
      break;
      case 8:
        monthConvert = 'Agosto'
      break;
      case 9:
        monthConvert = 'Setiembre'
      break;
      case 10:
        monthConvert = 'Octubre'
      break;
      case 11:
        monthConvert = 'Noviembre'
      break;
      case 12:
        monthConvert = 'Diciembre'
      break;
    }
    return monthConvert;
  }
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ 'Mail Sales', 'venta' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
