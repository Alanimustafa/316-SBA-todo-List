// ToDo (body) | Has one main container 
const todoBody = document.querySelector('body');
todoBody.setAttribute('class','todoBody');

  // Todo Main Container | Width 80% - Height 80% | Has (2) Containers | LEFT: Todo Form | RIGHT: Todo List

  const todoMainContainer = document.createElement('div');
  todoMainContainer.setAttribute('class', 'todo-Main-Container');
  todoBody.appendChild(todoMainContainer);
  

    // The Header | TOP | Width 100% - Height 10% 

    // Todo Buttons | LEFT | Width: 25% - Height: 100% | Has (3) Containers | TOP: Buttons | CENTER: Todo Form | BOTTOM: Copyrights and Contact us


      // Todo Buttons | TOP | Buttons |  Width: 100% - Height: 80% | Has (3) Buttons | LEFT: New Todo | CENTER: Show Calendar | RIGHT: Settings
            
            // Todo Operation | Buttons | 1 | Home | Width: 80% - Height: 90%
            // Todo Operation | Buttons | 2 | Calendar |Width: 80% - Height: 90%
            // Todo Operation | Buttons | 3 | Contacts | Width: 80% - Height: 90%
            // Todo Operation | Buttons | 4 | Whiteboard | Width: 80% - Height: 90%


      // Todo Buttons | BOTTOM | Sign OUT |  Width: 100% - Height: 200%

      



    // Todo Operation | RIGHT | Width: 75% - Height: 100% | Has (2) Sub Containers | TOP: Greetings and Schedule | BOTTOM: Calendar and Invitations

    
      // Todo Operation | Container 1 | TOP | Greeting and Scheduel | Width: 100% - Height: 50% | Has (2) Containers | LEFT: The Agenda | RIGHT: Schedule 


        // Todo Operation | Container 1 | LEFT | Greeting and Scheduel | The Agenda | Width: 70% - Height: 100% | Has (2) Containers | TOP - Picture | BOTTOM: Today Agenda

            // Todo Operation | Container 1 | TOP | Greeting and Scheduel | The Agenda | TOP Picture | Width: 100% - Height: 40%

            // Todo Operation | Container 1 | BOTTOM | Greeting and Scheduel | The Agenda | Today Agenda | Width: 100% - Height: 60%

                

        // Todo Operation | Container 1 | RIGHT | Greeting and Scheduel | Schedule | Width: 30% - Height: 100% | Has (3) Buttons | TOP: Start A Meeting | CENTER: Join A Meeting | BOTTOM: Schedule A Meeting




          // Todo operation | Container 2 | BOTTOM | Calendar and Invitations | Width: 100% - Height: 50% | Has (2) Containers | LEFT: Calendar | RIGHT: Todo List


            // Todo operation | Container 2 | Calendar and Invitations | LEFT | Calendar | Width: 40% - Height: 100%

            // Todo operation | Container 2 | Calendar and Invitations | RIGHT | Todo List | Width: 60% - Height: 100%
