import { Component } from '@angular/core';

interface ILink {
  link: string,
  caption: string,
  info: string,
  CSSClass: string
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  simpleItems: string[] = [
    'Pepper',
    'Salt',
    'Paprika'
  ];

  simpleLinks: string[] = [
    'https://angular.io/',
    'https://material.angular.io/',
    'https://reactjs.org/'
  ]

  complexLinks: ILink[] = [
    {
      link: 'https://angular.io/',
      caption: 'Angular',
      info: 'One framework. Mobile & desktop.',
      CSSClass: 'icon-angular',
    },
    {
      link: 'https://facebook.com/',
      caption: 'Facebook',
      info: 'Facebook helps you connect and share with the people in your life.',
      CSSClass: 'icon-facebook',
    },
    {
      link: 'https://google.com/',
      caption: 'Google',
      info: "Google search - I'm feeling lucky.",
      CSSClass: 'icon-google',
    },
    {
      link: 'https://microsoft.com/',
      caption: 'Microsoft',
      info: "Be what's next.",
      CSSClass: 'icon-microsoft',
    },
  ]

  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  
}
