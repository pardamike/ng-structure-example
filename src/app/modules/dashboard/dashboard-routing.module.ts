import { AgentManagerComponent } from './views/agent-manager/agent-manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAgentComponent } from './views/user-agent/user-agent.component';

const routes: Routes = [
  {
    path: 'agent-manager',
    component: AgentManagerComponent
  },
  {
    path: 'user-agent',
    component: UserAgentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
