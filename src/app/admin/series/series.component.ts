import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  data: any[];

  seriesIDs: any[] = [
    { id: 18, name: 'Formula1' },
    { id: 20, name: 'NASCAR' },
    { id: 21, name: 'MotoGP' },
    { id: 19, name: 'World Rally Championship	' },
    { id: 23, name: 'Supercars' },
    { id: 22, name: 'World Superbikes' },
    { id: 24, name: 'IndyCar' },
    { id: 25, name: 'Formula E' },
    { id: 26, name: 'World Rally Cross' },
    { id: 27, name: 'World Touring Car Cup' },
    { id: 28, name: 'Drag Racing' },
    { id: 29, name: 'World of Outlaws Sprintcars' }
  ];

  newsHeadline;
  headlineTitle = 'Enter News Headline';
  descriptionTitle = 'Enter News Description'
  newsImgUrl;
  newsUrl;
  newsSeriesID = null;
  newsTime;
  newsDate;
  newsAuthor;
  newsDescription;

  showAddSeriesForm = false;
  isLoadingTwo = false;
  addBtn = true;

  dataMsg: string = 'Please Wait while data is loading ...';
  settings = {
    columns: {
      id: {
        title: 'S.No.'
      },
      name: {
        title: 'Name',
        width: '10%'
      },
      series_url: {
        title: 'Series Url',
        type: 'html',
        valuePrepareFunction: (value) => { return `<a href="${value}" target="_blank">Series Url</a>` },
      },
      previous_race_name: {
        title: 'Previous Race Name'
      },
      previous_race_date: {
        title: 'Previous Race Date',
      },
      next_race_name: {
        title: 'Next Race Name',
      },
      next_race_date: {
        title: 'Next Race Date',
      }
    },
    add: {
      addButtonContent: 'Add',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<img src="../../../assets/edit.png" width="20"/>',
      saveButtonContent: '<img src="../../../assets/check-mark.png" width="22"/>',
      cancelButtonContent: '<img src="../../../assets/close-cross.png" width="22"/>',
      confirmCreate: true,
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<img src="../../../assets/delete.png" width="20"/>',
      confirmDelete: true
    },
    actions: {
      position: 'right'
    },
    pager: {
      display: true,
      perPage: 10
    },
    noDataMessage: this.dataMsg,
    hideSubHeader: true
  };

  constructor(private messageService: MessageService, private api: ApiServiceService) {
   }

  ngOnInit() {
    this.data = [
      { id: 18, name: 'Formula 1', series_url: 'https://www.neolen.com/', previous_race_name: 'none', previous_race_date: 'none', next_race_name: 'none', next_race_date: 'none', },
      { id: 19, name: 'World Rally Championship', series_url: 'https://www.neolen.com/', previous_race_name: 'none', previous_race_date: 'none', next_race_name: 'none', next_race_date: 'none', },
      { id: 20, name: 'NASCAR', series_url: 'https://www.neolen.com/', previous_race_name: 'none', previous_race_date: 'none', next_race_name: 'none', next_race_date: 'none'},
    ];
  }

  onSaveConfirm(event): void {
    
  }

  onDeleteConfirm(event): void {
    
  }

  onCreateConfirm(event) {
    
  }

  onEditRow(event) {
    console.log('Editing');
  }

  onHeadlineChange(value: string): void {
    this.updateValue(value);
  }

  onDescriptionChange(value: string): void {
    this.updateDescValue(value);
  }

  updateDescValue(value: string): void {
    this.newsDescription = value;
    this.updateDesc();
  }

  updateValue(value: string): void {
    this.newsHeadline = value;
    this.updateTitle();
  }

  updateDesc(): void {
    this.descriptionTitle = this.newsDescription;
  }

  updateTitle(): void {
    this.headlineTitle = this.newsHeadline;
  }

  addBtnClicked() {
    this.addBtn = false;
    this.showAddSeriesForm = true;
  }

  publishNews(): void {
    const newsData = {
      headline: this.newsHeadline,
      description: this.newsDescription,
      author: this.newsAuthor,
      news_date: this.newsDate,
      news_time: this.newsTime,
      image_url: this.newsImgUrl,
      news_url: this.newsUrl,
      series_id: this.newsSeriesID
    }
    this.isLoadingTwo = true;
    console.log(newsData);
    
  }

  addNewsCancel() {
    this.addBtn = true;
    this.showAddSeriesForm = false;
  }

}
