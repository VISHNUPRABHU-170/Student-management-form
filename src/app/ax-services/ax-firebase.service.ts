import { Injectable } from '@angular/core';
import { AxStudentDataModel } from '../ax-student-form/ax-student-form.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firebaseUrl =
    'https://students-db-e35be-default-rtdb.firebaseio.com/studentsData.json';

  dataEmitter: Subject<object> = new Subject();
  static fireBaseData: object;



  constructor() {
    this.getDataFromFirebase();
  }

  /**
   * Method create Student Data in Firebase.
   */
  createDataInFirebase(data: AxStudentDataModel): void {
    new Promise((resolve, reject) => {
      const sendData = JSON.stringify(data);
      const setData = new XMLHttpRequest();

      setData.open('POST', this.firebaseUrl);
      setData.setRequestHeader('Content-Type', 'application/json');

      setData.onreadystatechange = () => {
        if (setData.readyState === XMLHttpRequest.DONE) {
          if (setData.status === 200) {
            resolve('Data Created successfully!');
          } else {
            reject('Error submitting data:');
          }
        }
      };

      setData.send(sendData);
    })
      .then((response) => {
        console.log(response);
        this.getDataFromFirebase();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Method gets Students Database from Firebase.
   */
  getDataFromFirebase() {
    new Promise((resolve, reject) => {
      const getData = new XMLHttpRequest();

      getData.open('GET', this.firebaseUrl);

      getData.onload = () => {
        if (getData.status === 200) {
          resolve(JSON.parse(getData.responseText));
        } else {
          reject('Error Occurred');
        }
      };

      getData.send();
    })
      .then((response) => {
        if (response) {
          FirebaseService.fireBaseData = response;
          this.dataEmitter.next(response as object);
          console.log('Data Fetched Successfully');
        } else {
          FirebaseService.fireBaseData = {};
          this.dataEmitter.next({});
          console.log('No Data Found');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Method update Student Data in Firebase.
   */
  updateDataInFirebase(id: string, data: AxStudentDataModel): void {
    new Promise((resolve, reject) => {
      const url = `https://students-db-e35be-default-rtdb.firebaseio.com/studentsData/${id}.json`;
      const updateData = new XMLHttpRequest();

      updateData.open('PUT', url);
      updateData.setRequestHeader('Content-Type', 'application/json');

      updateData.onload = () => {
        if (updateData.status >= 200 && updateData.status < 300) {
          resolve('Data Updated Successfully!');
        } else {
          reject(updateData.responseText);
        }
      };

      updateData.send(JSON.stringify(data));
    })
      .then((response) => {
        console.log(response);
        this.getDataFromFirebase();
      })
      .catch((error) => console.log(error));
  }

  /**
   * Method delete Student Data in Firebase.
   */
  deleteDataInFirebse(id: string): void {
    new Promise((resolve, reject) => {
      const deleteData = new XMLHttpRequest();
      const url = `https://students-db-e35be-default-rtdb.firebaseio.com/studentsData/${id}.json`;

      deleteData.open('DELETE', url);

      deleteData.onload = () => {
        if (deleteData.status >= 200 && deleteData.status < 300) {
          resolve('Data Deleted Successfully!');
        } else {
          reject(deleteData.responseText);
        }
      };

      deleteData.send();
    })
      .then((data) => {
        this.getDataFromFirebase();
        console.log(data);
      })
      .catch((error) => {
        this.getDataFromFirebase();
        console.log(error);
      });
  }
}
