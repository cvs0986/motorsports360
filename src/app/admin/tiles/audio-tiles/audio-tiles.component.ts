import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-audio-tiles',
  templateUrl: './audio-tiles.component.html',
  styleUrls: ['./audio-tiles.component.css']
})

export class AudioTilesComponent implements OnInit {

  data: any[];
  isSpinning = false;

  name;
  url;
  imageUrl;

  loading = false;
  avatarUrl: string;
  avatarFile;
  avatarFileName;


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
      name: {
        title: 'Name',
        editor: {
          type: 'textarea'
        }
      },
      url: {
        title: 'Url',
        editable: true,
        type: 'html',
        valuePrepareFunction: (value) => { return `<a href="${value}" target="_blank">Url</a>` },
        filter: false
      },
      main: {
        title: 'Main',
        editable: true,
        type: 'text',
        defaultValue: false,
        editor: {
          type: 'checkbox'
        }
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


  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      this.loading = false;
      this.avatarUrl = img;
      this.avatarFile = info.file!.originFileObj!;

      this.avatarFileName = info.file!.name;
      console.log(this.avatarFile);
    });
  }

  constructor(private messageService: MessageService, private api: ApiServiceService) {
    this.isSpinning = true;
    this.api.listAudioTiles().subscribe(
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
  }

  ngOnInit() {
  }

  onSaveConfirm(event): void {
    const data = {
      name: event.newData.name,
      id: event.newData.id,
      image_url: event.newData.image_url,
      url: event.newData.url,
      main: event.newData.main
    };

    console.log(event);

    this.api.updateAudioTiles(event.newData.id, data).subscribe(
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
    this.api.deleteAudioTiles(event.data.id).subscribe(
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


  addBtnClicked() {
    this.addBtn = false;
    this.showAddNewsForm = true;
  }

  publishAudio(): void {
    const formData = new FormData();
    formData.append('image_url', this.avatarFile);
    formData.append('name', this.name);
    formData.append('url', this.url);
    this.isLoadingTwo = true;
    console.log(formData);
    this.api.addAudioTiles(formData).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.status === 201) {
          this.api.listAudioTiles().subscribe(
            (resp) => {
              console.log(resp);
              if (resp.status === 200) {
                this.data = resp.body.results;
                this.isLoadingTwo = false;
                this.addBtn = true;
                this.showAddNewsForm = false;
                this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'Audio published successfully!' });
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
