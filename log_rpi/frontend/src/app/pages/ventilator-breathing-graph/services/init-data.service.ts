import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from '../models/data.model';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {of as observableOf} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  Values: any[] = [];

  getDatasas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3001/api/rpi_data_simulation/data')
      .pipe(
        map(res => (new Data().deserialize(res)).data[0]),
      );
  }
  // getDatasas(): Observable<Data> {
  //   return this.http.get<any[]>('http://localhost:3001/api/rpi_data_simulation/data')
  //     .pipe(
  //       map(res => (new Data().deserialize(res))),
  //     );
  // }

  getDatas(): Observable<any[]> {
    // const data = this.liveUpdateChartData[currency.toLowerCase()];
    // const newValue = this.generateRandomLiveChartData();

    // data.liveChart.shift();
    // data.liveChart.push(newValue);

        const res = this.http.get<any[]>('http://localhost:3001/api/rpi_data_simulation/data');
        const data = new Data().deserialize(res);
      // .pipe(
      //   map(res => (new Data().deserialize(res))),
      // );

    return observableOf(data.data.data[0].data);
  }

  // getDatas(): Observable<any[]> {
  //   this.http.get<any[]>('http://localhost:3001/api/rpi_data_simulation/data')
  //     .pipe(
  //       map(res => (new Data().deserialize(res))),
  //     );
  // }


}
