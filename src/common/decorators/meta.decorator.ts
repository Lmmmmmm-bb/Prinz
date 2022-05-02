import { applyDecorators, SetMetadata } from '@nestjs/common';
import { IBaseResponse } from '../models/response.model';

type MetadataType = Omit<IBaseResponse, 'data'>;

export const Meta = (metadata: MetadataType) => {
  const { status, message } = metadata;

  return applyDecorators(
    SetMetadata('status', status),
    SetMetadata('message', message),
  );
};
