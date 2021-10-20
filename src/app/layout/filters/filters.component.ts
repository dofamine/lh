import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lh-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  periods = [
    { name: 'Yesterday', value: 1 },
    { name: 'Last 30 days', value: 2 },
    { name: 'Last 60 days', value: 3 },
    { name: 'Last 90 days', value: 4 },
  ];
  accounts = [
    { name: 'Account 1', value: 1 },
    { name: 'Account 2', value: 2 },
    { name: 'Account 3', value: 3 },
    { name: 'Account 4', value: 4 },
  ];
  sites = [
    { name: 'Site 1', value: 1 },
    { name: 'Site 2', value: 2 },
    { name: 'Site 3', value: 3 },
    { name: 'Site 4', value: 4 },
  ];

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form.addControl('periods', new FormControl());
    this.form.addControl('accounts', new FormControl());
    this.form.addControl('sites', new FormControl());
  }
}
