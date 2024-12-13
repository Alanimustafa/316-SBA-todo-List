// ToDo (body) | Has one main container 
const todoBody = document.querySelector('body');
todoBody.setAttribute('class','todoBody');

  // Todo Main Container | Width 80% - Height 80% | Has (2) Containers | LEFT: Todo Form | RIGHT: Todo List

  const todoMainContainer = document.createElement('div');
  todoMainContainer.setAttribute('class', 'todo-Main-Container');
  todoBody.appendChild(todoMainContainer);
  

      // The Header | TOP | Width 100% - Height 10% 
      const todoHeader = document.createElement('div');
      todoHeader.setAttribute('class', 'todoHeader');
      todoMainContainer.appendChild(todoHeader);
      todoHeader.textContent = "SBA Todo List";


      // The Main | BOTTOM | Width 100% - Height 90% 
      const todoMainBottom = document.createElement('div');
      todoMainBottom.setAttribute('class', 'todoMainBottom');
      todoMainContainer.appendChild(todoMainBottom);


          // Todo Buttons | LEFT | Width: 25% - Height: 100% | Has (3) Containers | TOP: Buttons | CENTER: Todo Form | BOTTOM: Copyrights and Contact us
          const buttonsMainLeft = document.createElement('div');
          buttonsMainLeft.setAttribute('class', "buttonMainLeft");
          todoMainBottom.appendChild(buttonsMainLeft);


              // Todo Buttons | TOP | Buttons |  Width: 100% - Height: 80% | Has (3) Buttons | LEFT: New Todo | CENTER: Show Calendar | RIGHT: Settings
              const homeButtonsTopLeft = document.createElement('div');
              homeButtonsTopLeft.setAttribute('class', "homeButtonsTopLeft")
              buttonsMainLeft.appendChild(homeButtonsTopLeft);
              
                    // Todo Operation | Buttons | 1 | Home | Width: 80% - Height: 90%
                    const homeButton = document.createElement ('button');
                    homeButton.setAttribute('class', 'homeButton');
                    homeButton.classList.add('allButtonsHover');
                    homeButton.textContent= "Home";
                    homeButtonsTopLeft.appendChild(homeButton);

                    // Todo Operation | Buttons | 2 | Calendar |Width: 80% - Height: 90%
                    const homeCalendarButton = document.createElement ('button');
                    homeCalendarButton.setAttribute('class', 'homeCalendarButton');
                    homeCalendarButton.classList.add('allButtonsHover');
                    homeCalendarButton.textContent= "Calendar";
                    homeButtonsTopLeft.appendChild(homeCalendarButton);

                    // Todo Operation | Buttons | 3 | Contacts | Width: 80% - Height: 90%
                    const homeContactsButton = document.createElement ('button');
                    homeContactsButton.setAttribute('class', 'homeContactsButton');
                    homeContactsButton.classList.add('allButtonsHover');
                    homeContactsButton.textContent= "Contacts";
                    homeButtonsTopLeft.appendChild(homeContactsButton);

                    // Todo Operation | Buttons | 4 | Whiteboard | Width: 80% - Height: 90%
                    const homeWhiteboardButton = document.createElement ('button');
                    homeWhiteboardButton.setAttribute('class', 'homeWhiteboardButton');
                    homeWhiteboardButton.classList.add('allButtonsHover');
                    homeWhiteboardButton.textContent= "Whiteboard";
                    homeButtonsTopLeft.appendChild(homeWhiteboardButton);


              // Todo Buttons | BOTTOM | My Account |  Width: 100% - Height: 20%
              const myAccountContainer = document.createElement('div');
              myAccountContainer.setAttribute('class', "myAccountContainer")
              buttonsMainLeft.appendChild(myAccountContainer);

                    // Todo Buttons | Button | My Account | Width 100% - Height: 50%
                    const myAccountButton = document.createElement ('button');
                    myAccountButton.setAttribute('class', 'myAccountButton');
                    myAccountButton.classList.add('allButtonsHover');
                    myAccountButton.textContent= "My account";
                    myAccountButton.style.color= "darkRed";
                    myAccountContainer.appendChild(myAccountButton);

            



          // DONE -Todo Main Operation | RIGHT | Width: 75% - Height: 100% | Has (2) Sub Containers | TOP: Greetings and Schedule | BOTTOM: Calendar and Invitations
          const todoMainRight = document.createElement('div');
          todoMainRight.setAttribute('class', "todoMainRight");
          todoMainBottom.appendChild(todoMainRight);

    
            // DONE - Todo Operation | Container 1 | TOP | Greeting and Scheduel | Width: 100% - Height: 50% | Has (2) Containers | LEFT: The Agenda | RIGHT: Schedule 
            const mainRightTop = document.createElement('div');
            mainRightTop.setAttribute('class', "mainRightTop");
            todoMainRight.appendChild(mainRightTop);


              // DONE -Todo Operation | Container 1 | LEFT | Greeting and Scheduel | The Agenda | Width: 60% - Height: 100% | Has (2) Containers | TOP - Picture | BOTTOM: Today Agenda
              const greetScheduleMain = document.createElement('div');
              greetScheduleMain.setAttribute('class', 'greetScheduleMain');
              mainRightTop.appendChild(greetScheduleMain);

                  // Todo Operation | Container 1 | TOP | Greeting and Scheduel | The Agenda | TOP Picture | Width: 100% - Height: 40% | Has (2) Containers | Greeting Message and Photo
                  const greetingContainer = document.createElement('div');
                  greetingContainer.setAttribute('class', 'greetingContainer');
                  greetScheduleMain.appendChild(greetingContainer);

                        // Todo Operation | Container 1 | TOP | Greeting and Scheduel | Greeting Message | TOP |Width 100% - Height 20%
                        const greetingMessage = document.createElement('div');
                        greetingMessage.setAttribute('class', 'greetingMessage');
                        greetingMessage.textContent = "Hello Per Scholas!";
                        greetingContainer.appendChild(greetingMessage);
      

                        // Todo Operation | Container 1 | TOP | Greeting and Scheduel | Photo | BOTTOM |Width 100% - Height 80%
                        const userPhoto = document.createElement('div');
                        userPhoto.setAttribute('class', 'userPhoto');
                        userPhoto.style.backgroundImage = "url('./images/PersonalPhoto.jpeg')";
                        greetingContainer.appendChild(userPhoto);


                  // Todo Operation | Container 1 | BOTTOM | Greeting and Scheduel | The Agenda | Today Agenda | Width: 100% - Height: 60%
                  const todayAgenda = document.createElement('div');
                  todayAgenda.setAttribute('class', 'todayAgenda');
                  greetScheduleMain.appendChild(todayAgenda);

                        // Todo Operation | Container 1 | BOTTOM | Greeting and Scheduel | The Agenda | Today Agenda Text| Width: 100% - Height: 10%
                        const theAgendaText = document.createElement('div');
                        theAgendaText.setAttribute('class', 'theAgendaText');
                        theAgendaText.textContent = "Your agenda today:";
                        todayAgenda.appendChild(theAgendaText);

                        // Todo Operation | Container 1 | BOTTOM | Greeting and Scheduel | The Agenda | Today Agenda contents| Width: 100% - Height: 90%
                        const agendaContents = document.createElement('div');
                        agendaContents.setAttribute('class', 'agendaContents');
                        agendaContents.textContent = "Your agenda today:";
                        todayAgenda.appendChild(agendaContents);


                      

              // Todo Operation | Container 1 | RIGHT | Greeting and Scheduel | Schedule | Width: 40% - Height: 100% | Has (3) Buttons | TOP: Start A Meeting | CENTER: Join A Meeting | BOTTOM: Schedule A Meeting
              const meetingSchedule = document.createElement('div');
              meetingSchedule.setAttribute('class', 'meetingSchedule');
              mainRightTop.appendChild(meetingSchedule);




              // Todo operation | Container 2 | BOTTOM | Calendar and Invitations | Width: 100% - Height: 50% | Has (2) Containers | LEFT: Calendar | RIGHT: Todo List
              const mainRightBottom = document.createElement('div');
              mainRightBottom.setAttribute('class', "mainRightBottom");
              todoMainRight.appendChild(mainRightBottom);
  


                // Todo operation | Container 2 | Calendar and Invitations | LEFT | Calendar | Width: 40% - Height: 100%
                const theCalendar = document.createElement('div');
                theCalendar.setAttribute('class', "theCalendar");
                mainRightBottom.appendChild(theCalendar);

                // Todo operation | Container 2 | Calendar and Invitations | RIGHT | Todo List | Width: 60% - Height: 100%
                const toDoList = document.createElement('div');
                toDoList.setAttribute('class', "toDoList");
                mainRightBottom.appendChild(toDoList);
