# Multi step Responsive Progress Bar

#### If we have only 24 steps
![image](https://user-images.githubusercontent.com/22837040/120138641-84da1d80-c1f4-11eb-9448-214fb2cea2f6.png)

#### If we have more than 24 steps
![image](https://user-images.githubusercontent.com/22837040/120138604-683de580-c1f4-11eb-9723-38341ea08d1f.png)


### Description :-
  This is multi step progress bar. We can add n number of steps to this progress bar. but at a time only 24 steps will be visible to user.
### Usage : -
  ``` 
  <!doctype html>
  <html>
  <head>
      <meta charset="UTF-8">
      <script type="text/javascript" src="input/steps_list.js"></script>
      <script type="text/javascript" src="input/current_step.js"></script>
      <script type="text/javascript" src="resources/multi_step_responsive_progressbar.min.js"></script>
  </head>
  <body style="background-color: #ebebe0;"></body>
      <script>
          var config = {
              "total_steps": totalSteps,
              "current_step": currentStep,
              "frame_wdith": 1200,
              "frame_height": 550,
              "line_color": "#000000",
              "default_step_color":"#8585ad",
              "last_step_color": "#e6e600",
              "passed_step_color": "#218709",
              "text-color":"#050C64"
          };

          init(config);
      </script>
  </html>
```
#### input/steps_list.js - 
  Add all of your steps under this file as array.(This is optional we can directly add this value under html file).
  ##### Example - 
  ```
  var totalSteps = [
        "STEP _ 1",
        "STEP _ 2",
        "STEP _ 3",
        "STEP _ 4",
        "STEP _ 5",
        "STEP _ 6",
        "STEP _ 7",
        "STEP _ 8",
        "STEP _ 9",
        "STEP _ 10",
        "STEP _ 11",
        "STEP _ 12",
        "STEP _ 13",
        "STEP _ 14",
        "STEP _ 15",
        "STEP _ 16",
        "STEP _ 17",
        "STEP _ 18",
        "STEP _ 19",
        "STEP _ 20",
        "STEP _ 21",
        "STEP _ 22",
        "STEP _ 23",
        "STEP _ 24",
        "STEP _ 25",
        "STEP _ 26",
        "STEP _ 27",
        "STEP _ 28",
        "STEP _ 29",
        "STEP _ 30",
        "STEP _ 31",
        "STEP _ 32",
        "STEP _ 33",
        "STEP _ 34",
        "STEP _ 35",
        "STEP _ 36",
        "STEP _ 37"
    ];
  ```
#### input/current_step.js - 
 Add active step under this file.(This is optional we can directly add this under html file).
 ```
  var currentStep = "STEP _ 8";
 ```
 
1. total_steps - total number of steps that are invovlved.(This bar display only 24 steps remaining steps will be hidden. 24 steps depends on <b>current step</b>).
2. current_step - Active step.
3. frame_wdith - frame width
4. frame_height - frame height
5. line_color - line color
6. default_step_color - this is used to set default circle color
7. last_step_color - this is used to set last active circle color
8. passed_step_color - this is used to set all active circle color's(except the recent circle)
9. text-color - display text color

#### Example :- 
  If we have 34 steps and current step is at 19 then we will display the progress bar from 10-33 steps. so that we can track previous steps as well as next steps.
