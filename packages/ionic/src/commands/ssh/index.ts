import chalk from 'chalk';

import { CommandMap, Namespace } from '@ionic/cli-utils/lib/namespace';

export class SSHNamespace extends Namespace {
  async getMetadata() {
    return {
      name: 'ssh',
      description: 'Commands for configuring SSH keys',
      longDescription: `
These commands help automate your SSH configuration for Ionic Pro. As an alternative, SSH configuration can be done entirely manually by visiting your Account Settings: ${chalk.bold('https://dashboard.ionicjs.com/settings/ssh-keys')}

To begin, run ${chalk.green('ionic ssh setup')}, which lets you use existing keys or generate new ones just for Ionic.
      `,
    };
  }

  async getCommands(): Promise<CommandMap> {
    return new CommandMap([
      ['generate', async () => { const { SSHGenerateCommand } = await import('./generate'); return new SSHGenerateCommand(this, this.env); }],
      ['use', async () => { const { SSHUseCommand } = await import('./use'); return new SSHUseCommand(this, this.env); }],
      ['add', async () => { const { SSHAddCommand } = await import('./add'); return new SSHAddCommand(this, this.env); }],
      ['delete', async () => { const { SSHDeleteCommand } = await import('./delete'); return new SSHDeleteCommand(this, this.env); }],
      ['list', async () => { const { SSHListCommand } = await import('./list'); return new SSHListCommand(this, this.env); }],
      ['setup', async () => { const { SSHSetupCommand } = await import('./setup'); return new SSHSetupCommand(this, this.env); }],
      ['ls', 'list'],
      ['remove', 'delete'],
      ['rm', 'delete'],
    ]);
  }
}
