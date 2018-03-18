import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActionsService {
  constructor(private db: AngularFireDatabase) { }
  getList(listPath): Observable<any[]> {
    console.log(this.db.list(listPath));
    return this.db.list(listPath).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  addPerson(listPath, person) {
    this.db.list(listPath).push(person);
  }
  removePerson(listPath, key){
    this.db.list(listPath).remove(key);
  }
}
