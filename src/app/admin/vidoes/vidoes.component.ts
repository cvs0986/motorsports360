import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-vidoes',
  templateUrl: './vidoes.component.html',
  styleUrls: ['./vidoes.component.css']
})
export class VidoesComponent implements OnInit {
  data: any[];
  isSpinning = false;

  seriesIDs: any[];
  authorsIDs: any[];

  videoHeadline;
  headlineTitle = 'Enter News Headline';
  descriptionTitle = 'Enter News Description'
  videoUrl;
  seriesID = null;
  videoTime;
  videoDate;
  videoDescription;
  videoImageUrl;
  videoAuthor;

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
        }
      },
      series_id: {
        title: 'Series',
        editable: false,
        type: 'html',
        valuePrepareFunction: (value) => { return `${value.name}` }
      },
      author_id: {
        title: 'Author',
        editable: false,
        type: 'html',
        valuePrepareFunction: (value) => { return `${value.name}` }
      },
      url: {
        title: 'Video Url',
        editable: false,
        type: 'html',
        valuePrepareFunction: (value) => { return `<a href="${value}" target="_blank">Video_Link</a>` },
        filter: false
      },
      description: {
        title: 'Description',
        editor: {
          type: 'textarea'
        }
      },
      date: {
        title: 'Date',
        editable: false,
        width: '9%'
      },
      time: {
        title: 'Time',
        editable: false,
        width: '9%'
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
    hideSubHeader: true
  };

  constructor(private messageService: MessageService, private api: ApiServiceService) {
    this.isSpinning = true;
    this.api.listVidoes().subscribe(
      (resp) => {
        console.log(resp);
        if (resp.status === 200) {
          this.data = resp.body.results;
          this.isSpinning = false;
        }
      },
      (error) => {
        console.log(error);
        this.isSpinning = false;
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
      date: event.newData.date,
      time: event.newData.time,
      news_url: event.newData.news_url,
      series_id: event.newData.series_id.id
    }

    this.api.updateVideo(event.newData.id, data).subscribe(
      (resp) => {
        console.log(resp);
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
    this.api.deleteVideo(event.data.id).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.status === 204) {
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
    this.videoDescription = value;
    this.updateDesc();
  }

  updateValue(value: string): void {
    this.videoHeadline = value;
    this.updateTitle();
  }

  updateDesc(): void {
    this.descriptionTitle = this.videoDescription;
  }

  updateTitle(): void {
    this.headlineTitle = this.videoHeadline;
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

  publishVideo(): void {
    const data = {
      headline: this.videoHeadline,
      date: this.changeDate(this.videoDate),
      time: this.changeTime(this.videoTime),
      url: this.videoUrl,
      series_id: this.seriesID,
      image_url: this.videoImageUrl,
      description: this.videoDescription,
      author_id: this.videoAuthor
    }
    this.isLoadingTwo = true;
    console.log(data);
    this.api.addVideo(data).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.status === 201) {
          this.api.listVidoes().subscribe(
            (resp) => {
              console.log(resp);
              if (resp.status === 200) {
                this.data = resp.body.results;
                this.isLoadingTwo = false;
                this.addBtn = true;
                this.showAddNewsForm = false;
                this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'Video published successfully!' });
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
