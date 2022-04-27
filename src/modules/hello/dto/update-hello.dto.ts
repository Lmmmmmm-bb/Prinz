import { PartialType } from '@nestjs/swagger';

import { CreateHelloDto } from './create-hello.dto';

// PartialType<T>: 返回 T 类型，并且每个字段都是可选的
export class UpdateHelloDto extends PartialType(CreateHelloDto) {}
