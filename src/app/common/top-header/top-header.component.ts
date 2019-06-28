import { Component, ElementRef, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
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
export class TopHeaderComponent implements OnInit {

  @ViewChild('topSearchElement', { static: false })
  topSearchElement: ElementRef;

  @ViewChild('spaceSearchElement', { static: false })
  spaceSearchElement: ElementRef;

  // Top Search
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  states: State[] = StateData;
  // Space Search
  public spaceCtrl = new FormControl();
  public filteredSpace: Observable<ISpace[]>;
  public space: ISpace[] = SpaceData;

  constructor() {
  }
  private isTopSearchLoaded: boolean = false;
  private isSpaceSearchLoaded: boolean = false;

  ngAfterViewInit() {
    this.topSearchElement.nativeElement.querySelector('.mat-form-field-infix')
      .addEventListener('click', this.onTopSearchClicked.bind(this));
    // .addEventListener('click', this.onTopSearchClicked.bind(this));
    this.spaceSearchElement.nativeElement.querySelector('.mat-form-field-infix')
      .addEventListener('click', this.onSpaceSearchClicked.bind(this));
  }
  ngOnInit() {

    // Top search autocomplete
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => {
          let res = state ? this._filterStates(state) : this.states.slice();
          if (this.isTopSearchLoaded) {
            if (res.length > 0) {
              this.topSearchElement.nativeElement.style.borderRadius = '20px 20px 0px 0px';
            } else {
              this.topSearchElement.nativeElement.style.borderRadius = '20px';
            }
          }
          this.isTopSearchLoaded = true;
          return res;
        })
      );
    // spaceSearch menu autocomplete
    this.filteredSpace = this.spaceCtrl.valueChanges
      .pipe(
        startWith(''),
        map(space => {
          let res = space ? this._filterSpace(space) : this.space.slice();
          if (this.isSpaceSearchLoaded) {
            let element = this.spaceSearchElement.nativeElement.firstChild;
            if (res.length > 0) {
              element.style.borderRadius = '20px 20px 0px 0px';
            } else {
              element.style.borderRadius = '20px';
            }
          }
          this.isSpaceSearchLoaded = true;
          return res;
        })
      );
  }


  // Top Search
  public onTopSearchClicked(): void {
    let stateList;
    this.filteredStates.subscribe(x => {
      stateList = x
    });
    if (stateList.length > 0) {
      this.topSearchElement.nativeElement.style.borderRadius = '20px 20px 0px 0px';
    } else {
      this.topSearchElement.nativeElement.style.borderRadius = '20px';
    }
  }
  public onTopSearchItemSelected(selectedItem: string) {
    this.topSearchElement.nativeElement.style.borderRadius = '20px';
  }

  public onTopSearchBlur() {
    this.topSearchElement.nativeElement.style.borderRadius = '20px';
  }

  // Space Search
  public onSpaceSearchClicked(): void {
    let spaceList;
    this.filteredSpace.subscribe(x => {
      spaceList = x
    });
    let element = this.spaceSearchElement.nativeElement.firstChild;
    if (spaceList.length > 0) {
      element.style.borderRadius = '20px 20px 0px 0px';
    } else {
      element.style.borderRadius = '20px';
    }
  }
  public onSpaceItemSelected(selectedItem: string) {
    let element = this.spaceSearchElement.nativeElement.firstChild;
    element.style.borderRadius = '20px';
  }

  public onSpaceSearchBlur() {
    let element = this.spaceSearchElement.nativeElement.firstChild;
    element.style.borderRadius = '20px';
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
