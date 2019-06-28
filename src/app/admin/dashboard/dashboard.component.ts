import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';

const count = 5;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  loading: boolean = true;
  initLoading = true; // bug
  loadingMore = false;
  data: any[] = [
    { 
      image_url: 'https://dscxx9mer61ho.cloudfront.net/wp-content/uploads/58376170_2106097679438695_7221677939866206208_o.jpg',
      title: 'McLaughlin impresses in karting cameo',
      description: "Supercars champion Scott McLaughlin shone on and off the track at Easter's New Zealand Kart Championships, concluding his return to competitive karting with a runner-up finish.",
      news_date: '12 June 2019',
      news_time: '06:48 PM',
      news_link: 'https://www.supercars.com/news/championship/mclaughlin-impresses-in-karting-cameo/'
    },
    {
      image_url: 'https://dscxx9mer61ho.cloudfront.net/wp-content/uploads/2019VASCR1_ADL500_DKIMG7922.jpg',
      title: 'Klimenko’s relaxed approach to driver deals',
      description: "Penrite Racing owner Betty Klimenko is keen to keep David Reynolds and Anton De Pasquale for 2020, but is in no rush to lock them into new contracts.",
      news_date: '18 June 2019',
      news_time: '04:38 PM',
      news_link: 'https://www.supercars.com/news/championship/klimenkos-relaxed-approach-to-driver-deals/'
    },
    {
      image_url: 'https://dscxx9mer61ho.cloudfront.net/wp-content/uploads/VASC-ADL500-Super2-056.jpg',
      title: 'GRM rookie relishing fierce Super2 fight',
      description: "Dylan O'Keeffe says he was shocked by how fierce the Dunlop Super2 Series competition was during his debut at the Superloop Adelaide 500.",
      news_date: '18 June 2019',
      news_time: '04:22 PM',
      news_link: 'https://www.supercars.com/news/super2/grm-rookie-relishing-fierce-super2-fight/'
    },
    {
      image_url: 'https://dscxx9mer61ho.cloudfront.net/wp-content/uploads/17-McLaughlin-EV03-19-MH1_4940-1800x1200.jpg',
      title: "'Fire in the belly': McLaughlin reacts to Mustang changes",
      description: "Shell V-Power Racing’s Scott McLaughlin says the latest changes to the Ford Mustang will serve as extra motivation in his quest for a second consecutive Supercars title.",
      news_date: '19 June 2019',
      news_time: '08:01 AM',
      news_link: 'https://www.supercars.com/news/championship/fire-in-the-belly-mclaughlin-reacts-to-mustang-changes/'
    },
    {
      image_url: 'https://dscxx9mer61ho.cloudfront.net/wp-content/uploads/VASCR10_DKIMG_16251-1800x1200.jpg',
      title: 'More light for SuperNight in 2019',
      description: "Supercars will incorporate key lessons from last year’s Sydney SuperNight as it prepares to light up Barbagallo Raceway for the first time next week.",
      news_date: '22 June 2019',
      news_time: '11:56 PM',
      news_link: 'https://www.supercars.com/news/championship/more-light-for-supernight-in-2019/'
    }
  ];
  constructor(private messageService: MessageService) {
    
   }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }

}
