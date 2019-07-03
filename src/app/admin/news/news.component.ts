import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { NzModalService } from 'ng-zorro-antd';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  data: any[];

  dataRow: any[] = [{ rowCounts: 10 }, { rowCounts: 20 }, { rowCounts: 50 }, { rowCounts: 100 }];
  rowCount = 10;

  seriesIDs: any[];
  authorsIDs: any[];

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
        filter: false,
        sortDirection: 'desc',
        width: '8%'
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
        title: 'Author',
        editable: false
      },
      series_id: {
        title: 'Series',
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
      addButtonContent: 'Add'
    },
    edit: {
      editButtonContent: '<img src="../../../assets/edit.png" class="mr-2" width="20"/>',
      saveButtonContent: '<img src="../../../assets/check-mark.png" class="mr-2" width="22"/>',
      cancelButtonContent: '<img src="../../../assets/close-cross.png" width="22"/>',
      confirmCreate: true,
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<img src="../../../assets/delete.png" (click)="showConfirm()" width="20"/>',
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

  constructor(private messageService: MessageService, private api: ApiServiceService, private modalService: NzModalService) { 
    this.api.listNews().subscribe(
      (resp) => {
        if (resp.status === 200) {
          console.log(resp);
          this.data = resp.body.results;
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.api.listSeries().subscribe(
      (resp) => {
        if (resp.status === 200) {
          console.log(resp);
          this.seriesIDs = resp.body.results;
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.api.listAuthor().subscribe(
      (resp) => {
        if (resp.status === 200) {
          console.log(resp);
          this.authorsIDs = resp.body.results;
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

  showConfirm(event): void {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'Do you really want to delete?',
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOkLoading: false,
      nzOnOk: () => {
        this.api.deleteNews(event.data.id).subscribe(
          (resp) => {
            console.log(resp);
            if (resp.status === 204) {
              console.log(resp);
              event.confirm.resolve(this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
            }
          },
          (error) => {
            console.log(error);
            event.confirm.reject(this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
          }
        );
      }
    });
  }

  onDeleteConfirm(event): void {
    console.log(event);
    this.showConfirm(event);
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
        console.log(resp);
        if (resp.status === 201) {
          this.api.listNews().subscribe(
            (resp) => {
              if (resp.status === 200) {
                console.log(resp);
                this.data = resp.body.results;
                this.isLoadingTwo = false;
                this.addBtn = true;
                this.showAddNewsForm = false;
                this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'News published successfully!' });
              }
            },
            (error) => {
              console.log(error);
            }
          );
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
