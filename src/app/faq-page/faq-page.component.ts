import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Question {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-page',
  imports: [CommonModule, MatIconModule],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss',
})
export class FaqPageComponent {
  questions: Question[] = [
    {
      question:
        'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
      answer:
        'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    },
    {
      question: 'Прототип нового сервиса - это как трубный призыв?',
      answer:
        'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    },
    {
      question: 'Частокол на границе продолжает удивлять?',
      answer:
        'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    },
    {
      question:
        'Очевидцы сообщают, что слышали грохот грома градущих изменений?',
      answer:
        'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    },
    {
      question:
        'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?',
      answer:
        'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    },
    {
      question:
        'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
      answer:
        'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    },
    {
      question: 'Высококачественный прототип будущего проекта обнадёживает?',
      answer:
        'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
    },
  ];

  isAnswerVisible: boolean[] = new Array(this.questions.length).fill(false);

  chooseQuestion(i: number) {
    this.isAnswerVisible[i] = !this.isAnswerVisible[i];
  }
}