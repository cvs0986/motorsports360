import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
        title: 'Headline'
      },
      author: {
        title: 'Author/Series',
        editable: false,
        filter: {
          type: 'list',
          config: {
            list: [
              { value: 'Commodo Sit', title: 'Commodo Sit' },
              { value: 'Tortor', title: 'Tortor' },
            ]
          }
        }
      },
      news_url: {
        title: 'News Url',
        editable: false
      },
      description: {
        title: 'Description',
        editor: {
          type: 'textarea'
        }
      }
    },
    add: {
      addButtonContent: 'Add'
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
    }
  };

  data = [
    { id: 1, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 4, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 5, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 6, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 7, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 8, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 9, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 10, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 11, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 12, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 13, image_url: 'https://i.ibb.co/KKM7RVt/beautiful-cellphone-cute-761963.jpg', headline: 'Etiam Ornare Dapibus', author: 'Commodo Sit/Tortor', news_url: 'Dolor Ullamcorper Tristique Sem Pharetra', description: 'Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onSaveConfirm(event): void {
    // if (event.newData.headline === event.data.headline) {
    //   return event.confirm.reject(this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No changes in data.' }))
    // }
    console.log(event);
    event.confirm.resolve(this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' }));
  }

  onDeleteConfirm(event): void {
    event.confirm.resolve(this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' }));
  }

  onCreateConfirm(event) {
    console.log(event.newData);
  }

  onEditRow(event) {
    console.log('Editing');
  }

}
