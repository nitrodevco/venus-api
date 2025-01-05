import { ConsoleLogger, Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class CoreLogService extends ConsoleLogger implements LoggerService
{
}
