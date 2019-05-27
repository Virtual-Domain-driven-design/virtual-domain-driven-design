module App.Views.Organisers

open Fable.Helpers.React
open Fable.Helpers.React.Props


let organisers model dispatch =
  div [ Class "content bg-grey-lighter"; Id "organisers" ]
    [ div [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
          [ h2 []
                [ str "Organisers" ]
            div [ Class "flex flex-col md:flex-row -mx-2 justify-between" ]
              [
                div [ Class "m-2 bg-white w-1/3 rounded-lg shadow-lg md:p-8 mt-6" ]
                   [ div [ Class "organiser text-center" ]
                      [ h3 []
                            [ str "Zsofia Herendi" ] ]
                     div [ Class "organiser-picture" ]
                      [ img [ Src "./img/zsofia.jpeg" ] ]
                     div [ Class "org-social" ]
                        [ a [
                           Class "twitter-icon"
                           Href "https://twitter.com/ZHerendi"
                           Target "_blank"]
                           [ img [
                                Class "ml-2 h-10"
                                Src "./img/twitter.png" ]
                            ]
                          a [
                            Class "twitter-icon"
                            Href "https://www.linkedin.com/in/zsófia-herendi-2296b48/"
                            Target "_blank"]
                            [ img [
                                Class "ml-2 h-10"
                                Src "./img/linkedin.png" ]
                            ]
                      ]
                    ]
                    
                div [ Class "m-2 bg-white w-1/3 rounded-lg shadow-lg md:p-8 mt-6" ]
                   [ div [ Class "organiser text-center" ]
                      [ h3 []
                            [ str "Marco Heimeshoff" ] ]
                     div [ Class "organiser-picture" ]
                      [ img [ Src "./img/MarcoHeimeshoff.jpg" ] ]
                     div [ Class "org-social" ]
                        [ a [
                            Class "twitter-icon"
                            Href "https://twitter.com/Heimeshoff"
                            Target "_blank"]
                            [ img [
                                Class "ml-2 h-10"
                                Src "./img/twitter.png" ]
                            ]
                          a [
                            Class "twitter-icon"
                            Href "https://www.linkedin.com/in/heimeshoff/"
                            Target "_blank"]
                            [ img [
                                Class "ml-2 h-10"
                                Src "./img/linkedin.png" ]
                            ] 
                        ]
                      ]  
                div [ Class "m-2 bg-white w-1/3 rounded-lg shadow-lg md:p-8 mt-6" ]
                   [ div [ Class "organiser text-center" ]
                      [ h3 []
                            [ str "Kenny Baas-Schwegler" ] ]
                     div [ Class "organiser-picture" ]
                      [ img [ Src "./img/kenny.jpg" ] ] 
                     div [ Class "org-social" ]
                        [ a [
                            Class "twitter-icon"
                            Href "https://twitter.com/kenny_baas"
                            Target "_blank"]
                            [ img [
                                Class "ml-2 h-10"
                                Src "./img/twitter.png" ]
                            ]
                          a [
                            Class "twitter-icon"
                            Href "https://www.linkedin.com/in/kenny-baas/"
                            Target "_blank"]
                            [ img [
                                Class "ml-2 h-10"
                                Src "./img/linkedin.png" ]
                            ] 
                        ]
                    ]
              ]   
          ]
    ]
