import { Command, CommandRunner } from 'nest-commander';
// import { LogService } from '../../../core/services/log.service';
import { LmsIntegrationsService } from '../lms-integrations.service';

@Command({ name: 'test:lms', description: 'A command for testing mail' })
export class TestLmsCommand extends CommandRunner {
  constructor(
    // private readonly logService: LogService,
    private readonly lmService: LmsIntegrationsService,
  ) {
    super();
  }

  async run(): Promise<void> {
    // this.logService.log('Running tests...');
    const items = await this.lmService.GetActivityUnitsAndSessions();
    // this.logService.log(items);
    // this.logService.log('Tests completed');
  }
}
