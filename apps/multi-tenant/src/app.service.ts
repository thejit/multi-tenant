import { Logger, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(@Inject('NOTIFY_SERVICE') private readonly client: ClientProxy) {}

  // getHello(): string {
  //   return 'Hello World!';
  // }

  async getHello() {
    Logger.log('getHello');
    // const recieve = this.client.send<number>('notify', {
    //   user: 'Ali',
    //   data: { a: 1, b: 2 },
    // });
    return this.client.send<number>('notify', {
      user: 'Ali',
      data: { a: 1, b: 2 },
    }).pipe(
      map((res) => {
        console.log('res=', res);
        return res;
      }),
    );
    // console.log(recieve);
    // Logger.log('recieve=' + recieve);

    // return '\t add 1+2=' + recieve;
  }
}
