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

  videoHeadline;
  headlineTitle = 'Enter News Headline';
  descriptionTitle = 'Enter News Description'
  videoUrl;
  seriesID = null;
  videoTime;
  videoDate;
  videoDescription;
  videoImageUrl;

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
        }
      },
      series_id: {
        title: 'Series',
        editable: false
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
    noDataMessage: this.dataMsg,
    hideSubHeader: true
  };

  constructor(private messageService: MessageService, private api: ApiServiceService) { }

  ngOnInit() {
    this.api.listVidoes().subscribe(
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

  onSaveConfirm(event): void {
    // this.api.updateNews(event.newData.id, event.newData).subscribe(
    //   (resp) => {
    //     if (resp.status === 200) {
    //       event.confirm.resolve(this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //     event.confirm.reject(this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
    //   }
    // );
  }

  onDeleteConfirm(event): void {
    // this.api.deleteNews(event.newData.id).subscribe(
    //   (resp) => {
    //     if (resp.status === 204) {
    //       event.confirm.resolve(this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //     event.confirm.reject(this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }));
    //   }
    // );
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

  publishVideo(): void {
    const data = {
      headline: this.videoHeadline,
      date: this.videoDate,
      time: this.videoTime,
      url: this.videoUrl,
      series_id: this.seriesID,
      image_url: this.videoImageUrl,
      description: this.videoDescription
    }
    this.isLoadingTwo = true;
    console.log(data);
    this.api.addVideo(data).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.status === 201) {
          this.isLoadingTwo = false;
          this.addBtn = true;
          this.showAddNewsForm = false;
          this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'Video published successfully!' });
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
