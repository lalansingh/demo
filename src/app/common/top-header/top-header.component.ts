import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ISpace, StateData, SpaceData } from './top-header.modle';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopHeaderComponent {

  @ViewChild('topSearchElement')
  topSearchElement: ElementRef;

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  states: State[] = StateData;

  public spaceCtrl = new FormControl();
  public filteredSpace: Observable<ISpace[]>;
  public space: ISpace[] = SpaceData;

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );

    this.filteredSpace = this.spaceCtrl.valueChanges
      .pipe(
        startWith(''),
        map(space => space ? this._filterSpace(space) : this.space.slice())
      );
  }

  public onClickSearch(): void {
    this.topSearchElement.nativeElement.style.borderRadius = '20px 20px 0px 0px';
  }

  public onBlur() {
    this.topSearchElement.nativeElement.style.borderRadius = '20px';
  }



  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterSpace(value: string): ISpace[] {
    const filterValue = value.toLowerCase();
    return this.space.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
