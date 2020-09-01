import { Component, OnInit, forwardRef, Input, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'peachtree-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBarComponent),
      multi: true,
    },
  ],
})
export class SearchBarComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder = 'Search by typing';
  @ViewChild('searchInput') searchInput: ElementRef;

  public value = '';

  onChange = (query: string) => {};
  onTouched = () => {};

  constructor() {}

  ngOnInit(): void {}

  onInputValueChange(): void {
    this.onChange(this.value);
  }

  clearQuery(): void {
    this.value = '';
    this.onInputValueChange();
    this.searchInputFocus();
  }

  searchInputFocus(): void {
    this.searchInput.nativeElement.focus();
  }

  writeValue(query: string): void {
    this.value = query;
    this.onInputValueChange();
  }

  registerOnChange(fn: (query: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
