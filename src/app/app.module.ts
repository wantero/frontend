import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from 'ng2-imageupload';
import { Ng2ImgMaxModule } from 'ng2-img-max';

// modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// used to create fake backend
import { fakeBackendProvider } from './core/helpers';

import { FireworksComponent } from './components/fireworks/fireworks.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContributeProjectComponent } from './components/contribute-project/contribute-project.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent as BookFormComponent } from './components/book/form/form.component';
import { DetailsComponent as BookDetailComponent } from './components/book/details/details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { AccountComponent } from './components/account/account.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RequestedsComponent } from './components/book/requesteds/requesteds.component';
import { DonationsComponent } from './components/book/donations/donations.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

import { AuthGuardUser } from './core/guards/auth.guard.user';
import { AuthGuardAdmin } from './core/guards/auth.guard.admin';

import { JwtInterceptor, ErrorInterceptor } from './core/helpers';
import { BookService } from './core/services/book/book.service';
import { CategoryService } from './core/services/category/category.service';
import { AuthenticationService } from './core/services/authentication/authentication.service';
import { UserService } from './core/services/user/user.service';
import { GoogleAnalyticsService } from './core/services/analytics/google-analytics.service';
import { AddressService } from './core/services/address/address.service';
import { ContactUsService } from './core/services/contact-us/contact-us.service';

import { AppConfigModule } from './app-config.module';
import { ListComponent } from './components/book/list/list.component';
import { DonateComponent } from './components/book/donate/donate.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { NgxMaskModule } from 'ngx-mask';
import { RequestComponent } from './components/book/request/request.component';
import { TrackingComponent } from './components/book/tracking/tracking.component';
import { FacilitatorNotesComponent } from './components/book/facilitator-notes/facilitator-notes.component';
import { MainUsersComponent } from './components/book/main-users/main-users.component';
import { ConfirmationDialogComponent } from './core/directives/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './core/services/confirmation-dialog/confirmation-dialog.service';

import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './core/router/custom-reuse-strategy';
import { InputSearchModule } from './components/input-search/input-search.module';
import { DonatePageComponent } from './components/book/donate-page/donate-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FireworksComponent,
    BookFormComponent,
    BookDetailComponent,
    HomeComponent,
    AboutComponent,
    ContributeProjectComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ListComponent,
    PanelComponent,
    AccountComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DonateComponent,
    ContactUsComponent,
    RequestComponent,
    RequestedsComponent,
    ContactUsComponent,
    DonationsComponent,
    DonatePageComponent,
    ConfirmationDialogComponent,
    TrackingComponent,
    FacilitatorNotesComponent,
    MainUsersComponent,
    PrivacyPolicyComponent
  ],
  exports: [
    FireworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppConfigModule,
    Ng2SmartTableModule,
    NgbModule.forRoot(),
    NgbModalModule,
    ImageUploadModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    Ng2ImgMaxModule,
    NgxMaskModule.forRoot(),
    InputSearchModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthGuardUser,
    BookService,
    CategoryService,
    AuthenticationService,
    ContactUsService,
    GoogleAnalyticsService,
    AddressService,
    UserService,
    ConfirmationDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: '6LcxaXAUAAAAAGM8zgwQvgMuykwiBPgMr0P7sNL3' } as RecaptchaSettings
    },
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    AuthGuardAdmin
    // provider used to create fake backend
    // fakeBackendProvider
  ],
  entryComponents: [
    DonateComponent,
    RequestComponent,
    ConfirmationDialogComponent,
    TrackingComponent,
    FacilitatorNotesComponent,
    MainUsersComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected _googleAnalyticsService: GoogleAnalyticsService) {} // <-- We inject the service here to keep it alive whole time
}
