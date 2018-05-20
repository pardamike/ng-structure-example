import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AgentManagerComponent } from './views/agent-manager/agent-manager.component';
import { UserAgentComponent } from './views/user-agent/user-agent.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { CommissionGraphComponent } from './components/commission-graph/commission-graph.component';
import { MaterialImportModule } from './../../shared/modules/material-import/material-import.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialImportModule,
    SharedComponentsModule
  ],
  declarations: [
    UserAgentComponent,
    AgentManagerComponent,
    CommissionGraphComponent,
    MembersListComponent
  ]
})
export class DashboardModule { }
