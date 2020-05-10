namespace VDDD.DDDDD

module View =

  open Feliz
  open Schedule 

  let description =
    Html.div [
      prop.className "w-full lg:w-2/3 flex justify-center"
      prop.children [ 
        Html.div [
          prop.className "relative w-3/4 z-20 py-8 flex flex-col items-center justify-center"
          prop.children [
            Html.div [
              prop.className "font-bold text-4xl"
              prop.text "DDDDD"
            ]
            Html.div [
              prop.className "font-medium text-2xl text-center"
              prop.text "Distributed Domain-Driven Design Day"
            ]
            Html.div [
              prop.className "text-gray-600 text-sm"
              prop.text "Friday, May 15th 2020"
            ]
            Html.div [ 
              prop.className "my-4 text-justify"
              prop.text "Distributed Domain-Driven Design Day is a virtualDDD online community conference. In this pandemic time where conferences are cancelled or postponed all over the world, we offer some solace by offering an online experience that comes as close to an offline conference experience as possible. We are looking for talks, online panel discussions as we do on meetups and any other creative ideas you can come up with. The day will be framed by pre-recorded talks with live Q&A by the speaker as inspired by Liz Keogh, and spiced up by online collaborative modelling and other hands-on sessions. This day will be a 24-hour long worldwide live event, starting at 4:00 GMT and ending at 22:00 GMT"
            ]
          ]
        ]
      ]
    ]

  let decoration = 
    Html.div [
      prop.className "relative w-full lg:w-1/3 self-stretch"
      prop.children [
        Html.span [ 
          prop.className "hidden lg:block z-10 absolute left-0 inset-y-0 w-48 bg-white transform -translate-x-1/2 -skew-x-6"
        ]
        Html.span [ 
          prop.className "hidden lg:block bg-cover bg-center overflow-hidden h-full"
          prop.style [
            style.backgroundImageUrl "./img/conference.jpeg" 
          ]
        ]
      ]
    ]    


  let conference_hero =
    Html.div [
      prop.className "section flex flex-col lg:flex-row items-center justify-start" 
      prop.children [
        description
        decoration
      ]
    ]  


  let render model dispatch =
    Html.div [
      conference_hero
      conference_schedule
    ]