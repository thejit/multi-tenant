import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { CONTEXT, RedisContext, RequestContext } from '@nestjs/microservices';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';

@Injectable({ scope: Scope.REQUEST })
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(@Inject(REQUEST) private readonly request: RequestContext) {}
  createSequelizeOptions(): SequelizeModuleOptions {
    let domain: string[];
    let database = 'testdb';
    if (this.request.data) {
      domain = this.request.data['host'].split('.');
      console.log(this.request);
    } else {
      domain = this.request['headers']['host'].split('.');
    }

    console.log(domain);
    if (domain[0] != '127' && domain[0] != 'www' && domain.length > 2) {
      database = 'tenant_' + domain[0];
      console.log('current DB', database);
    }

    return {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'tpass',
      database: database,
      autoLoadModels: true,
      synchronize: true,
    };
  }
}
