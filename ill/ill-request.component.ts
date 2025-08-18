import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IllRequestData {
  title: string;
  author: string;
  count: number;
}


@Component({
  selector: 'ill-request',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div>
        <p>Title: {{ item.title }}</p>
        <p>Author: {{ item.author }}</p>
      </div>
    </div>
  `
})
export class IllRequestComponent {
  @Input() item!: IllRequestData;
}
