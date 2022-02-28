import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-two-columns',
  templateUrl: './two-columns.component.html',
  styleUrls: ['./two-columns.component.css']
})
export class TwoColumnsComponent implements OnInit {

  @Input() title: string = ''
  @ContentChild('leftTemplate', { read: TemplateRef }) leftTemplate!: TemplateRef<any>;
  @ContentChild('rightTemplate', { read: TemplateRef }) rightTemplate!: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
