import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ActionsService } from '../services/actions/actions.service';
import { Action } from 'rxjs/scheduler/Action';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'courses-list',
	templateUrl: './courses-list.component.html',
	styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

	persons: Observable<any[]>;
	constructor(private db: AngularFireDatabase, private actions: ActionsService) { }
	ngOnInit() {
		this.persons = this.actions.getList('/persons');
	}
	addPerson (person: NgForm){
		this.actions.addPerson('/persons', person.value);
		console.log(this.persons)
	}
	removePerson(key){
		this.actions.removePerson('/persons', key)
	}
}
