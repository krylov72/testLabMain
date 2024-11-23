import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface InfoDB {
  title: string;
  content: string;
}

@Component({
  selector: 'app-info-page',
  imports: [CommonModule],
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.scss',
})
export class InfoPageComponent {
  data: InfoDB[] = [
    {
      title: `Опрошенных пользовались микрокредитами`,
      content: `Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах`,
    },
    {
      title: `Опрошенных пользовались микрокредитами`,
      content: `Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах`,
    },
  ];

  reversedData() {
    return this.data.slice().reverse(); // Возвращаем реверсированный массив
  }
}