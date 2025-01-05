import { SetMetadata } from '@nestjs/common';

export const DECORATOR_REQUIRES_GUEST = 'decorator_requires_guest';

export const RequiresGuest = () => SetMetadata(DECORATOR_REQUIRES_GUEST, true);
