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


          // Todo Buttons | LEFT | Width: 25% - Height: 100% | Has (2) Containers | TOP: 4 Buttons | BOTTOM: My Account 
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

// --------- I'm here -------------
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

                    // Adding the Event Listener Click to the Whiteboard Button |
                      homeWhiteboardButton.addEventListener("click", () => {
                        whiteBoardFunction();
                      });
                    


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
                        agendaContents.textContent = "The agenda contents";
                        todayAgenda.appendChild(agendaContents);


                      

              // Todo Operation | Container 1 | RIGHT | Greeting and Scheduel | Schedule | Width: 40% - Height: 100% | Has (3) Buttons | TOP: Start A Meeting | CENTER: Join A Meeting | BOTTOM: Schedule A Meeting
              const meetingSchedule = document.createElement('div');
              meetingSchedule.setAttribute('class', 'meetingSchedule');
              mainRightTop.appendChild(meetingSchedule);

                    // Todo Operation | Container 1 | RIGHT | Greeting and Scheduel | Schedule | TOP: Start A Meeting
                    const startMeetingButton = document.createElement ('button');
                    startMeetingButton.setAttribute('class', 'startMeetingButton');
                    startMeetingButton.classList.add('allButtonsHover');
                    startMeetingButton.textContent= "Start a meeting";
                    meetingSchedule.appendChild(startMeetingButton);

                    // Todo Operation | Container 1 | RIGHT | Greeting and Scheduel | Schedule | CENTER: Join A Meeting
                    const joinMeetingButton = document.createElement ('button');
                    joinMeetingButton.setAttribute('class', 'joinMeetingButton');
                    joinMeetingButton.classList.add('allButtonsHover');
                    joinMeetingButton.textContent= "Join a meeting";
                    meetingSchedule.appendChild(joinMeetingButton);

// -- -- Im here ---------
                    // Todo Operation | Container 1 | RIGHT | Greeting and Scheduel | Schedule | BOTTOM: Schedule A Meeting
                    const scheduleMeetingButton = document.createElement ('button');
                    scheduleMeetingButton.setAttribute('class', 'scheduleMeetingButton');
                    scheduleMeetingButton.classList.add('allButtonsHover');
                    scheduleMeetingButton.textContent= "Schedule a meeting";
                    meetingSchedule.appendChild(scheduleMeetingButton);
                    meetingSchedule.addEventListener ("click", () => {
                      scheduleAmeeting ();
                    })




              // Todo operation | Container 2 | BOTTOM | Calendar and Invitations | Width: 100% - Height: 50% | Has (2) Containers | LEFT: Calendar | RIGHT: Todo List
              const mainRightBottom = document.createElement('div');
              mainRightBottom.setAttribute('class', "mainRightBottom");
              todoMainRight.appendChild(mainRightBottom);

              


                // Todo operation | Container 2 | Calendar and Invitations | LEFT | Next and Previous Buttons | Width: 40% - Height: 100%
                const theCalendar = document.createElement('div');
                theCalendar.setAttribute('class', "theCalendar");
                mainRightBottom.appendChild(theCalendar);

                      // Todo operation | Container 2 | Calendar and Invitations | LEFT | Next and Previous Buttons Container | Height 10% - Width 100%
                      const calPrevNexContainer = document.createElement('div');
                      calPrevNexContainer.setAttribute('class', "calPrevNexContainer");
                      theCalendar.appendChild(calPrevNexContainer);
      
                      

                          // The Calendar | Previous Button
                          const calPreviousButton = document.createElement ('button');
                          calPreviousButton.setAttribute('class', 'calPreviousButton');
                          // calPreviousButton.classList.add('allButtonsHover');
                          calPreviousButton.textContent= "Previous";
                          calPrevNexContainer.appendChild(calPreviousButton);


                          // The Calendar | Next Button
                          const calNextButton = document.createElement ('button');
                          calNextButton.setAttribute('class', 'calNextButton');
                          // calNextButton.classList.add('allButtonsHover');
                          calNextButton.textContent= "Next";
                          calPrevNexContainer.appendChild(calNextButton);
                    

                      // Todo operation | Container 2 | Calendar and Invitations | LEFT | Calendar Months | Height 90% - Width 100%
                      const calMonths = document.createElement('div');
                      calMonths.setAttribute('class', "calMonths");
                      theCalendar.appendChild(calMonths);
                  
                 

                // Todo operation | Container 2 | Calendar and Invitations | RIGHT | Todo List | Width: 60% - Height: 100%
                const toDoList = document.createElement('div');
                toDoList.setAttribute('class', "toDoList");
                mainRightBottom.appendChild(toDoList);




// ------------------------------ ALL FUNCTIONS ---------------------------------------------

// HOME BUTTON FUNCTION

// CALENDAR FUNCTION

// CONTACTS FUNCTION

// WHITEBOARD FUNCTION
function whiteBoardFunction () {

      // One Cotainer Clear | Has (2) Containers | 1- Home Button | 2- Whiteboard
      const todoMainRightEmpty = document.createElement('div');
      todoMainRightEmpty.setAttribute('class', "todoMainRightEmpty");
      todoMainRight.replaceWith(todoMainRightEmpty);

          // Whiteboard Container | Home Button
          const whiteboardHomButton = document.createElement ('button');
          whiteboardHomButton.setAttribute('class', 'whiteboardHomButton');
          whiteboardHomButton.textContent= "< Back";
          todoMainRightEmpty.appendChild(whiteboardHomButton);

          // The Click Event Listener to Go Back To The Home Page
          whiteboardHomButton.addEventListener("click", () => {
            todoMainRightEmpty.replaceWith(todoMainRight);
          })

          // Whiteboard Container | Whiteboard
          const theWhiteboard = document.createElement('div');
          theWhiteboard.setAttribute('class', "theWhiteboard");
          theWhiteboard.style.backgroundImage = 'url("https://i.pinimg.com/736x/46/d8/5c/46d85cc0cdcd655156180e602ded7471.jpg")';
          todoMainRightEmpty.appendChild(theWhiteboard);
}

// MY ACCOUNT FUNCTION

// START A MEETING FUNCTION

// JOIN A MEETING FUNCTION

// SCHEDULE A MEETING FUNCTION
function scheduleAmeeting () {

    const meetingScheduleEmpty = document.createElement('div');
    meetingScheduleEmpty.setAttribute('class', 'meetingScheduleEmpty');
    meetingSchedule.replaceWith(meetingScheduleEmpty);



}


// CALENDAR PREVIOUS BUTTON MEETING

// CALENDAR NEXT BUTTON MEETING