namespace VDDD

module Books =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props
  open VDDD.Types

  let tag t =
    div [ Class "flex-no-shrink leading-tight bg-blue-lightest text-grey-darker rounded-lg px-2 py-1 m-1" ] 
      [ t |> ofString ]
  
  let tagline tags =
    div [ Class "flex flex-row flex-wrap" ]
      ( tags
        |> Seq.map tag )

  let book (b:Book) =
    div [ Class "group bg-white w-64 rounded-lg shadow-md p-4 m-2" ]
      [ img [ Src b.img ] 
        tagline b.tags ]

  let render model dispatch =
    div [ Class "content bg-grey-lighter" ; Id "books"]
          [ div [ Class "w-full flex flex-col items-center justify-start"]
              [ h2 [ Class "my-6 w-4/5 lg:w-2/3 xl:w-1/2" ]
                  [ str "Books"]
                div [ Class "w-11/12 md:w-5/6" ]
                  [ div [ Class "flex justify-center flex-wrap" ]
                      ( model.books
                        |> List.map book )
                  ]
              ]
          ]