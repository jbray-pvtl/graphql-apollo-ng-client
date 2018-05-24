import { Component, OnInit } from '@angular/core';
import { ApolloClientService } from '../apollo-client.service';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
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

@Component({
  selector: 'app-apollo-client',
  templateUrl: './apollo-client.component.html',
  styleUrls: ['./apollo-client.component.css']
})
export class ApolloClientComponent implements OnInit {

  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:4000/graphql'}),
      cache: new InMemoryCache()
    });
  }

  ngOnInit() {
    this.apollo.query({
      query: galileoQuery,
    })
    .subscribe(
      console.log
    );
  }

}
