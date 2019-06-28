import {Component, Input, OnInit} from '@angular/core';
import {CompositeContingency} from '../../../data-model/logic-model/CompositeContingency';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';


interface ContingencyNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-contingency-tree',
  templateUrl: 'contingency-tree.component.html',
  styleUrls: ['contingency-tree.component.css'],
})
export class ContingencyTreeComponent implements OnInit {

  @Input()
  set contingencies(contingencies: CompositeContingency[]) {
    this.dataSource.data = contingencies;
    this.treeControl.expandAll();
  }

  constructor() {
  }


  private transformer = (node: CompositeContingency, level: number) => {
    return {
      expandable: !!node.contingencies && node.contingencies.length > 0,
      name: node.id,
      level: level,
      contingencies: node.contingencies,
    };
  };

  treeControl = new FlatTreeControl<ContingencyNode>(
    node => node.level, node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable,
    node => {
      if (node.contingencies) {
        return node.contingencies.sort(function (a, b) {
            return ('' + a.id).localeCompare(b.id);
          }
        );
      }
      return undefined;
    }
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ContingencyNode) => node.expandable;

  ngOnInit(): void {
  }

}
