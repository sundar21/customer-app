import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { UserModule } from "../../user/user-list/user.module";
import { MatButtonModule } from "@angular/material/button";
import { DashboardModule } from "../../dashboard/dashboard/dashboard.module";

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        UserModule,
        MatButtonModule,
        DashboardModule
    ],
    exports: [],
    declarations: [LayoutComponent],
    providers: [],
})
export class LayoutModule {

}
