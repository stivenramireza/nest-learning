import { SetMetadata } from '@nestjs/common';
import { Role } from '../interfaces';

export const META_ROLES = 'roles';

export const RoleProtected = (...args: Role[]) => {
  return SetMetadata(META_ROLES, args);
};
