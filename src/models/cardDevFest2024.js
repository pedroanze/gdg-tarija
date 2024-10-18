export class CardDevFest2024 {
  title;
  packageElements;
  price;
  cardImage;
  cardColor;
  constructor(
    {
      title = '',
      packageElements = [],
      price = 0,
      cardImage = undefined,
      cardColor = 'blue',
    }
  ) {
    this.title = title;
    this.packageElements = packageElements;
    this.price = price;
    this.cardImage = cardImage;
    this.cardColor = cardColor;
  }

}