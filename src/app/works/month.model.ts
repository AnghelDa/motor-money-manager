import { Work } from './work.model';

export class Month {
  public title: string;
  public works: Work[];

  constructor(title: string, works: Work[]) {
    this.title = title;
    this.works = works;
  }

  get totalIncome(): number {
    return this.works.reduce((sum, work) => sum + work.price, 0);
  }

  get salary(): number {
    return this.totalIncome * 0.3;
  }
}
