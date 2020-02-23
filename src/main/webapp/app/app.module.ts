import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { LiftoffSharedModule } from 'app/shared/shared.module';
import { LiftoffCoreModule } from 'app/core/core.module';
import { LiftoffAppRoutingModule } from './app-routing.module';
import { LiftoffHomeModule } from './home/home.module';
import { LiftoffEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    LiftoffSharedModule,
    LiftoffCoreModule,
    LiftoffHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    LiftoffEntityModule,
    LiftoffAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class LiftoffAppModule {}
