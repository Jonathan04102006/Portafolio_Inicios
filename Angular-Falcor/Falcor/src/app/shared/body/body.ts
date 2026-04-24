import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './body.html',
  styleUrls: ['./body.css']
})
export class Body {}