namespace VDDD

module DDDDD =

  open Feliz

  let render model dispatch =
    Html.div [
      prop.className "section flex flex-col lg:flex-row items-center justify-start mt-12 " 
      prop.children [
        Html.div [
          prop.className "w-2/3 flex justify-center"
          prop.children [ 
            Html.div [
              prop.className "relative w-3/4 z-20"
              prop.children [
                Html.div [
                  prop.className "font-medium text-lg"
                  prop.text "Distributed Domain-Driven Design Day"
                ]
                Html.div [
                  prop.className "mb-2 text-gray-600 text-sm"
                  prop.text "Friday, May 15th 2020"
                ]
                Html.div [ 
                  prop.text "Distributed Domain-Driven Design Day is a virtualDDD online community conference. In this pandemic time where conferences are cancelled or postponed all over the world, we offer some solace by offering an online experience that comes as close to an offline conference experience as possible. We are looking for talks, online panel discussions as we do on meetups and any other creative ideas you can come up with. The day will be framed by pre-recorded talks with live Q&A by the speaker as inspired by Liz Keogh, and spiced up by online collaborative modelling and other hands-on sessions. This day will be a 24-hour long worldwide live event, starting at 0:00 GMT and ending at 24:00 GMT"
                ]
              ]
            ]
          ]
        ]
        Html.div [
          prop.className "relative w-1/3"
          prop.children [
            Html.span [ 
              prop.className "hidden lg:block z-10 absolute left-0 inset-y-0 w-48 bg-white transform -translate-x-1/2 -skew-x-6"
            ]
            Html.img [ 
              prop.className "hidden lg:block"
              prop.src "./img/conference.jpeg"
            ]
          ]
        ]
      ]
    ]