import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponentService } from './reactive-component.service';
import { Observable, combineLatest, map } from 'rxjs';
import { UserDTO } from '../model/UserDTO';

@Component({
  selector: 'app-reactive-component',
  templateUrl: './reactive-component.component.html',
  styleUrl: './reactive-component.component.sass',
  providers: [ReactiveComponentService],
})
export class ReactiveComponentComponent {
  // constructor(private httpClient: HttpClient) {
  //   console.log('IA-l');

  //   let test = ['A', 'B', 'C'];

  //   let as = test.filter((it) => it === 'A');

  //   console.log(as);

  //   // service.getPosts().subscribe((a: any) => console.log(a));
  //   httpClient
  //     .get('http://localhost:5001/api')
  //     .subscribe((a) => console.log(a));
  // }
  data$: Observable<{
    users: UserDTO[];
  }>;

  users$: Observable<UserDTO[]>;
  constructor(
    private service: ReactiveComponentService,
    private httpClient: HttpClient
  ) {
    console.log('IA-l');

    let test = ['A', 'B', 'C'];

    let as = test.filter((it) => it === 'A');

    console.log(as);

    // service.getPosts().subscribe((a: any) => console.log(a));
    this.users$ = this.service.getUsers();
    // this.data$ = combineLatest([this.service.getUsers]).pipe(
    //   map(([users]: any) => ({
    //     users: users,
    //   }))
    // );

    this.data$ = combineLatest([this.service.getUsers()]).pipe(
      map(([usersData]) => ({
        users: usersData,
      }))
    );
    this.service.getUsers().subscribe((users) => console.log(users));
  }

  test(): Observable<UserDTO[]> {
    return this.httpClient.get<UserDTO[]>('http://localhost:5001/api');
  }
}
