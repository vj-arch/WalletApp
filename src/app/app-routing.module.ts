import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddamountComponent } from "./wallet/addamount/addamount.component";
import { AlltransactionComponent } from "./wallet/alltransaction/alltransaction.component";
import { DashboardComponent } from "./wallet/dashboard/dashboard.component";
import { TransferamountComponent } from "./wallet/transferamount/transferamount.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";
import { AuthserviceService } from "./authservice.service";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "add", component: AddamountComponent, canActivate: [AuthGuard] },
  {
    path: "alltransaction",
    component: AlltransactionComponent,
    canActivate: [AuthGuard]
  },
  { path: "", component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: "transfer",
    component: TransferamountComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
