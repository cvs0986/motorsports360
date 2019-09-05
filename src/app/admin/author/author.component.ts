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
  isSpinning = false;
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
        title: 'S.No.',
        sortDirection: 'desc',
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
      position: 'right',
      custom: [
        { name: 'scrapAuthor', title: `<img data-toggle="tooltip" data-placement="top" title="Scrap" src="../../../assets/scraping.png" class="mr-2 mb-2" width="20"/>` },
      ]
    },
    pager: {
      display: true,
      perPage: 15
    },
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
      this.avatarFile = info.file!.originFileObj!;

      this.avatarFileName = info.file!.name;
      console.log(this.avatarFile);
    });
  }


  constructor(private messageService: MessageService, private api: ApiServiceService, private msg: NzMessageService, private modalService: NzModalService) {
    this.isSpinning = true;
    this.api.listAuthor().subscribe(
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
    let formData = new FormData();
    formData.append('image_url', this.avatarFile);
    formData.append('name', this.name);
    formData.append('id', this.authorID);

    this.api.updateAuthor(this.authorID, formData).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.status === 200) {
          this.api.listAuthor().subscribe(
            (resp) => {
              if (resp.status === 200) {
                console.log(resp);
                this.data = resp.body.results;
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
                this.addNewsCancel();
                this.handleCancel();
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
    )
  }

  handleCancel(): void {
    this.isVisible = false;
    this.addNewsCancel();
  }

  showScrappingConfirm(event): void {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'Do you really want to scrap this author?',
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOkLoading: false,
      nzOnOk: () => {
        console.log(event.data);
        const formData = new FormData();
        formData.append('author_id', event.data.id);
        this.api.scrapAuthor(formData).subscribe(
          (resp) => {
            console.log(formData, resp);
            if (resp.status === 200) {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Scrap Successfull' });
            } else {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' });
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  customAction(event) {
    console.log(event);
    if (event.action === 'scrapAuthor') {
      this.showScrappingConfirm(event);
    }
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

  publishAuthor(): void {
    let formData = new FormData();
    formData.append('image_url', this.avatarFile);
    formData.append('name', this.name);

    this.isLoadingTwo = true;
    this.api.addAuthor(formData).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.status === 201) {
          this.api.listAuthor().subscribe(
            (resp) => {
              if (resp.status === 200) {
                console.log(resp);
                this.data = resp.body.results;
                this.isLoadingTwo = false;
                this.addBtn = true;
                this.showAddSeriesForm = false;
                this.messageService.add({ severity: 'success', summary: 'Congratulations', detail: 'Series added successfully!' });
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
    this.showAddSeriesForm = false;
    this.name = '';
    this.avatarUrl = '';
    this.avatarFileName = '';
  }

}
