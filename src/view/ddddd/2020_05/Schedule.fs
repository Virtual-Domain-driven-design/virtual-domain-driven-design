namespace VDDD.DDDDD

module Schedule =

  open Feliz

  let table_head =
    Html.tr [
      prop.children [
        Html.th [
          prop.className "font-light"
          prop.text "Time (GMT)"
        ]
        Html.th [
          prop.text "Talks & Panels"
        ]
        Html.th [
          prop.text "Hands-On"
        ]
      ]
    ]


  let session (s:Session) =
    Html.div [
      prop.className "bg-white p-2 md:p-4 md:m-2 h-full"
      prop.children [
        Html.div [
          prop.className "flex flex-col md:flex-row items-center justify-start"
          prop.children [
            Html.img [
              prop.className "w-24 h-24 m-2 flex-shrink-0 border-solid border border-blue-800 rounded-full"
              prop.src s.speakerimg
            ]
            Html.div [
              prop.className "px-4"
              prop.children [
                Html.div [
                  prop.text s.host
                ]
                Html.div [
                  prop.className "font-semibold"
                  prop.text s.title
                ]
              ]
            ]
          ]
        ]
        Html.div [
          prop.className (sprintf "flex-grow-1 self-stretch p-4 text-justify %s" (match s.sessiontype with | HandsOn -> "" | _ -> "h-64 overflow-y-auto" ))
          prop.text s.description
        ]
        Html.div [
          prop.className "text-sm mt-4"
          prop.text 
            ( match s.sessiontype with
              | RecordedTalk -> "Pre-recorded Session with Q&A"
              | LiveTalk -> "Live Session"
              | HandsOn -> "Hands-On Session"
              | Panel -> "Panel discussion"
            )
        ]
        Html.div [
          prop.className "mt-4 pt-2 border-t border-solid flex items-center justify-start flex-wrap"
          prop.children 
            ( s.links
              |> List.map (fun l -> 
                  Html.a [
                    prop.className "bg-gray-200 floating-action-button p-2 m-2"
                    prop.target "_blank"
                    prop.href l.url
                    prop.text l.label
                  ]
              ) 
            )
        ]
      ]
    ]


  let slot (time:string) (s:Session) (handsOn:Session option) =
      Html.tr [
        prop.children [
          Html.td [
            prop.className "text-center align-top"
            prop.text time
          ]
          match handsOn with
          | Some h -> 
              Html.td [
                prop.className "text-center"
                prop.children [
                  session s
                ]
              ]
              Html.td [
                prop.rowSpan 2
                prop.className "text-center"
                prop.children [
                  session h
                ]
              ]
          | None -> 
              Html.td [
                prop.className "text-center"
                prop.children [
                  session s
                ]
              ]
        ]
      ]


  let pause (time:string) (element:string) =
    Html.tr [
      prop.children [
        Html.td [
          prop.className "text-center"
          prop.text time
        ]
        Html.td [
          prop.colSpan 2
          prop.className "text-center py-2"
          prop.text element
        ]
      ]
    ]


  let conference_schedule =
    Html.div [
      prop.className "section w-full md:p-4 lg:p-8"
      prop.children [
        Html.div [
          prop.className "w-full lg:w-3/4 flex justify-center items-center"
          prop.children [
            Html.table [
              prop.height 1
              prop.children [
                table_head
                slot 
                  "04:00" 
                  {
                    sessiontype = RecordedTalk
                    host = "Kim Ko"
                    speakerimg = "https://sessionize.com/image?f=fe2a92d92789432cfc4ef0c10ab71850,200,200,1,0,13-3cb6-45c5-aaa9-e2f75f3c7efa.8b884685-a4fc-47eb-a3d3-0f590fa672e7.jpg"
                    title = "Aggregate Canvas: A fluent way to walk through Strategical modeling to tactical design"
                    description = "As DDD topics become popular in Asia, more and more people still encounter obstacles in their domain model design, unable to move smoothly from domain concepts to code implementation, although there are already a lot of method has been proven to be valid, but still full of uncertainty. In this conference, I will introduce to you a solid approach - Aggregate Canvas. This Aggregate Canvas is created by KuoChao Chang, the co-organizer of DDD Taiwan Community. We would like to guide you to understand how to engage in a conversation with a team by a clear and complete mind to bring domain concepts into implementation, where a lot of elements mentioned in EventStorming are used to guide development teams through design."
                    links = [
                      { label = "Zoom" ; url = "https://us02web.zoom.us/j/81504988822" }
                      { label = "YouTube" ; url = "https://youtu.be/VbjIrnXoNgE" }
                    ]
                  }
                  ( Some {
                      sessiontype = HandsOn
                      host = "No Name"
                      speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                      title = "TBD"
                      description = "Lorem Ipsum"
                      links = [
                      ]
                    })
                
                slot 
                  "05:00" 
                  {
                    sessiontype = RecordedTalk
                    host = "Vladik Khononov"
                    speakerimg = "https://sessionize.com/image?f=3e49f839877c87b0fbd27734b894247e,200,200,1,0,33-0d08-411a-8f8a-0ba18b8d21c7.c4b28500-4af8-4fd9-b92a-03a1f2d42f7c.jpg"
                    title = "Bounded Contexts, Microservices, and Everything In Between"
                    description = "“95% of the words are spent extolling the benefits of ‘modularity’ and that little, if anything, is said about how to achieve it” - Glenford J. Myers, 1978. This quote is 40 years old. Today, 4 decades later, nothing has changed except terminology. Time to change this. I want to talk about the various strategies of decomposing systems into modular components. You will learn what exactly Bounded Contexts and Microservices are, and what are the differences between the two notions. We will analyze what happens between services - how data flows, and how these flows can be optimized. Ultimately, we will explore different decomposition strategies and heuristics for designing modular systems - systems that aren’t driven by ever-changing fads, but by your business needs."
                    links = [
                    ]
                  }
                  None
                
                pause 
                  "06:00" "Break"

                slot 
                  "06:30" 
                  {
                    sessiontype = RecordedTalk
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                  }
                  ( Some {
                      sessiontype = HandsOn
                      host = "Gien Verschatse & Nick Tune"
                      speakerimg = "https://sessionize.com/image?f=bfabdacaedb93bd95715142b33843ae0,200,200,1,0,f078ae27-c1d3-4896-9c2f-d79c49944961.jpg"
                      title = "Remote Bounded Context Modelling"
                      description = "(It doesn't matter if you've practiced DDD before or never heard of Bounded Contexts you can attend and get value from this workshop. Developers, Testers, Product Managers, Architects, all welcome). Digital tools give us new powers to collaboratively model software architectures as DDD Bounded Contexts. We can copy and paste entire EventStorms and allow each person or group of people to organise the EventStorm into their own Bounded Contexts. Digital tools also give us the power to create and continuously modify clearer architectural diagrams which enable us to communicate ideas better and receive feedback from others. In this workshop, we'll extract as much value as we can from digital modelling tools like Miro to break an EventStorm down into bounded contexts, and then use Eric Evan's model exploration whirlpool to challenge and refine our model by applying concrete use cases."
                      links = [
                        { label = "Youtube / Miro / Zoom etc." ; url = "make it shine" }
                      ]
                    })
                  
                slot 
                  "07:30" 
                  {
                    sessiontype = RecordedTalk
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                  }
                  None

                pause 
                  "08:30" "Break"

                slot 
                  "09:00" 
                  {
                    sessiontype = RecordedTalk
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                  }
                  ( Some {
                    sessiontype = HandsOn
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                    })
                  
                slot 
                  "10:00" 
                  {
                    sessiontype = RecordedTalk
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                  }
                  None

                pause 
                  "11:00" "Break"


                slot 
                  "13:00" 
                  {
                    sessiontype = RecordedTalk
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                  }
                  ( Some {
                    sessiontype = HandsOn
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                    })
                  
                slot 
                  "14:00" 
                  {
                    sessiontype = RecordedTalk
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                  }
                  None

                pause 
                  "15:00" "Break"


                slot 
                  "15:30" 
                  {
                    sessiontype = RecordedTalk
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                  }
                  ( Some {
                    sessiontype = HandsOn
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                    })
                  
                slot 
                  "16:45" 
                  {
                    sessiontype = RecordedTalk
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                  }
                  None

                pause 
                  "18:00" "Break"


                slot 
                  "19:00" 
                  {
                    sessiontype = RecordedTalk
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                  }
                  ( Some {
                    sessiontype = HandsOn
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                    })
                  
                slot 
                  "20:00" 
                  {
                    sessiontype = RecordedTalk
                    host = "No Name"
                    speakerimg = "https://getdrawings.com/free-icon/people-icon-free-54.png"
                    title = "Title"
                    description = "Description"
                    links = [
                      { label = "Some link" ; url = "this_is_no_url ;)" }
                    ]
                  }
                  None

                pause 
                  "21:00" "The End"

              ]
            ]
          ]
        ]
      ]
    ]