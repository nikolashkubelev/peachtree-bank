import { TransactionsListEffects } from './store/transactions-list/transactions-list.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { TransferPreviewComponent } from './components/transfer-preview/transfer-preview.component';
import { HeaderComponent } from './components/header/header.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { TransactionsContainerComponent } from './components/transactions-container/transactions-container.component';
import { TransferPaneComponent } from './components/transfer-pane/transfer-pane.component';
import { reducer as transactionsListReducer } from './store/transactions-list/transactions-list.reducer';
import { reducer as accountInfoReducer } from './store/account-info/acount-info.reducer';
import { TransactionsListToolbarComponent } from './components/transactions-list-toolbar/transactions-list-toolbar.component';
import { SortingBarComponent } from './components/sorting-bar/sorting-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PaneComponent } from './components/pane/pane.component';
import { AppState } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    TransferPreviewComponent,
    HeaderComponent,
    TransactionsListComponent,
    TransactionItemComponent,
    TransactionsContainerComponent,
    TransferPaneComponent,
    TransactionsListToolbarComponent,
    SortingBarComponent,
    SearchBarComponent,
    PaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot<AppState>({
      accountInfo: accountInfoReducer,
      transactionsList: transactionsListReducer
    }),
    EffectsModule.forRoot([TransactionsListEffects])
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'en' }, { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
