namespace VDDD

module Books =

  open Fable.Helpers.React
  open Fable.Helpers.React.Props
  open VDDD.Types

  let tag t =
    div [ Class "flex-no-shrink leading-none text-xs tracking-tighter bg-grey-lighter text-grey-darker rounded-md p-1 m-1" ] 
      [ t |> ofString ]
  
  let tagline tags =
    div [ Class "px-1 w-full flex flex-row flex-wrap" ]
      ( tags
        |> Seq.map tag )

  let book (b:Book) =
    div [ Class "group bg-white w-48 rounded-lg shadow-md m-2 flex flex-col items-center justify-start" ]
      [ img [ Class "p-2"
              Src b.img ] 
        tagline b.tags ]

  let render model dispatch =
    div [ Class "content bg-grey-lighter" ; Id "books"]
          [ div [ Class "w-full flex flex-col items-center justify-start"]
              [ h2 [ Class "my-6 w-4/5 lg:w-2/3 xl:w-1/2" ]
                  [ str "Books"]
                div [ Class "w-11/12 md:w-5/6" ]
                  [ div [ Class "flex justify-center flex-wrap" ]
                      ( model.books
                        |> List.filter (fun b -> (model.searchterm.Length = 0) or (b.tags |> List.contains model.searchterm))
                        |> List.map book )
                  ]
              ]
          ]