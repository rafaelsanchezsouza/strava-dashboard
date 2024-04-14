import { Component, OnInit } from '@angular/core';  
import { Activity } from '../models/activity';  
  
const ACTIVITY_DATA: Activity[] = [  
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Amanda",
            "lastname": "V."
        },
        "name": "Lunch Run",
        "distance": 4576.0,
        "moving_time": 8070,
        "elapsed_time": 8070,
        "total_elevation_gain": 0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Amanda",
            "lastname": "T."
        },
        "name": "Bike 12km",
        "distance": 0.0,
        "moving_time": 4668,
        "elapsed_time": 4668,
        "total_elevation_gain": 0,
        "type": "Ride",
        "sport_type": "Ride",
        "workout_type": 10
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Luiz Felipe",
            "lastname": "T."
        },
        "name": "Morning Walk",
        "distance": 1595.3,
        "moving_time": 1032,
        "elapsed_time": 1183,
        "total_elevation_gain": 3.7,
        "type": "Walk",
        "sport_type": "Walk"
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Pedro",
            "lastname": "E."
        },
        "name": "Corrida matinal",
        "distance": 12011.6,
        "moving_time": 4211,
        "elapsed_time": 4354,
        "total_elevation_gain": 0.0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Everton",
            "lastname": "M."
        },
        "name": "Morning Run",
        "distance": 14195.9,
        "moving_time": 4913,
        "elapsed_time": 4924,
        "total_elevation_gain": 19.4,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Everton",
            "lastname": "M."
        },
        "name": "Morning Walk",
        "distance": 793.0,
        "moving_time": 781,
        "elapsed_time": 781,
        "total_elevation_gain": 0,
        "type": "Walk",
        "sport_type": "Walk"
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Everton",
            "lastname": "M."
        },
        "name": "Morning Workout",
        "distance": 0.0,
        "moving_time": 2688,
        "elapsed_time": 2688,
        "total_elevation_gain": 0,
        "type": "Workout",
        "sport_type": "Workout"
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Everton",
            "lastname": "M."
        },
        "name": "Morning Run",
        "distance": 760.0,
        "moving_time": 319,
        "elapsed_time": 319,
        "total_elevation_gain": 0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Rodrigo",
            "lastname": "C."
        },
        "name": "Night Run",
        "distance": 1626.0,
        "moving_time": 760,
        "elapsed_time": 760,
        "total_elevation_gain": 0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Luiz Felipe",
            "lastname": "T."
        },
        "name": "Night Walk",
        "distance": 1612.9,
        "moving_time": 1501,
        "elapsed_time": 1501,
        "total_elevation_gain": 8.3,
        "type": "Walk",
        "sport_type": "Walk"
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Pedro",
            "lastname": "E."
        },
        "name": "Corrida ao entardecer",
        "distance": 9012.6,
        "moving_time": 3512,
        "elapsed_time": 3516,
        "total_elevation_gain": 0.0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Luiz Felipe",
            "lastname": "T."
        },
        "name": "Evening Workout",
        "distance": 0.0,
        "moving_time": 127,
        "elapsed_time": 127,
        "total_elevation_gain": 0,
        "type": "Workout",
        "sport_type": "Workout"
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Luiz Felipe",
            "lastname": "T."
        },
        "name": "Evening Walk",
        "distance": 1563.6,
        "moving_time": 1191,
        "elapsed_time": 1217,
        "total_elevation_gain": 3.9,
        "type": "Walk",
        "sport_type": "Walk"
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Marcus",
            "lastname": "P."
        },
        "name": "Corrida da tarde",
        "distance": 5402.4,
        "moving_time": 1922,
        "elapsed_time": 2011,
        "total_elevation_gain": 1.0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Everton",
            "lastname": "M."
        },
        "name": "Morning Run",
        "distance": 8008.8,
        "moving_time": 2760,
        "elapsed_time": 2949,
        "total_elevation_gain": 13.8,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Pedro",
            "lastname": "E."
        },
        "name": "Corrida ao entardecer",
        "distance": 9008.0,
        "moving_time": 3217,
        "elapsed_time": 3279,
        "total_elevation_gain": 0.0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Everton",
            "lastname": "M."
        },
        "name": "Morning Workout",
        "distance": 0.0,
        "moving_time": 2421,
        "elapsed_time": 2421,
        "total_elevation_gain": 0,
        "type": "Workout",
        "sport_type": "Workout"
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Everton",
            "lastname": "M."
        },
        "name": "Morning Run",
        "distance": 8018.5,
        "moving_time": 2639,
        "elapsed_time": 2932,
        "total_elevation_gain": 18.8,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Luiz Felipe",
            "lastname": "T."
        },
        "name": "Afternoon Walk",
        "distance": 4925.0,
        "moving_time": 3053,
        "elapsed_time": 3182,
        "total_elevation_gain": 14.5,
        "type": "Walk",
        "sport_type": "Walk"
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Pedro",
            "lastname": "E."
        },
        "name": "Corrida matinal",
        "distance": 12304.7,
        "moving_time": 4372,
        "elapsed_time": 4783,
        "total_elevation_gain": 24.0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Marcus",
            "lastname": "P."
        },
        "name": "Corrida matinal",
        "distance": 10099.1,
        "moving_time": 6178,
        "elapsed_time": 6922,
        "total_elevation_gain": 345.0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": 0
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Everton",
            "lastname": "M."
        },
        "name": "Morning Run",
        "distance": 16260.6,
        "moving_time": 5935,
        "elapsed_time": 6105,
        "total_elevation_gain": 19.5,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Marcus",
            "lastname": "P."
        },
        "name": "Treinamento com peso vespertino",
        "distance": 0.0,
        "moving_time": 2014,
        "elapsed_time": 2014,
        "total_elevation_gain": 0,
        "type": "WeightTraining",
        "sport_type": "WeightTraining"
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Pedro",
            "lastname": "E."
        },
        "name": "Corrida matinal",
        "distance": 9015.5,
        "moving_time": 3628,
        "elapsed_time": 5609,
        "total_elevation_gain": 18.2,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Everton",
            "lastname": "M."
        },
        "name": "Morning Run",
        "distance": 8006.7,
        "moving_time": 2864,
        "elapsed_time": 3343,
        "total_elevation_gain": 11.7,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Pedro",
            "lastname": "E."
        },
        "name": "Corrida ao entardecer",
        "distance": 7630.1,
        "moving_time": 2860,
        "elapsed_time": 2943,
        "total_elevation_gain": 49.0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Luiz Felipe",
            "lastname": "T."
        },
        "name": "Evening Walk",
        "distance": 1305.0,
        "moving_time": 960,
        "elapsed_time": 960,
        "total_elevation_gain": 0.0,
        "type": "Walk",
        "sport_type": "Walk"
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Marcus",
            "lastname": "P."
        },
        "name": "Treinamento com peso vespertino",
        "distance": 0.0,
        "moving_time": 2019,
        "elapsed_time": 2019,
        "total_elevation_gain": 0,
        "type": "WeightTraining",
        "sport_type": "WeightTraining"
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Rodrigo",
            "lastname": "C."
        },
        "name": "Night Run",
        "distance": 1359.0,
        "moving_time": 602,
        "elapsed_time": 602,
        "total_elevation_gain": 0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    },
    {
        "resource_state": 2,
        "athlete": {
            "resource_state": 2,
            "firstname": "Everton",
            "lastname": "M."
        },
        "name": "Morning Run",
        "distance": 8006.6,
        "moving_time": 2802,
        "elapsed_time": 2963,
        "total_elevation_gain": 9.0,
        "type": "Run",
        "sport_type": "Run",
        "workout_type": null
    }
];   
  
@Component({  
  selector: 'app-dashboard',  
  templateUrl: './dashboard.component.html',  
  styleUrls: ['./dashboard.component.scss']  
})  
export class DashboardComponent implements OnInit {  
  displayedColumns: string[] = ['name', 'athlete', 'distance', 'moving_time', 'type'];  
  dataSource = ACTIVITY_DATA;  
  
  constructor() { }  
  
  ngOnInit(): void {  
  }  
}  
