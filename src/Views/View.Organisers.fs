module App.Views.Organisers

open Fable.Helpers.React
open Fable.Helpers.React.Props


let organisers model dispatch =
  div [ Class "content bg-grey-lighter"; Id "organisers" ]
    [ div [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2" ]
          [ h2 []
                [ str "Organisers" ]
                  
            div [ Class "flex -mx-2" ]
              [ div [ Class "m-2 bg-white w-1/3 rounded-lg shadow-lg md:p-8 mt-6" ]
                   [ div [ Class "organiser-1" ]
                      [ str "Zsofia Herendi" ]
                     div [ Class "org-pic1" ]
                      [ img [ Src "./img/zsofia.jpeg" ] ] ]  
                div [ Class "m-2 bg-white w-1/3 rounded-lg shadow-lg md:p-8 mt-6" ]
                   [ div [ Class "organiser-2" ]
                       [ str "Marco Heimeshoff" ]
                     div [ Class "org-pic2" ]
                      [ img [ Src "./img/MarcoHeimeshoff.jpg" ] ] ]  
                div [ Class "m-2 bg-white w-1/3 rounded-lg shadow-lg md:p-8 mt-6" ]
                   [ div [ Class "organiser-1" ]
                       [ str "Kenny Baas-Schwegler" ]
                     div [ Class "org-pic1" ]
                      [ img [ Src "./img/kenny.jpg" ] ] ]  
              ]
              
              
          ]
    ]
