namespace VDDD

module Cfp =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props

  let cfp model dispatch =
    div [ Class "content"; Id "cfp" ]
      [ div [ Class "my-8 w-4/5 lg:w-2/3 xl:w-1/2 flex flex-col items-center justify-start" ]
            [ h2 []
                  [ str "Call for Proposal" ]
              p [ Class "italic text-justify" ]
                  [ str "We are always looking for interesting topics to share with our community, and that community is you! If you have anything interesting you want to share in a talk or a discussion please send us your proposal." ]
              a [ Href "mailto:submissions@virtualddd.com"
                  Target "_blank"
                  Class "p-4 mt-4 bg-blue-light card-hoverable text-white" ]
                [ str "Propose a session"]
                 

            ]
      ]
