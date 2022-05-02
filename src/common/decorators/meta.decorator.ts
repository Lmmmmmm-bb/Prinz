import { applyDecorators, SetMetadata } from '@nestjs/common';
import { PureResponseType } from '../models/response.model';

export const Meta = (metadata: PureResponseType) => {
  const { status, message } = metadata;

  return applyDecorators(
    SetMetadata('status', status),
    SetMetadata('message', message),
  );
};
