# Multi step Responsive Progress Bar

#### If we have only 24 steps
![image](https://user-images.githubusercontent.com/22837040/117969489-187ea380-b345-11eb-8e75-f0f953b05fe3.png)

#### If we have more than 24 steps
![image](https://user-images.githubusercontent.com/22837040/119252026-67d79600-bbc7-11eb-88a7-96044fc9a837.png)


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
              "passed_step_color": "#218709"
          };

          init(config);
      </script>
  </html>
```
### Example :- 
  If we have 34 steps and current step is at 19 then we will display the progress bar from 10-33 steps. so that we can track previous steps as well as next steps.
