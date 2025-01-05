import { SetMetadata } from '@nestjs/common';

export const DECORATOR_PERMISSION = 'permissions';

export const Permission = (...permissions: string[]) => SetMetadata(DECORATOR_PERMISSION, permissions);
