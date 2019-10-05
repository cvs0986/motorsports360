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
  isSpinning = false;

  loading = false;

  driverAvatarUrl: string;
  driverAvatarFile;

  eventAvatarUrl: string;
  eventAvatarFile;

  teamAvatarUrl: string;
  teamAvatarFile;

  leaderAvatarUrl: string;
  leaderAvatarFile;

  seriesAvatarUrl: string;
  seriesAvatarFile;

  savedStoriesAvatarUrl: string;
  savedStoriesAvatarFile;

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
      leader_url: {
        title: 'Leader Url',
        type: 'html',
        valuePrepareFunction: (value) => { return `<a href="${value}" target="_blank">Leader Link</a>` },
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
// tslint:disable-next-line: no-non-null-assertion
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  driverAvatarChange(info: { file: UploadFile }): void {
// tslint:disable-next-line: no-non-null-assertion
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      this.loading = false;
      this.driverAvatarUrl = img;
// tslint:disable-next-line: no-non-null-assertion
      this.driverAvatarFile = info.file!.originFileObj!;
      console.log(this.driverAvatarFile);
      const data = new FormData();
      data.append('driver_banner_image', this.driverAvatarFile);

      this.api.updateDriverBanner(1, data).subscribe(
        (resp) => {
          console.log(resp, this.driverAvatarFile);
          this.driverAvatarUrl = resp.body.driver_banner_image;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Driver Banner changed Successfully!' });
        },
        (error) => {
          console.log(error, this.driverAvatarFile);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
        }
      );
    });
  }

  teamAvatarChange(info: { file: UploadFile }): void {
// tslint:disable-next-line: no-non-null-assertion
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      this.loading = false;
      this.teamAvatarUrl = img;
// tslint:disable-next-line: no-non-null-assertion
      this.teamAvatarFile = info.file!.originFileObj!;
      console.log(this.teamAvatarFile);

      const data = new FormData();
      data.append('team_banner_image', this.teamAvatarFile);

      this.api.updateTeamBanner(1, data).subscribe(
        (resp) => {
          console.log(resp, this.teamAvatarFile);
          this.teamAvatarUrl = resp.body.team_banner_image;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Team Banner changed Successfully!' });
        },
        (error) => {
          console.log(error, this.teamAvatarFile);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
        }
      );
    });
  }

  eventAvatarChange(info: { file: UploadFile }): void {
// tslint:disable-next-line: no-non-null-assertion
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      this.loading = false;
      this.eventAvatarUrl = img;
// tslint:disable-next-line: no-non-null-assertion
      this.eventAvatarFile = info.file!.originFileObj!;
      console.log(this.eventAvatarFile);
      const data = new FormData();
      data.append('event_banner_image', this.eventAvatarFile);
      // const data = {
      //   event_banner_image: this.eventAvatarFile
      // };

      this.api.updateEventBanner(1, data).subscribe(
        (resp) => {
          console.log(resp, this.eventAvatarFile);
          this.eventAvatarUrl = resp.body.event_banner_image;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Event Banner changed Successfully!'});
        },
        (error) => {
          console.log(error, this.eventAvatarFile);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!'});
        }
      );
    });
  }

  leaderAvatarChange(info: { file: UploadFile }): void {
    // tslint:disable-next-line: no-non-null-assertion
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      this.loading = false;
      this.leaderAvatarUrl = img;
      // tslint:disable-next-line: no-non-null-assertion
      this.leaderAvatarFile = info.file!.originFileObj!;
      console.log(this.eventAvatarFile);
      const data = new FormData();
      data.append('leader_banner_image', this.leaderAvatarFile);
      // const data = {
      //   event_banner_image: this.eventAvatarFile
      // };

      this.api.updateLeaderBanner(1, data).subscribe(
        (resp) => {
          console.log(resp, this.leaderAvatarFile);
          this.eventAvatarUrl = resp.body.leader_banner_image;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Leader Banner changed Successfully!' });
        },
        (error) => {
          console.log(error, this.leaderAvatarFile);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
        }
      );
    });
  }

  seriesAvatarChange(info: { file: UploadFile }): void {
    // tslint:disable-next-line: no-non-null-assertion
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      this.loading = false;
      this.seriesAvatarUrl = img;
      // tslint:disable-next-line: no-non-null-assertion
      this.seriesAvatarFile = info.file!.originFileObj!;
      const data = new FormData();
      data.append('my_series_banner_image', this.seriesAvatarFile);

      this.api.updateSeriesBanner(1, data).subscribe(
        (resp) => {
          console.log(resp, this.seriesAvatarFile);
          this.eventAvatarUrl = resp.body.my_series_banner_image;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Series Banner changed Successfully!' });
        },
        (error) => {
          console.log(error, this.seriesAvatarFile);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
        }
      );
    });
  }

  savedStoriesAvatarChange(info: { file: UploadFile }): void {
    // tslint:disable-next-line: no-non-null-assertion
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      this.loading = false;
      this.savedStoriesAvatarUrl = img;
      // tslint:disable-next-line: no-non-null-assertion
      this.savedStoriesAvatarFile = info.file!.originFileObj!;
      const data = new FormData();
      data.append('saved_series_banner_image', this.savedStoriesAvatarFile);

      this.api.updateLeaderBanner(1, data).subscribe(
        (resp) => {
          console.log(resp, this.savedStoriesAvatarFile);
          this.eventAvatarUrl = resp.body.saved_series_banner_image;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Saved Stories Banner changed Successfully!' });
        },
        (error) => {
          console.log(error, this.savedStoriesAvatarFile);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
        }
      );
    });
  }

// tslint:disable-next-line: max-line-length
  constructor(private messageService: MessageService, private api: ApiServiceService, private msg: NzMessageService, private modalService: NzModalService) {
    this.api.getBannerImages().subscribe(
      (resp) => {
        console.log(resp);
        this.driverAvatarUrl = resp.body.results[0].driver_banner_image;
        this.eventAvatarUrl = resp.body.results[0].event_banner_image;
        this.teamAvatarUrl = resp.body.results[0].team_banner_image;
        this.leaderAvatarUrl = resp.body.results[0].leader_banner_image;
        this.seriesAvatarUrl = resp.body.results[0].my_series_banner_image;
        this.savedStoriesAvatarUrl = resp.body.results[0].saved_series_banner_image;
      },
      (error) => {
        console.log(error);
      }
    );
   }

  ngOnInit() {
    this.isSpinning = true;
    this.api.listDrivers().subscribe(
      (resp) => {
        if (resp.status === 200) {
          console.log(resp);
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
