import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GreetingComponent } from './shared/components/greeting/greeting.component';

import { SkillsModule } from './modules/skills/skills.module';
import { MessageFormModule } from './modules/message-form/message-form.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, GreetingComponent],
    imports: [BrowserModule, MessageFormModule, SkillsModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
