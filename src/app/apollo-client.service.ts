import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import gql from 'graphql-tag';

const galileoQuery = gql`{
  findTeradataTaskDetails(serviceRequestId: "15714206"){
    compositeTasks{
      key
      value
      type
    }
  }
}`;

@Injectable()
export class ApolloClientService {

  data: Observable<any>;

  constructor(apollo: Apollo) {
    apollo.query({
      query: gql`{hello}`,
    })
    .subscribe(console.log);
  }

}
