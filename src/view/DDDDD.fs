namespace VDDD

module DDDDD =

    open Fable.Helpers.React
    open Fable.Helpers.React.Props
    open VDDD.Types


    let social_link label url =
        a
            [ Class "text-xl m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400"
              Href url
              Target "_blank" ] [ label |> ofString ]

    let render model dispatch =
        div []
            [ div
                [ Class "hero flex flex-col items-center justify-center lg:flex-row-reverse lg:items-start"
                  Style
                      [ Background "url(./img/kandddinsky.jpg)"
                        BackgroundSize "cover"
                        BackgroundPosition "center" ] ]
                  [ div [ Class "overlay" ] []

                    div [ Class "w-full lg:w-1/3 flex flex-col items-center justify-center z-10" ]
                        [ div
                            [ Class
                                "w-full p-4 sm:mt-8 sm:w-5/6 sm:rounded-lg sm:shadow-lg bg-white  flex flex-col items-center justify-start" ]
                              [ img
                                  [ Class "hidden lg:block object-contain h-8 mb-4"
                                    Src "./img/vddd_logo_tp.png" ]
                                div [ Class "mb-4 text-justify" ]
                                    [ "From our last offline retro at DDD Europe, more and more people felt the need for an online conference. DDDDD is our call to that to start exploring the world of online collaboration and sharing of knowledge. We will present more details the closer we go to the conference date."
                                      |> ofString ]
                                div [ Class "mb-4 font-semibold" ]
                                    [ "Share your deep, creative, productive or crazy ideas!" |> ofString ]
                                a
                                    [ Href "https://sessionize.com/ddddd/"
                                      Target "_blank"
                                      Class "p-4 bg-blue-500 floating-action-button text-white" ]
                                    [ str "Propose a session" ] ]
                          div [ Class "mt-4 flex items-center justify-center" ]
                              [ social_link "Slack" "https://j.mp/ddd-es-cqrs"
                                social_link "Twitter" "https://twitter.com/VirtualDDD"
                                social_link "Discord" "https://discord.gg/8kPmvKr" ] ]

                    div [ Class "w-full mt-8 lg:w-2/3  flex flex-col items-center justify-center" ]
                        [ div [ Class "w-5/6 z-10 flex flex-col items-center" ]
                              [ div [ Class "w-full hidden md:flex items-stretch justify-start my-2 " ]
                                    [ div [ Class "bg-white w-full rounded-lg shadow-md p-4 md:p-8 mb-2" ]
                                          [ div [ Class "font-bold" ] [ str "Distributed Domain-Driven Design Day" ]

                                            div [ Class "mb-2 text-gray-600 text-sm" ] [ str "Friday, May 15th 2020" ]
                                            img
                                                [ Class "w-full"
                                                  Src "./img/conference.jpeg" ]
                                            div [ Class "py-2 text-justify" ]
                                                [ str
                                                    "Distributed Domain-Driven Design Day is a virtualDDD online community conference. In this pandemic time where conferences are cancelled or postponed all over the world, we offer some solace by offering an online experience that comes as close to an offline conference experience as possible. We are looking for talks, online panel discussions as we do on meetups and any other creative ideas you can come up with. The day will be framed by pre-recorded talks with live Q&A by the speaker as inspired by Liz Keogh, and spiced up by online collaborative modelling and other hands-on sessions.
                                          This day will be a 24-hour long worldwide live event, starting at 0:00 GMT and ending at 24:00 GMT" ] ] ] ] ] ]
              Sponsors.render model dispatch
              Organisers.render model dispatch ]
