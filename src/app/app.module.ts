import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CompteComponent } from './compte/compte.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { VerificationmailComponent } from './verificationmail/verificationmail.component';
import { VerificationnumeroComponent } from './verificationnumero/verificationnumero.component';
import { ContactComponent } from './contact/contact.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { FootercontactComponent } from './footercontact/footercontact.component';
import { ListecontactComponent } from './listecontact/listecontact.component';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages/messages.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthentificationComponent,
    CompteComponent,
    InscriptionComponent,
    HomeComponent,
    VerificationmailComponent,
    VerificationnumeroComponent,
    ContactComponent,
    DiscussionComponent,
    DiscussionsComponent,
    FootercontactComponent,
    ListecontactComponent,
    MessageComponent,
    MessagesComponent,
    NewcontactComponent,
    StatistiquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
