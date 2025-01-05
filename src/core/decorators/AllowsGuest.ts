import { SetMetadata } from '@nestjs/common';

export const DECORATOR_ALLOWS_GUEST = 'decorator_allows_guest';

export const AllowsGuest = () => SetMetadata(DECORATOR_ALLOWS_GUEST, true);
