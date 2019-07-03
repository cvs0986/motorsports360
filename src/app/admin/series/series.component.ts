import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { NzMessageService, UploadFile, NzModalService } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  data: any[];

  isVisible = false;
  loading = false;
  avatarUrl: string;
  avatarFile;
  avatarFileName;

  name;
  image_url;
  authorID;

  showAddSeriesForm = false;
  isLoadingTwo = false;
  addBtn = true;

  dataMsg: string = 'Please Wait while data is loading ...';
  settings = {
    columns: {
      id: {
        title: 'S.No.',
        sortDirection: 'desc',
      },
      image_url: {
        title: 'Image',
        type: 'html',
        valuePrepareFunction: (value) => { return `<img src="${value}" width="80" style="border-radius: 22px;" />` },
      },
      name: {
        title: 'Name'
      },
    },
    add: {
      addButtonContent: 'Add',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<img src="../../../assets/edit.png" class="mr-2" width="20"/>',
      saveButtonContent: '<img src="../../../assets/check-mark.png" class="mr-2" width="22"/>',
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
    hideSubHeader: true,
    mode: 'external'
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
      this.avatarFile = info.file!;
      this.avatarFileName = info.file!.name;
      console.log(info.file!);
    });
  }

  constructor(private messageService: MessageService, private api: ApiServiceService, private msg: NzMessageService, private modalService: NzModalService) {
    this.api.listSeries().subscribe(
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

  ngOnInit() {
    
  }

  showConfirm(event): void {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'Do you really want to delete?',
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOkLoading: false,
      nzOnOk: () => {
        this.api.deleteSeries(event.data.id).subscribe(
          (resp) => {
            console.log(resp);
            if (resp.status === 204) {
              this.api.listSeries().subscribe(
                (resp) => {
                  if (resp.status === 200) {
                    console.log(resp);
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' });
                    this.data = resp.body.results;
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

  seriesDelete(event) {
    this.showConfirm(event);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    const data = {
      id: this.authorID,
      name: this.name,
      image_url: this.avatarUrl
    }
    console.log(data);
    this.api.updateSeries(this.authorID, data).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.status === 200) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
          this.addNewsCancel();
          this.handleCancel();
        }
      },
      (error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
      }
    )
  }

  handleCancel(): void {
    this.isVisible = false;
    this.addNewsCancel();
  }

  onEditRow(event) {
    this.showModal();
    console.log(event);
    this.name = event.data.name;
    this.avatarUrl = event.data.image_url;
    this.authorID = event.data.id
  }

  addBtnClicked() {
    this.addBtn = false;
    this.showAddSeriesForm = true;
  }

  publishSeries(): void {
    const data = {
      name: this.name,
      image_url: this.avatarFile
    }
    this.isLoadingTwo = true;
    console.log(data);
    this.api.addSeries(data).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.status === 201) {
          this.isLoadingTwo = false;
          this.addBtn = true;
          this.showAddSeriesForm = false;
          this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'Series added successfully!' });
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
    this.showAddSeriesForm = false;
    this.name = '';
    this.avatarUrl = ''
  }

}
