import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HeaderComponent } from "./header/header.component";
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import {
  ErrorStateMatcher,
  MatNativeDateModule,
  MatOptionModule,
  MAT_DATE_FORMATS,
  ShowOnDirtyErrorStateMatcher,
} from "@angular/material/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
//import { UserListModule } from './user-list/user-list.module';
import { MatDialogModule } from "@angular/material/dialog";

import { MatSortModule } from "@angular/material/sort";
import { UserListComponent } from "./Users/user-list/user-list.component";
import { UserModule } from "./user/user.module";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatBadgeModule } from "@angular/material/badge";
import { MatChipsModule } from "@angular/material/chips";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DisplayFormComponent } from "./display-form/display-form.component";
import { FormArrayComponent } from "./form-array/form-array.component";
import { ToastrModule } from "ngx-toastr";
import { ArthOptComponent } from "./arth-opt/arth-opt.component";
import { DisTableComponent } from "./dis-table/dis-table.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserDisComponent } from "./user-dis/user-dis.component";
import { CmpOneComponent } from "./cmp-one/cmp-one.component";
import { CmpTwoComponent } from "./cmp-two/cmp-two.component";
import { DecimalNumDirective } from "./decimal-num.directive";
import { NumericDirective } from "./numeric.directive";
import { PercentDirective } from "./percentage.directive";
import { UnitTestComponent } from "./unit-test/unit-test.component";
import { CmpThreeComponent } from "./cmp-three/cmp-three.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { CurdOptComponent } from "./curd-opt/curd-opt.component";
import { SearchComponent } from "./search/search.component";
import { SearchPipe } from "./search.pipe";
import { FilterPipe } from "./filter.pipe";
import { CountryCardComponent } from "./Component/country-card/country-card.component";
import { NavBarComponent } from "./Component/nav-bar/nav-bar.component";
import { DetailComponent } from "./Pages/detail/detail.component";
import { HomeComponent } from "./Pages/home/home.component";
import { TestComponent } from "./test/test.component";
import { RegReactiveFormComponent } from "./reg-reactive-form/reg-reactive-form.component";
import { RegTdfFormComponent } from "./reg-tdf-form/reg-tdf-form.component";
import { RegExpTestComponent } from "./reg-exp-test/reg-exp-test.component";
import { TestFormComponent } from "./test-form/test-form.component";
import { ValMsgComponent } from "./val-msg/val-msg.component";
import { AboutComponent } from "./Guard/about/about.component";
import { ContactComponent } from "./Guard/contact/contact.component";
import { UserComponent } from "./Guard/user/user.component";
import { UserInfoComponent } from "./Guard/user-info/user-info.component";
import { UserGuard } from "./Guard/guard/user.guard";
import { RouterModule } from "@angular/router";
import { DeactivateGuard } from "./Guard/guard/deactivate.guard";
import { CanLoadGuard } from "./Guard/guard/can-load.guard";
import { AddComponent } from "./Guard/add/add.component";
import { LifecycleComponent } from "./Guard/lifecycle/lifecycle.component";
import { Lifecycle2Component } from "./Guard/lifecycle2/lifecycle2.component";
import { PanValidationComponent } from "./pan-validation/pan-validation.component";
import { PresentAddressComponent } from "./present-address/present-address.component";
import { PermentAddressComponent } from "./perment-address/perment-address.component";
import { PreAddComponent } from "./pre-add/pre-add.component";
import { PerAddComponent } from "./per-add/per-add.component";
import { DocumentComponent } from "./document/document.component";
import { DocsComponent } from "./docs/docs.component";
import { ModelPopupComponent } from "./model-popup/model-popup.component";
import { OccasionComponent } from './occasion/occasion.component';
import { OccasionDisplayComponent } from './occasion-display/occasion-display.component';
import { OccasionConterComponent } from './occasion-conter/occasion-conter.component';
import { PlanningBirtdayPageComponent } from './planning-birtday-page/planning-birtday-page.component';
import { DocsDataComponent } from './docs-data/docs-data.component';
import { DateformatPipe } from './dateformat.pipe';
import { CountdownDirective } from './countdown.directive';
import { FileupComponent } from './fileup/fileup.component';
import { TestModelComponent } from './test-model/test-model.component';
import { MealApiComponent } from './meal-api/meal-api.component';
import { RandomApiComponent } from './Meal-Apis/random-api/random-api.component';
import { ServiceComponent } from './service/service.component';
import { DetailsComponent } from './details/details.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SearchMealComponent } from './search-meal/search-meal.component';
import { CategoryComponent } from './category/category.component';
import { CateDisComponent } from './cate-dis/cate-dis.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    UserListComponent,
    ReactiveFormComponent,
    DisplayFormComponent,
    FormArrayComponent,
    ArthOptComponent,
    DisTableComponent,
    UserCreateComponent,
    UserDisComponent,
    CmpOneComponent,
    CmpTwoComponent,
    DecimalNumDirective,
    NumericDirective,
    PercentDirective,
    UnitTestComponent,
    CmpThreeComponent,
    DropdownComponent,
    CurdOptComponent,
    SearchComponent,
    SearchPipe,
    FilterPipe,
    CountryCardComponent,
    NavBarComponent,
    DetailComponent,
    HomeComponent,
    TestComponent,
    RegReactiveFormComponent,
    RegTdfFormComponent,
    RegExpTestComponent,
    TestFormComponent,
    ValMsgComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    UserInfoComponent,
    AddComponent,
    LifecycleComponent,
    Lifecycle2Component,
    PanValidationComponent,
    PresentAddressComponent,
    PermentAddressComponent,
    PreAddComponent,
    PerAddComponent,
    DocumentComponent,
    DocsComponent,
    ModelPopupComponent,
    OccasionComponent,
    OccasionDisplayComponent,
    OccasionConterComponent,
    PlanningBirtdayPageComponent,
    DocsDataComponent,
    DateformatPipe,
    CountdownDirective,
    FileupComponent,
    TestModelComponent,
    MealApiComponent,
    RandomApiComponent,
    ServiceComponent,
    DetailsComponent,
    FavouritesComponent,
    SearchMealComponent,
    CategoryComponent,
    CateDisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    //UserListModule,
    MatSortModule,
    UserModule,
    MatCardModule,
    MatNativeDateModule,
    MatOptionModule,
    MatRadioModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatChipsModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatToolbarModule,
    MatTooltipModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: "toast-bottom-left",
      preventDuplicates: true,
      closeButton: true,
    }),
  ],
  exports: [PercentDirective],

  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    MatDatepickerModule,
    UserGuard,
    DeactivateGuard,
    CanLoadGuard,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
