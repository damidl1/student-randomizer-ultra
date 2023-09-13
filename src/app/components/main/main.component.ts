import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  mockData: Student[] = [
    {
      name: 'damiano',
      surname: 'di lionardo',
      age: 30,
      imageUrl: 'https://www.newscinema.it/wp-content/uploads/2023/05/pascal-min.jpeg'
    },
    {
      name: 'manuela',
      surname: 'ariotti',
      age: 35,
      imageUrl: 'https://img.freepik.com/premium-photo/cute-humorous-baby-panda-hanging-from-bamboo_410516-25873.jpg?w=2000'
    },
    {
      name: 'cesare',
      surname: 'falzone',
      age: 20,
      imageUrl: 'https://d37va2rovhwkkr.cloudfront.net/preview_images/news/186_0.jpg'
    },
    {
      name: 'luca',
      surname: 'verduci',
      age: 24,
      imageUrl: 'https://img.italiaonline.it/0WO5p000002hjCTGAY_GE.D.A.%20distributori%20automatici%20caff%C3%A8%20e%20bevande-1.png'
    },
    {
      name: 'stefano',
      surname: 'florio',
      age: 25,
      imageUrl: 'https://i.ytimg.com/vi/gOrwlsVA4OM/maxresdefault.jpg'
    },
    {
      name: 'bryan',
      surname: 'rojas',
      age: 29,
      imageUrl: 'https://www.peruetico.com/wp-content/uploads/2019/02/alpaca1.jpg'
    },
    {
      name: 'francesca',
      surname: 'ercolani',
      age: 34,
      imageUrl: 'https://media.licdn.com/dms/image/C4D03AQF-PN32Zg71QQ/profile-displayphoto-shrink_800_800/0/1541606432015?e=2147483647&v=beta&t=uQ6q_BQB-rLNomhhXDeBq81lqVG9BHAfsvD2-gh5_RI'
    },
    {
      name: 'ares',
      surname: 'fiumicelli',
      age: 30,
      imageUrl: 'https://i.etsystatic.com/9867211/r/il/61a3ed/2538715431/il_fullxfull.2538715431_7u5e.jpg'
    },
    {
      name: 'stefania',
      surname: 'ghergut',
      age: 27,
      imageUrl: 'https://www.aquariumofpacific.org/images/made_new/images-uploads-21_Southern_Sea_Otter_-_Robin_Riggs_600_q85.jpg'
    },
    {
      name: 'isabella',
      surname: 'ottonello',
      age: 27,
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-607407850-1548682589.jpg'
    },

  ];
studentData: any;

randomize(){

  const tempArray = [];
  const originalLength = this.mockData.length;
  for (let i = 0; i < originalLength; i++) {

      const randomIndex = Math.floor(Math.random()*this.mockData.length);
      const student = this.mockData[randomIndex];
      tempArray.push(student);
      this.mockData.splice(randomIndex,1);

  }
  this.mockData = tempArray;

}
}
