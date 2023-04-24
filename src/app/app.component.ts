import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';

  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this tree today'

    },
    {
      title: 'Snowy Mountatin',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Lorem pellentesque vel, ullamcorper sit amet nulla.'

    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'bikini122222',
      content: 'Pellentesque sit amet lorem quis quam bibendum vulputate. Ut rutrum risus nunc'

    }
  ];
}
