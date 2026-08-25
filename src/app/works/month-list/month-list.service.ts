import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Month } from '../month.model';
import { Work } from '../work.model';

@Injectable()
export class MonthListService {
  private nextId = 4;
  monthSelected = new Subject<Month>();

  private months: Month[] = [
    new Month('Ianuarie', [
      new Work(1, new Date('2026-01-09'), 'BMW 7', 'Ucraina', 'constatare planetara de fata', 150),
      new Work(2, new Date('2026-01-09'), 'BMW 3', 'b17wvw', 'placute fata si spate', 300),
      new Work(
        3,
        new Date('2026-01-09'),
        'bmw x5',
        'bv01pis',
        'ulei cutie viteze automata, uleiul grup fata si spate, ulei cutie transfer verificare',
        1250,
      ),
    ]),
    new Month('Februarie', [
      new Work(
        1,
        new Date('2026-02-02'),
        'BMW5',
        'dj36ttt',
        'tampoane motor stg+dr, baterie, inscris baterie',
        1100,
      ),
      new Work(2, new Date('2026-02-03'), 'BMW5', 'BV77FTP', 'ulei fu fa fp', 250),
      new Work(3, new Date('2026-02-03'), 'BMW 5', 'VN07VLI', 'tester sonda nox dupa scr', 150),
    ]),
    new Month('Martie', [
      new Work(
        1,
        new Date('2026-03-02'),
        'BMW 3',
        'bv95wlf',
        'sablat chiulasa, curățat răcitor egr',
        1600,
      ),
      new Work(
        2,
        new Date('2026-03-02'),
        'bmw 3',
        'bv95syk',
        'fulie alternator , test retur injectoare',
        150,
      ),
      new Work(
        3,
        new Date('2026-03-03'),
        'bmw 1',
        'bv01cwm',
        'amortizoare fata +protectii+flanșe, protecții amortizoare spate, bucsi brat fata spre fața, ulei fu fa fp',
        2300,
      ),
    ]),
    new Month('Aprilie', [
      new Work(1, new Date('2026-04-01'), 'BMW 3', 'if010407', 'constatare +tester', 150),
      new Work(
        2,
        new Date('2026-04-03'),
        'bmw 3',
        'bn209rw',
        'distribuție ulei fu fa, protecție amortizoare fata, bielete antiruliu,rola întinzătoare',
        2250,
      ),
      new Work(
        3,
        new Date('2026-04-06'),
        'bmw 3',
        'bv30vmv',
        'bielete antiruliu , brat fata Dr spre spate',
        100,
      ),
    ]),
    new Month('Mai', [
      new Work(
        1,
        new Date('2026-05-04'),
        'BMW 5',
        'bv89nke',
        'd/r turbo, garnituri corp filtru ulei,d/r galerie admisie, d/r placa axe came+garnituri',
        3150,
      ),
      new Work(
        2,
        new Date('2026-05-05'),
        'bmw 3',
        'bv080846',
        'axă vvt+motoras vvt, ulei cutie transfer',
        1000,
      ),
      new Work(
        3,
        new Date('2026-05-05'),
        'bmw 1',
        'bv15usk',
        'fulie arbore, simering arbore, lichid de frana',
        500,
      ),
    ]),
    new Month('Iunie', [
      new Work(1, new Date('2026-06-02'), 'BMW X4', 'belgia', 'constatare +tester', 100),
      new Work(
        2,
        new Date('2026-06-02'),
        'mini cooper',
        'Bv95kir',
        'constatare, tester,reinitailizare vvt',
        250,
      ),
      new Work(
        3,
        new Date('2026-06-02'),
        'BMW X6',
        'bv95yna',
        'catalizator, verificare vacuum',
        1350,
      ),
    ]),
    new Month('Iulie', []),
    new Month('August', []),
    new Month('Septembrie', []),
    new Month('Octombrie', []),
    new Month('Noiembrie', []),
    new Month('Decembrie', []),
  ];

  getMonths() {
    return this.months.slice();
  }

  getMonth(index: number) {
    return this.months[index];
  }

  generateWorkId(): number {
    return this.nextId++;
  }
}
