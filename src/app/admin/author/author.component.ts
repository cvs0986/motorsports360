import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { MessageService } from 'primeng/components/common/api';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { NzMessageService, NzModalService, UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  data: any[];
  isVisible = false;

  loading = false;
  avatarUrl: string;
  avatarFile;
  avatarFileName;

  name;
  url;
  image_url;
  authorID;

  showAddSeriesForm = false;
  isLoadingTwo = false;
  addBtn = true;

  dataMsg: string = 'Please Wait while data is loading ...';
  settings = {
    columns: {
      id: {
        title: 'S.No.'
      },
      image_url: {
        title: 'Image',
        type: 'html',
        valuePrepareFunction: (value) => { return `<img src="${value}" width="80" style="border-radius: 5px;" />` },
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
    noDataMessage: this.dataMsg,
    hideSubHeader: true,
    mode: 'external'
  };

  // beforeUpload = (file: File) => {
  //   return new Observable((observer: Observer<boolean>) => {
  //     const isJPG = file.type === 'image/jpeg';
  //     if (!isJPG) {
  //       this.msg.error('You can only upload JPG file!');
  //       observer.complete();
  //       return;
  //     }
  //   });
  // };

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
    this.api.listAuthor().subscribe(
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
        this.api.deleteAuthor(event.data.id).subscribe(
          (resp) => {
            console.log(resp);
            if (resp.status === 204) {
              this.api.listAuthor().subscribe(
                (resp) => {
                  if (resp.status === 200) {
                    console.log(resp);
                    this.data = resp.body.results;
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' });
                  }
                },
                (error) => {
                  console.log(error);
                }
              );
              console.log(resp);
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


  authorDelete(event) {
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
    this.api.updateAuthor(this.authorID, data).subscribe(
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

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  publishAuthor(): void {
    const data = {
      name: this.name,
      image_url: this.dataURLtoFile(this.avatarUrl, this.avatarFileName)
    }
    this.isLoadingTwo = true;
    console.log(data);
    this.api.addAuthor(data).subscribe(
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
    this.avatarUrl = '';
    this.avatarFileName = '';
  }

}
