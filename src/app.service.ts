import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHello2(): {} {
    return {message: 'Hello World!', title: 'My Greeting App'}; 
    //This title is to name the webpage tab This happens because in the html file
    //The title tag is before the html tag
    }
}
