import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class MobilePipe implements PipeTransform {
  constructor(private readonly mobileLength: number) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, _metadata: ArgumentMetadata) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const mobile: string = value.mobile;

    if (mobile.length !== this.mobileLength) {
      throw new BadRequestException('validation failed!');
    }

    if (mobile.startsWith('0912')) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      value.operator = 'hamrah aval';
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value;
  }
}
