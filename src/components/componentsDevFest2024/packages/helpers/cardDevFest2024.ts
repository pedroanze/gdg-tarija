export class CardDevFest2024 {
  title: string;
  packageElements: string[];
  price: number;
  cardImage?: ImageMetadata;
  cardColor: 'blue' | 'green';
  link: string;
  constructor(
    {
      title = '',
      packageElements = [],
      price = 0,
      cardImage = undefined,
      cardColor = 'blue',
      link= '',
    }: CardDevFest2024
  ) {
    this.title = title;
    this.packageElements = packageElements;
    this.price = price;
    this.cardImage = cardImage;
    this.cardColor = cardColor;
    this.link = link;
  }
}
