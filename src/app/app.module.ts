import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { WalletComponent } from "./wallet/wallet.component";
import { AddamountComponent } from "./wallet/addamount/addamount.component";
import { TransferamountComponent } from "./wallet/transferamount/transferamount.component";
import { AlltransactionComponent } from "./wallet/alltransaction/alltransaction.component";
import { DashboardComponent } from "./wallet/dashboard/dashboard.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthGuard } from "./auth.guard";
import { AuthserviceService } from "./authservice.service";
import { FormsModule } from "@angular/forms";
import {
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatTableModule
} from "@angular/material";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WalletComponent,
    AddamountComponent,
    TransferamountComponent,
    AlltransactionComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [AuthserviceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
