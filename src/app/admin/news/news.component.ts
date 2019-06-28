import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  data: any[];

  seriesIDs: any[] = [
    { id: 18, name: 'Formula1' },
    { id: 20, name: 'NASCAR' },
    { id: 21, name: 'MotoGP' },
    { id: 19, name: 'World Rally Championship	' },
    { id: 23, name: 'Supercars' },
    { id: 22, name: 'World Superbikes'},
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

  showAddNewsForm = false;
  isLoadingTwo = false;
  addBtn = true;

  dataMsg: string = 'Please Wait while data is loading ...';
  settings = {
    columns: {
      id: {
        title: 'S.No.',
        editable: false,
        filter: false
      },
      image_url: {
        title: 'Image',
        type: 'html',
        filter: false,
        valuePrepareFunction: (value) => { return `<img src="${value}" width="80" style="border-radius: 22px;" />` }
      },
      headline: {
        title: 'Headline',
        editor: {
          type: 'textarea'
        },
        width: '15%'
      },
      author: {
        title: 'Author/Series',
        editable: false
      },
      news_url: {
        title: 'News_Url',
        editable: false,
        type: 'html',
        valuePrepareFunction: (value) => { return `<a href="${value}" target="_blank">News_Link</a>` },
        filter: false
      },
      description: {
        title: 'Description',
        editor: {
          type: 'textarea'
        },
        width: '40%'
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
    this.api.listNews().subscribe(
      (resp) => {
        if (resp.status === 200) {
          this.data = resp.body.results;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  
  }

  onSaveConfirm(event): void {
    this.api.updateNews(event.newData.id, event.newData).subscribe(
      (resp) => {
        if (resp.status === 200) {
          event.confirm.resolve(this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
        }
      },
      (error) => {
        console.log(error);
        event.confirm.reject(this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
      }
    );
  }

  onDeleteConfirm(event): void {
    this.api.deleteNews(event.newData.id).subscribe(
      (resp) => {
        if (resp.status === 200) {
          event.confirm.resolve(this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
        }
      },
      (error) => {
        console.log(error);
        event.confirm.reject(this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
      }
    );
  }

  onCreateConfirm(event) {
    this.api.addNews(event.newData).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(event);
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
    this.showAddNewsForm = true;
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
    this.api.addNews(newsData).subscribe(
      (resp) => {
        if (resp.status === 200) {
          this.isLoadingTwo = false;
          this.addBtn = true;
          this.showAddNewsForm = false;
          this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'News published successfully!' });
        }
      },
      (error) => {
        console.log(error);
        this.isLoadingTwo = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong. Please try after sometime.' });
      }
    );
  }

  addNewsCancel() {
    this.addBtn = true;
    this.showAddNewsForm = false;
  }

}
