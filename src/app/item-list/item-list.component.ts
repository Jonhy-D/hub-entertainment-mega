import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items = [{
      id: 1,
      title: 'Thor - Love and thunder',
      description: 'The film follows Thor (Chris Hemsworth) on a journey unlike anything he has faced before: a search for inner peace.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOyZD9CL1eGq1pKq4tPcXp6KX-iw5J2krnA&s',
      duration: '160 min',
      genre: 'Action',
      type: ''
    },
    {
      id: 2,
      title: 'Kingdom of the Planet of the Apes',
      description: 'In 2029, an Air Force astronaut crash-lands on a mysterious planet where evolved, talking apes dominate a race of primitive humans.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wqa3LtQG2hYDOLlJ20Jgy0yoiKPkvcw_qQ&s',
      duration: '152 min',
      genre: 'Sci-Fi',
      type: ''
    },
    {
      id: 3,
      title: 'Step up 3',
      description: 'The story begins in traditional video style, as several of the films characters are recorded and asked a series of questions about why they dance.',
      image: 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/94/71/61/20350648.jpg',
      duration: '111 min',
      genre: 'Romance',
      type: ''
    },
    {
      id: 4,
      title: 'The Incredible Hulk',
      description: 'The Incredible Hulk (titled The Incredible Hulk or The Mass: An Incredible Man in Spain and Hulk: The Incredible Man in Latin America) is a 2008 American superhero film based on the character Hulk.',
      image: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/66/73/18/20350674.jpg',
      duration: '112 min',
      genre: 'Sci-Fi',
      type: ''
    },
    {
      id: 5,
      title: 'One Piece - Stampede',
      description: 'The Straw Hat Pirates arrive at Delta Island, the island where the Pirate Festival will take place, an event made by and for pirates.',
      image: 'https://es.web.img3.acsta.net/c_310_420/pictures/19/10/28/17/02/4637907.jpg',
      duration: '101 min',
      genre: 'Anime',
      type: ''
    },
    {
      id: 6,
      title: '¡Goool! La película',
      description: 'Santiago is a young man who has a dream of becoming a professional soccer player. One day he is presented with the opportunity of a lifetime.',
      image: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/75/99/20065447.jpg',
      duration: '121 min',
      genre: 'Drama',
      type: ''
    },
    {
      id: 7,
      title: 'Inception',
      description: 'His job consists of entering the dreams of his victims and extracting secrets from the business world and then selling them with great dividends.',
      image: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/72/41/74/20198901.jpg',
      duration: '148 min',
      genre: 'Drama',
      type: ''
    },
    {
      id: 8,
      title: 'One Piece Film - Red',
      description: 'The story takes place on an island where Uta, the worlds favorite diva, performs for the first time in public.',
      image: 'https://es.web.img2.acsta.net/c_310_420/pictures/22/08/11/16/01/1320092.jpg',
      duration: '115 min',
      genre: 'Anime',
      type: ''
    },
    {
      id: 9,
      title: 'Avengers - Infinity War',
      description: 'Thanos, the infamous intergalactic tyrant, aims to gather the six Infinity Stones, artifacts of unimaginable power, and use them to impose his evil will on all of existence.',
      image: 'https://es.web.img3.acsta.net/c_310_420/pictures/18/03/16/15/33/3988420.jpg',
      duration: '149 min',
      genre: 'Action',
      type: ''
    },
    {
      id: 10,
      title: 'Avengers - Endgame',
      description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the actions of Thanos, the Mad Titan.',
      image: 'https://es.web.img3.acsta.net/c_310_420/pictures/19/03/26/17/22/0896830.jpg',
      duration: '152 min',
      genre: 'Fiction',
      type: ''
    }
  ]
}
