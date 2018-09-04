import React, { Component } from 'react'

const DaysContext = React.createContext()

export const DaysConsumer = DaysContext.Consumer

export class DaysProvider extends Component {
    state = {
     days:  [
            {
              "id": 64,
              "name": "Day 64",
              "workoutIsDone": true,
              "carb": "low-carb",
              "current": false,
              "meal6am": {
                "id": "meal1",
                "text": "Bod·ē Shake",
                "image": "body_shake",
                "done": true
              },
              "meal9am": {
                "id": "meal2",
                "text": "Ham and Swiss Roll Ups",
                "image": null,
                "done": true
              },
              "meal12pm": {
                "id": "meal3",
                "text": "Turkey Melt",
                "image": null,
                "done": true
              },
              "meal3pm": {
                "id": "meal4",
                "text": "Bod·ē Burn with Mozzarella and Tomato Slices",
                "image": null,
                "done": true
              },
              "meal6pm": {
                "id": "meal5",
                "text": "Turkey Melt",
                "image": null,
                "done": false
              }
            },
            {
              "id": 65,
              "name": "Day 65",
              "workoutIsDone": true,
              "carb": "low-carb",
              "current": true,
              "meal6am": {
                "id": "meal6",
                "text": "Bod·ē Shake",
                "image": "body_shake",
                "done": false
              },
              "meal9am": {
                "id": "meal7",
                "text": "Ham and Swiss Roll Ups",
                "image": null,
                "done": false
              },
              "meal12pm": {
                "id": "meal8",
                "text": "Turkey Melt",
                "image": null,
                "done": false
              },
              "meal3pm": {
                "id": "meal9",
                "text": "Bod·ē Burn with Mozzarella and Tomato Slices",
                "image": null,
                "done": false
              },
              "meal6pm": {
                "id": "meal10",
                "text": "Turkey Melt",
                "image": null,
                "done": false
              }
            },
            {
              "id": 66,
              "name": "Day 66",
              "workoutIsDone": false,
              "carb": "high-carb",
              "current": false,
              "meal6am": {
                "id": "meal11",
                "text": "Bod·ē Shake",
                "image": "body_shake",
                "done": false
              },
              "meal9am": {
                "id": "meal12",
                "text": "Grilled Steak (HC)",
                "image": null,
                "done": false
              },
              "meal12pm": {
                "id": "meal13",
                "text": "Bod·ē Shake",
                "image": "body_shake",
                "done": false
              },
              "meal3pm": {
                "id": "meal14",
                "text": "Bod·ē Burn and Whole-Wheat English Muffin with Butter Spray",
                "image": null,
                "done": false
              },
              "meal6pm": {
                "id": "meal15",
                "text": "Garlic Lime Chicken (HC)",
                "image": null,
                "done": false
              }
            },
            {
              "id": 67,
              "name": "Day 67",
              "workoutIsDone": false,
              "carb": "low-carb",
              "current": false,
              "meal6am": {
                "id": "meal16",
                "text": "Bod·ē Shake",
                "image": "body_shake",
                "done": false
              },
              "meal9am": {
                "id": "meal17",
                "text": "Ham and Swiss Roll Ups",
                "image": null,
                "done": false
              },
              "meal12pm": {
                "id": "meal18",
                "text": "Turkey Melt",
                "image": null,
                "done": false
              },
              "meal3pm": {
                "id": "meal19",
                "text": "Bod·ē Burn with Mozzarella and Tomato Slices",
                "image": null,
                "done": false
              },
              "meal6pm": {
                "id": "meal20",
                "text": "Turkey Melt",
                "image": null,
                "done": false
              }
            },
            {
              "id": 68,
              "name": "Day 68",
              "workoutIsDone": false,
              "carb": "low-carb",
              "current": false,
              "meal6am": {
                "id": "meal21",
                "text": "Bod·ē Shake",
                "image": "body_shake",
                "done": false
              },
              "meal9am": {
                "id": "meal22",
                "text": "Ham and Swiss Roll Ups",
                "image": null,
                "done": false
              },
              "meal12pm": {
                "id": "meal23",
                "text": "Bod·ē Shake",
                "image": "body_shake",
                "done": false
              },
              "meal3pm": {
                "id": "meal24",
                "text": "Bod·ē Burn with Mozzarella and Tomato Slices",
                "image": null,
                "done": false
              },
              "meal6pm": {
                "id": "meal25",
                "text": "Turkey Melt",
                "image": null,
                "done": false
              }
            },
            {
              "id": 69,
              "name": "Day 69",
              "workoutIsDone": false,
              "carb": "high-carb",
              "current": false,
              "meal6am": {
                "id": "meal26",
                "text": "Bod·ē Shake",
                "image": "body_shake",
                "done": false
              },
              "meal9am": {
                "id": "meal27",
                "text": "Grilled Steak (HC)",
                "image": null,
                "done": false
              },
              "meal12pm": {
                "id": "meal28",
                "text": "Bod·ē Shake",
                "image": "body_shake",
                "done": false
              },
              "meal3pm": {
                "id": "meal29",
                "text": "Bod·ē Burn and Whole-Wheat English Muffin with Butter Spray",
                "image": null,
                "done": false
              },
              "meal6pm": {
                "id": "meal30",
                "text": "Garlic Lime Chicken (HC)",
                "image": null,
                "done": false
              }
            },
            {
              "id": 70,
              "name": "Day 70",
              "isFree": true,
              "current": false
            }
          ]

        }
        render() {
            return (
                <DaysContext.Provider value={this.state}>
                    {this.props.children}
                </DaysContext.Provider>
            )
        }
}

export function withDays(Component) {
    function DaysAwareComponent (props) {
        return <DaysConsumer>{state => <Component {...props} {...state} />}</DaysConsumer>
    }
    DaysAwareComponent.displayName = `DaysAware(${Component.displayName
    || Component.name
    || 'Component'})`
    return DaysAwareComponent
}