import {Component, Input, OnInit} from '@angular/core';
import {ActionComposite} from '../../../data-model/logic-model/ActionComposite';

@Component({
  selector: 'app-action-table',
  templateUrl: './action-table.component.html',
  styleUrls: ['./action-table.component.css']
})
export class ActionTableComponent implements OnInit {

  @Input() compositeAction: ActionComposite;

  constructor() { }

  ngOnInit() {
  }

}
