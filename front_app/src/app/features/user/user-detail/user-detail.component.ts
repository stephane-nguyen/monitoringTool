import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
    <div class="d-flex justify-content-center">
      <div
        class="card mx-auto"
        style="width: 25em; height: 15em; margin-top:10em;"
      >
        <div class="card-body">
          <h5 class="card-title text-center">Card title</h5>
          <p class="card-text">Name</p>
          <p class="card-text">Email</p>
          <p class="card-text">Yo</p>
        </div>
      </div>
    </div>
  `,
})
export class UserDetailComponent {
  constructor() {}
}
