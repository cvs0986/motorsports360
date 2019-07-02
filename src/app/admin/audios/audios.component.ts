import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.css']
})
export class AudiosComponent implements OnInit {
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

  audioHeadline;
  headlineTitle = 'Enter News Headline';
  descriptionTitle = 'Enter News Description'
  audioImageUrl;
  seriesID = null;
  audioTime;
  audioDate;
  audioDescription;
  audioUrl;

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
        editable: false
      },
      url: {
        title: 'Url',
        editable: false,
        type: 'html',
        valuePrepareFunction: (value) => { return `<a href="${value}" target="_blank">Url</a>` },
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
    this.api.listAudios().subscribe(
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
    this.api.updateAudio(event.newData.id, event.newData).subscribe(
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
    this.api.deleteAudio(event.data.id).subscribe(
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
    this.audioDescription = value;
    this.updateDesc();
  }

  updateValue(value: string): void {
    this.audioHeadline = value;
    this.updateTitle();
  }

  updateDesc(): void {
    this.descriptionTitle = this.audioDescription;
  }

  updateTitle(): void {
    this.headlineTitle = this.audioHeadline;
  }

  addBtnClicked() {
    this.addBtn = false;
    this.showAddNewsForm = true;
  }

  publishAudio(): void {
    const data = {
      title: this.audioHeadline,
      date: this.audioDate,
      time: this.audioTime,
      image_url: this.audioImageUrl,
      series_id: this.seriesID,
      url: this.audioUrl,
      description: this.audioDescription
    }
    this.isLoadingTwo = true;
    console.log(data);
    this.api.addAudio(data).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.status === 201) {
          this.isLoadingTwo = false;
          this.addBtn = true;
          this.showAddNewsForm = false;
          this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'Audio published successfully!' });
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
