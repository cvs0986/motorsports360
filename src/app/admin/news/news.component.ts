import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  cars2: any = [
    { id: 1, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
  ];
  clonedCars = {};
  cols: any[];

  constructor(private messageService: MessageService, private api: ApiServiceService) { }

  ngOnInit() {
    this.api.listNews().subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
    
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  onRowEditInit(cars2) {
    // this.clonedCars[cars2.vin] = { ...cars2 };
  }

  onRowEditSave(cars2) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Car is updated' });
    console.log(cars2)
  }

  onRowEditCancel(cars2, index: number) {
    // this.cars2[index] = this.clonedCars[cars2.vin];
    // delete this.clonedCars[cars2.vin];
    console.log(cars2, index)
  }

}
