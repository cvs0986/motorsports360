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
      author_id: {
        title: 'Author',
        editable: false,
        type: 'html',
        valuePrepareFunction: (value) => { return `${value.name}` }
      },
      series_id: {
        title: 'Series',
        editable: false,
        type: 'html',
        valuePrepareFunction: (value) => { return `${value.name}` }
      },
      trending: {
        title: 'Trending',
        type: 'html',
        editable: false,
        valuePrepareFunction: (value) => {
          function showTrending() {
            if (value === false) {
              return 'NO';
            } else if (value === true) {
              return 'YES';
            }
          }

          return `${showTrending()}`;
        }
      },
      top: {
        title: 'Top_Story',
        type: 'html',
        editable: false,
        valuePrepareFunction: (value) => {
          function showTop() {
            if (value === false) {
              return 'NO';
            } else if (value === true) {
              return 'YES';
            }
          }

          return `${showTop()}`;
        }
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
      position: 'right',
      custom: [
        { name: 'trendNews', title: `<img data-toggle="tooltip" data-placement="top" title="Trending" src="../../../assets/trending.png" class="mr-2 mb-2" width="20"/>` },
        { name: 'topStory', title: `<img data-toggle="tooltip" data-placement="top" title="Top Story" src="../../../assets/top-story.png" class="mr-2 mb-2" width="20"/>` }
      ]
    },
    pager: {
      display: true,
      perPage: 10
    },
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
    const data = {
      author_id: event.newData.author_id.id,
      description: event.newData.description,
      headline: event.newData.headline,
      id: event.newData.id,
      image_url: event.newData.image_url,
      news_date: event.newData.news_date,
      news_time: event.newData.news_time,
      news_url: event.newData.news_url,
      series_id: event.newData.series_id.id
    };

    this.api.updateNews(event.newData.id, data).subscribe(
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

  showTrendingConfirm(event): void {
    function showTrending() {
      if (event.data.trending === false) {
        return 'Do you really want make this news trending?';
      } else if (event.data.trending === true) {
        return 'Do you really want remove this news from trending?';
      }
    }
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: showTrending(),
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOkLoading: false,
      nzOnOk: () => {
        function toggleTrending() {
          if (event.data.trending === false) {
            return true;
          } else if (event.data.trending === true) {
            return false;
          }
        }
        const data = {
          author_id: event.data.author_id.id,
          description: event.data.description,
          headline: event.data.headline,
          id: event.data.id,
          image_url: event.data.image_url,
          news_date: event.data.news_date,
          news_time: event.data.news_time,
          news_url: event.data.news_url,
          series_id: event.data.series_id.id,
          trending: toggleTrending(),
          top: event.data.top
        };
        this.api.updateNews(event.data.id, data).subscribe(
          (resp) => {
            if (resp.status === 200) {
              this.api.listNews().subscribe(
                // tslint:disable-next-line: no-shadowed-variable
                (resp) => {
                  if (resp.status === 200) {
                    console.log(resp);
                    this.data = resp.body.results;
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
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
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
          }
        );
    }});
  }

  showTopStoryConfirm(event): void {
    function showTop() {
      if (event.data.top === false) {
        return 'Do you really want make this news top story?';
      } else if (event.data.top === true) {
        return 'Do you really want remove this news from top story?';
      }
    }
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: showTop(),
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOkLoading: false,
      nzOnOk: () => {
        function toggleTop() {
          if (event.data.top === false) {
            return true;
          } else if (event.data.top === true) {
            return false;
          }
        }
        const data = {
          author_id: event.data.author_id.id,
          description: event.data.description,
          headline: event.data.headline,
          id: event.data.id,
          image_url: event.data.image_url,
          news_date: event.data.news_date,
          news_time: event.data.news_time,
          news_url: event.data.news_url,
          series_id: event.data.series_id.id,
          trending: event.data.trending,
          top: toggleTop()
        };
        this.api.updateNews(event.data.id, data).subscribe(
          (resp) => {
            if (resp.status === 200) {
              this.api.listNews().subscribe(
                // tslint:disable-next-line: no-shadowed-variable
                (resp) => {
                  if (resp.status === 200) {
                    console.log(resp);
                    this.data = resp.body.results;
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
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
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
          }
        );
      }
    });
  }

  customAction(event) {
    console.log(event);
    if (event.action === "trendNews") {
      this.showTrendingConfirm(event);
    } else if (event.action === "topStory") {
      this.showTopStoryConfirm(event);
    }
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
              event.confirm.resolve(this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' }));
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

  changeDate(date) {
    return new Date(date).toDateString();
  }

  changeTime(time) {
    return new Date(time).toLocaleTimeString();
  }

  publishNews(): void {
    const newsData = {
      headline: this.newsHeadline,
      description: this.newsDescription,
      author_id: this.newsAuthor,
      news_date: this.changeDate(this.newsDate),
      news_time: this.changeTime(this.newsTime),
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
