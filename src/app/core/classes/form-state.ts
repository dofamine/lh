import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

export class FormState {
  private _form: FormGroup | undefined;
  protected initialFormState$: BehaviorSubject<string> | undefined;
  protected currentFormState$: Observable<string> | undefined;
  public hasUnsavedChanges$: Observable<boolean> | undefined;

  set form(form: unknown) {
    if (!(form instanceof FormGroup)) throw Error('form should be FormGroup instance');
    this._form = form;
    this.initFormState();
  }

  get form(): FormGroup | undefined {
    return this._form;
  }

  patchFormValue(
    value: { [key: string]: any },
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
    },
  ): void {
    this.form?.patchValue(value, options);
    this.setInitialFormState();
  }

  setInitialFormState(): void {
    const value = JSON.stringify(this.form?.getRawValue());
    this.initialFormState$?.next(value);
  }

  private initFormState(): void {
    this._form = this._form as FormGroup;
    const initialFormValue: string = JSON.stringify(this._form.getRawValue());
    this.currentFormState$ = this.getFormChanges(this._form, initialFormValue);
    this.initialFormState$ = new BehaviorSubject<string>(initialFormValue);
    this.hasUnsavedChanges$ = this.getUnsavedChanges(this.currentFormState$, this.initialFormState$);
  }

  private getFormChanges(form: FormGroup, initialFormValue: string): Observable<string> {
    return form.valueChanges.pipe(
      map((value) => JSON.stringify(value)),
      startWith(initialFormValue),
    );
  }

  private getUnsavedChanges(currentState: Observable<string>, initialState: Observable<string>): Observable<boolean> {
    return combineLatest([currentState, initialState]).pipe(
      map(([current, initial]) => Boolean(this._form?.dirty) && current !== initial),
    );
  }
}
