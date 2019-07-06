import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { NzMessageService, NzModalService, UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  data: any[];

  loading = false;

  driverAvatarUrl: string;
  driverAvatarFile;

  eventAvatarUrl: string;
  eventAvatarFile;

  teamAvatarUrl: string;
  teamAvatarFile;

  name;
  image_url;
  authorID;
  driver_url;
  team_url;
  event_url;

  showAddSeriesForm = false;
  isLoadingTwo = false;
  addBtn = true;

  dataMsg: string = 'Please Wait while data is loading ...';
  settings = {
    columns: {
      id: {
        title: 'S.No.',
        sortDirection: 'desc',
        editable: false
      },
      name: {
        title: 'Name',
        editable: false
      },
      driver_url: {
        title: 'Driver Url',
        type: 'html',
        valuePrepareFunction: (value) => { return `<a href="${value}" target="_blank">Driver Link</a>` },
      },
      event_url: {
        title: 'Event Url',
        type: 'html',
        valuePrepareFunction: (value) => { return `<a href="${value}" target="_blank">Event Link</a>` },
      },
      team_url: {
        title: 'Team Url',
        type: 'html',
        valuePrepareFunction: (value) => { return `<a href="${value}" target="_blank">Team Link</a>` },
      },
    },
    add: {
      addButtonContent: 'Add',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<img src="../../../assets/edit.png" class="ml-3" width="20"/>',
      saveButtonContent: '<img src="../../../assets/check-mark.png" class="mr-2" width="22"/>',
      cancelButtonContent: '<img src="../../../assets/close-cross.png" width="22"/>',
      confirmCreate: true,
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '',
      confirmDelete: true
    },
    actions: {
      position: 'right'
    },
    pager: {
      display: true,
      perPage: 15
    },
    hideSubHeader: true,
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  driverAvatarChange(info: { file: UploadFile }): void {
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      this.loading = false;
      this.driverAvatarUrl = img;
      this.driverAvatarFile = info.file!.originFileObj!;
      console.log(this.driverAvatarFile);
    });
  }

  teamAvatarChange(info: { file: UploadFile }): void {
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      this.loading = false;
      this.teamAvatarUrl = img;
      this.teamAvatarFile = info.file!.originFileObj!;
      console.log(this.teamAvatarFile);
    });
  }

  eventAvatarChange(info: { file: UploadFile }): void {
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      this.loading = false;
      this.eventAvatarUrl = img;
      this.eventAvatarFile = info.file!.originFileObj!;
      console.log(this.eventAvatarFile);
    });
  }

  constructor(private messageService: MessageService, private api: ApiServiceService, private msg: NzMessageService, private modalService: NzModalService) { }

  ngOnInit() {
    this.api.listDrivers().subscribe(
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
  }

  onSaveConfirm(event): void {
    this.api.updateDrivers(event.newData.id, event.newData).subscribe(
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

}
