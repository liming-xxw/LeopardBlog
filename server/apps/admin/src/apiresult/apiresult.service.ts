import { Injectable } from '@nestjs/common';

class Paging {
  data: any;

  total: number;

  lastPage: number;

  page: number;
}



@Injectable()
export class ApiresultService {
  async message(message:string,code:number) {
    return {
      message: message,
      code: code,
    };
  }

  MESSAGE(message:string,code:number,data) {
    return {
      message: message,
      code: code,
      data,
    };
  }


  paging({ data, total, lastPage, page }: Paging) {
    return {
      total: total,
      data,
      lastPage: lastPage,
      page: page || 1,
    };
  }
}
