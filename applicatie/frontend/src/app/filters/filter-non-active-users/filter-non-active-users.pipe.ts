import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../classes/user';
import { UserModule } from '../../components/user/user.module';

@Pipe({
  name: 'filterNonActiveUsers'
})
export class FilterNonActiveUsersPipe implements PipeTransform {

  transform(users: User[], filter: boolean): any {
  
    if(!filter){
      return users;
    }
    return users.filter(user => user.active == false);

  }

}
