import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   exteriorDamages = [
        {
          'id': 'f42d2d0b-fc82-4143-8242-fbfae5e0acd2',
          'damageType': {
            'id': 'c6e6e65d-c3d1-4d34-8a36-79bb424be350',
            'type': 'Cracked'
          },
          'note': ''
        },
        {
          'id': 'f42d2d0b-fc82-4143-8242-fbfae5e0acd2',
          'damageLocation': {
            'id': '62638675-c753-4fb4-9b59-1eae0cabb705',
            'location': 'Windshield'
          },
          'damageType': {
            'id': 'c6e6e65d-c3d1-4d34-8a36-79bb424be350',
            'type': 'Chipped'
          },
          'note': ''
        },
        {
          'id': '575c7d4b-0180-4a47-9775-cce5667e66ed',
          'damageLocation': {
            'id': '8db7a614-c1e0-41c4-878f-5e8c28eb9875',
            'location': 'Front Hood'
          },
          'damageType': {
            'id': 'b7217254-a478-413a-ac67-1c0abd04ef5f',
            'type': 'Other'
          },
          'note': 'asdasd'
        }
      ]



      formatData() {
       const tempObj = {};
       this.exteriorDamages.forEach((damage) => {
        if(damage.damageLocation && damage.damageType) {
          const location = damage.damageLocation.location;
         const damageType = damage.damageType.type;
         if (!tempObj[location]) {
           tempObj[location] = {};
         }
         tempObj[location][damageType] = true;
        }
       })
       console.log(tempObj);
      }
}
