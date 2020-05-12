namespace VDDD.DDDDD

module Schedule =

  open Feliz

  let table_head =
    Html.tr [
      prop.children [
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
                Html.div [
                  prop.text s.time
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
              | LiveCoding -> "Live Coding"
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


  let slot (s:Session) (handsOn:Session option) =
      Html.tr [
        prop.children [
          match handsOn with
          | Some h -> 
              Html.td [
                prop.children [
                  session s
                ]
              ]
              Html.td [
                prop.rowSpan 2
                prop.children [
                  session h
                ]
              ]
          | None -> 
              Html.td [
                prop.children [
                  session s
                ]
              ]
        ]
      ]


  let pause (element:string) =
    Html.tr [
      prop.children [
        Html.td [
          prop.colSpan 2
          prop.className "py-2"
          prop.children [
            Html.div [
              prop.className "w-full text-center"
              prop.text element
            ]
          ]
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
                  {
                    sessiontype = RecordedTalk
                    time = "4:00-4:45 GMT"
                    host = "Kim Kao"
                    speakerimg = "https://sessionize.com/image?f=fe2a92d92789432cfc4ef0c10ab71850,200,200,1,0,13-3cb6-45c5-aaa9-e2f75f3c7efa.8b884685-a4fc-47eb-a3d3-0f590fa672e7.jpg"
                    title = "Aggregate Canvas: A fluent way to walk through Strategical modeling to tactical design"
                    description = "As DDD topics become popular in Asia, more and more people still encounter obstacles in their domain model design, unable to move smoothly from domain concepts to code implementation, although there are already a lot of method has been proven to be valid, but still full of uncertainty. In this conference, I will introduce to you a solid approach - Aggregate Canvas. This Aggregate Canvas is created by KuoChao Chang, the co-organizer of DDD Taiwan Community. We would like to guide you to understand how to engage in a conversation with a team by a clear and complete mind to bring domain concepts into implementation, where a lot of elements mentioned in EventStorming are used to guide development teams through design."
                    links = [
                      { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270524415/"}
                      { label = "YouTube" ; url = "https://youtu.be/AF880t1RUU4" }
                    ]
                  }  
                  ( None)
                
                slot 
                  {
                    sessiontype = RecordedTalk
                    time = "5:00 - 6:00 GMT"
                    host = "Vladik Khononov"
                    speakerimg = "https://sessionize.com/image?f=3e49f839877c87b0fbd27734b894247e,200,200,1,0,33-0d08-411a-8f8a-0ba18b8d21c7.c4b28500-4af8-4fd9-b92a-03a1f2d42f7c.jpg"
                    title = "Bounded Contexts, Microservices, and Everything In Between"
                    description = "“95% of the words are spent extolling the benefits of ‘modularity’ and that little, if anything, is said about how to achieve it” - Glenford J. Myers, 1978. This quote is 40 years old. Today, 4 decades later, nothing has changed except terminology. Time to change this. I want to talk about the various strategies of decomposing systems into modular components. You will learn what exactly Bounded Contexts and Microservices are, and what are the differences between the two notions. We will analyze what happens between services - how data flows, and how these flows can be optimized. Ultimately, we will explore different decomposition strategies and heuristics for designing modular systems - systems that aren’t driven by ever-changing fads, but by your business needs."
                    links = [
                      { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270524442/"}
                      { label = "YouTube" ; url = "https://youtu.be/Z0RgR9xIQE4" }
                    ]
                  }
                  None
                
                pause 
                  "(06:00 - 06:30) Break"

                slot 
                  {
                    sessiontype = RecordedTalk
                    time = "6:30 - 7:15 GMT"
                    host = "Clement Delafargue"
                    speakerimg = "https://sessionize.com/image?f=a217c49dd0c2640182c400f692670258,200,200,1,0,19b64c03-8589-4d10-ac17-e4a3092196bc.jpg"
                    title = "« it's traverse »"
                    description = "The `traverse` function is so pervasive in functional programming that it became a joke:

                                    — How do I do— It's traverse

                                    https://twitter.com/search?q=%22it%27s%20traverse%22&src=typed_query

                                    Since it's a bit abstract until you actually encounter it, let's dig a little and review some case where… well, it was _actually_ `traverse`.

                                    - async calls
                                    - input validation
                                    - conditional execution
                                    - parsers generation
                                    - …

                                    In addition to making an elated crowd shout 'it's traverse', it will be a good occasion to learn more about what's an applicative functor and how it can be used.

                                    Examples will mostly be haskell, but we'll start with JS to ease into it more easily (someone once said that 67% of the NPM ecosystem could be replaced with `traverse`)."
                    links = [
                      { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270524459/"}
                      { label = "YouTube" ; url = "https://youtu.be/sIJr3SCKhjo" }
                    ]
                  }
                  ( Some {
                      sessiontype = HandsOn
                      time = "6:30 - 8:30 GMT"
                      host = "Gien Verschatse & Nick Tune"
                      speakerimg = "https://sessionize.com/image?f=bfabdacaedb93bd95715142b33843ae0,200,200,1,0,f078ae27-c1d3-4896-9c2f-d79c49944961.jpg"
                      title = "Remote Bounded Context Modelling"
                      description = "(It doesn't matter if you've practiced DDD before or never heard of Bounded Contexts you can attend and get value from this workshop. Developers, Testers, Product Managers, Architects, all welcome). Digital tools give us new powers to collaboratively model software architectures as DDD Bounded Contexts. We can copy and paste entire EventStorms and allow each person or group of people to organise the EventStorm into their own Bounded Contexts. Digital tools also give us the power to create and continuously modify clearer architectural diagrams which enable us to communicate ideas better and receive feedback from others. In this workshop, we'll extract as much value as we can from digital modelling tools like Miro to break an EventStorm down into bounded contexts, and then use Eric Evan's model exploration whirlpool to challenge and refine our model by applying concrete use cases."
                      links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270523835/"}
                        { label = "Zoom" ; url = "https://xebia.zoom.us/j/97861188324" }
                        { label = "YouTube" ; url = "https://youtu.be/QoGvpbkzZTQ" }
                      ]
                    })
                  
                slot 
                  {
                    sessiontype = LiveTalk
                    time = "7:30 - 8:30 GMT"
                    host = "Trond Hjorteland"
                    speakerimg = "https://sessionize.com/image?f=5ed348f2c4fae224a9638adee4f7c89d,200,200,1,0,a3-0c7b-487c-9dc9-9d836a8ca999.ab294a9a-853f-4545-9c8e-5162ed57ef1f.jpg"
                    title = "From Capabilities to Services: Modelling for business-IT alignment"
                    description = "Service-orientation is still a surprisingly hard and complex endeavour after all these years and the risk of getting it wrong, potentially ending up with a distributed monolith with its devastating coupling, fragility, and cognitive nightmare, is still very real to many. Our industry is fairly immature and moves so fast that internalising acquired knowledge seems difficult and we often go through cycles of re-discovery of findings made decades ago. Maybe some SOA practitioners from the previous attempts made some breakthroughs that we have missed as we now have another go with microservices?


                                  The concept of business capabilities from business architecture can be one approach to take a closer look at, with its holistic outside-in perspective of the company. The capability vantage point inherently abstracts away the 'what' a company does from the 'how' , describing the essence of what the business offers. In this talk we will take a closer look at what they are and what they can help us with, all the way from business strategies and analysis, via organisational design to data management and technical design. They may just be the tool we need to design services, micro or not, holistically in a business aligned sociotechnical system, where people, information, processes, and technology defined by the business capability they supports. "
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270524474/"}
                        { label = "Zoom" ; url = "https://us02web.zoom.us/j/85957582548" }
                        { label = "YouTube" ; url = "https://youtu.be/rH7On4Z_Lzo" }
                    ]
                  }
                  None

                pause 
                  "(08:30 - 09:00) Break"

                slot 
                  {
                    sessiontype = RecordedTalk
                    time = "9:00 - 9:45 GMT"
                    host = "Romeu Moura"
                    speakerimg = "https://sessionize.com/image?download=Romeu_Moura.jpg&f=fbab737198cf6ce7a4e5d54e49b24e8b,0,0,0,0,98-4449-4228-be54-0bc989145d86.d38e755e-41f7-4774-b8d2-27ce91e15ac9.jpg"
                    title = "Bourdieu's social theory applied to tech"
                    description = "Every workplace, every community, and in fact every social interaction, is governed by various forces, hidden power structures, implicit oppression and submission. We oppress people by accident, and we are oppressed by others by accident.

                                    Bourdieu's social theory (with concepts like 'symbolic violence', 'cultural capital' and 'hexis') explain what is happening. By understanding what he meant, we learn how each of us influences and is influenced by the people around us, in ways that we wouldn't expect.

                                    This talk tries to make Bourdieu's ideas accessible. Learn how to improve your environment immediately; see why meritocracy is a dangerous lie; recognise oppression and submission when it happens; and gain the tools to fight it day to day."
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270526772/"}
                        { label = "YouTube" ; url = "https://youtu.be/1PoTCoF9-tY" }
                    ]
                  }
                  ( Some {
                    sessiontype = HandsOn
                    time = "9:00 - 11:00 GMT"
                    host = "Michael Plöd"
                    speakerimg = "https://sessionize.com/image?f=3157ed0b63356d31cbeb0a4b4e42fccf,200,200,1,0,aca6063c-cd27-4ef5-8c20-672f064d21f5.jpg"
                    title = "Context Maps - practically applied"
                    description = "Context Maps try to illustrate the contact between bounded contexts on a formal level in a holistic view. In addition to the usual supply and service relationships, organizational aspects and team dynamics are also very important. The hands-on starts with a short introduction to the Context Map's Patterns as well as the meaning of team relationships. After that we will work on a sophisticated case-study in order to apply the theory in practice. The workshop consists of 15% theory and 85% hands-on practice. During the practical part we will weigh in on a lot of pros & cons for certain patterns and I will showcase a lot of tradeoff discussions that will occur when working with Context Maps.

                                    A rough knowledge of DDD and bounded contexts would be desirable. "
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270523939/"}
                        { label = "Zoom" ; url = "https://xebia.zoom.us/j/97471563408" }
                        { label = "YouTube" ; url = "https://youtu.be/8TDiuQ3vdh0" }
                    ]
                    })
                  
                slot 
                  {
                    sessiontype = Panel
                    time = "10:00 - 11:00 GMT"
                    host = "Alexey Zimarev"
                    speakerimg = "https://sessionize.com/image?download=Alexey_Zimarev.jpg&f=9d7f5822d6843c35fdade78230d6b8c9,0,0,0,0,de-aa9f-4b47-a9cc-fda40f5ce898.5cc35b27-9cbd-4ed5-b65d-5c20fcb18593.jpg"
                    title = "Event Sourcing, Really"
                    description = "During recent years Alexey participated in building several production-grade, customer-facing systems with Event Sourcing at heart. What was the driver to choose Event Sourcing as the implementation pattern? What does it have to do with Domain-Driven Design? What about microservices? How new components integrate with the legacy? Does it scale? What went well? What went wrong? These are the topics that raise so many questions and Alexey will be happy to share his experience with you during this session."
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270526826/"}
                        { label = "Zoom" ; url = "https://us02web.zoom.us/j/87303140569" }
                        { label = "YouTube" ; url = "https://youtu.be/uB0SkrElPRo" }
                    ]
                  }
                  None

                pause 
                  "(11:00 - 13:00) Break"


                slot 
                  {
                    sessiontype = LiveTalk
                    time = "13:00 - 13:45 GMT"
                    host = "Alberto Brandolini"
                    speakerimg = "https://exploreddd.com/2019/img/speakers/Alberto-Brandolini-ON.png"
                    title = "Extreme Context Mapping"
                    description = "Just when I thought I squeezed everything out of context mapping I've found myself using the format in unconventional ways. If you're interested in what happens when your organization is dealing with multiple business lines, when your technology stack is polluting your language, but nobody seems to notice or when your customer journey seems to have a life of its own this is the talk for you."
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270526863/"}
                        { label = "Zoom" ; url = "https://us02web.zoom.us/j/86805962254" }
                        { label = "YouTube" ; url = "https://youtu.be/yaiDzBLi1-A" }
                    ]
                  }
                  ( Some {
                    sessiontype = HandsOn
                    time = "13:00 - 15:00 GMT"
                    host = "Marco Emrich"
                    speakerimg = "https://sessionize.com/image?f=490b96708530a7946b8f08ee737666f3,200,200,1,0,3a-2c01-4478-9860-40b938640d67.d4291023-35f1-4167-a50f-f0aca8925154.jpg"
                    title = "Functional Domain Modelling in Practice"
                    description = "Functional programming enables the modeling of business domains based on a type system. This allows to prevent invariants already at runtime and customers have the possibility to give feedback directly to the code.

                                    In this workshop you can try it out yourself. We model a domain and check the resulting type descriptions against a set of business rules. We will take a look at tactical design patterns in Functional Programming and try out a first implementation."
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270524029/"}
                        { label = "Zoom" ; url = "https://xebia.zoom.us/j/91505689053" }
                        { label = "YouTube" ; url = "https://youtu.be/3JECDkZ2_6Q" }
                    ]
                    })
                  
                slot 
                  {
                    sessiontype = Panel
                    time = "14:00 - 15:00 GMT"
                    host = "Michael Plöd, Gien Verschatse, Zsofia Herendi & Kacper Gunia"
                    speakerimg = "https://sessionize.com/image?f=3157ed0b63356d31cbeb0a4b4e42fccf,200,200,1,0,aca6063c-cd27-4ef5-8c20-672f064d21f5.jpg"
                    title = "Remote DDD related trainings"
                    description = "The market for in person / presence training is pretty much gone right now due to the current situation. However each crisis brings up new opportunities. Some folks in the Domain-driven Design community have already gathered experiences in conduction and attending remote trainings about our favorite topic. This panel aims at sharing experiences among traininers and attendees as well. The questions we will discuss will include:

                                  - What are suitable formats and times for remote trainings?
                                  - Which tools work best?
                                  - What is the current observation regarding dos and don'ts?
                                  - Which exercises do work well, which don't?
                                  - How to spread theory and practice in a remote environment?
                                  - What should potential participants look out for when choosing between remote training offerings?"
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270526897/"}
                        { label = "Zoom" ; url = "https://us02web.zoom.us/j/86891167461" }
                        { label = "YouTube" ; url = "https://youtu.be/q3Oh9zVKHKo" }
                    ]
                  }
                  None

                pause 
                  "(15:00 - 15:30) Break"


                slot 
                  {
                    sessiontype = LiveCoding
                    time = "15:30 - 16:30"
                    host = "Mathias Verraes & Eric Evans"
                    speakerimg = "https://sessionize.com/image?f=196e888e07eeba8a71e80077fa2c45d1,200,200,1,0,5f561197-62a5-43af-942f-41fab15af3fe.jpg"
                    title = "Expressive Projections"
                    description = "Let’s write some event sourced projections!

                                  Our weapons of choice include higher order functions, algebraic data types, pattern matching, all the goodies of a modern programming languages.

                                  But the secret behind our success will be our Dogged Determination to Descriptive naming. We’ll observe how our domain language crystallises, how patterns emerge, and how we end up with code that communicates intent. "
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270526945/"}
                        { label = "Zoom" ; url = "https://us02web.zoom.us/j/89125972078" }
                        { label = "YouTube" ; url = "https://youtu.be/FtxPdXp_FTA" }
                    ]
                  }
                  ( Some {
                    sessiontype = HandsOn
                    time = "15:30 - 17:30 GMT"
                    host = "Jennifer Carlston"
                    speakerimg = "https://sessionize.com/image?f=1c3738e060b25fbf97cf29e89564ef87,200,200,1,0,c7-b058-41dc-ad18-100b8c83b91d.fad9b7ad-0827-4ad9-a08b-ed0a65bc5216.jpg"
                    title = "Build a Bounded Context Mob Firedrill"
                    description = "Let's see what it takes to get a Web BC online. How far can we get? What should it include? How will we do it and work together to get it done?
                                    Constraints: Visual Studio Code. Docker. "
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270524035/"}
                        { label = "Zoom" ; url = "https://xebia.zoom.us/j/97880459870" }
                        { label = "YouTube" ; url = "https://youtu.be/Dg478xHcDrY" }
                    ]
                    })
                  
                slot 
                  {
                    sessiontype = Panel
                    time = "16:45 - 17:45 GMT"
                    host = "Krisztina Hirth, Evelyn van Kelle, Nick Tune & Alberto Brandolini"
                    speakerimg = "https://sessionize.com/image?f=acef6db5cc700951cd21d42e867864db,200,200,1,0,12-2211-47f4-920a-f15c01ca91bd.749945c4-0518-499d-ad19-7150393b31f9.jpg"
                    title = "Natural Boundaries - how to read the signs and benefit from the problems"
                    description = "Finding the right boundaries of contexts is hard - implementing them can be even harder if the organisation does not change. But how can one change the organisation, how can one be sure that it changes in the right direction?
                                  There are signs, mostly perceived as a blocker but I see them as an enabler, as a pointer to the right boundaries. This idea combined with observing and measuring the value stream could lead to the right boundaries for teams and for code."
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270527115/"}
                        { label = "Zoom" ; url = "https://us02web.zoom.us/j/87553899796" }
                        { label = "YouTube" ; url = "https://youtu.be/yMRuP3tcugQ" }
                    ]
                  }
                  None

                pause 
                  "(17:45 - 19:00) Break (17:30 - 19:00)"


                slot 
                  {
                    sessiontype = RecordedTalk
                    time = "19:00 - 19:45 GMT"
                    host = "James Hickey"
                    speakerimg = "https://sessionize.com/image?f=8d2e41cb7921d8f1b13687a07b9bb945,200,200,1,0,b7c93ec2-da08-474c-9402-5ed6b7ea7b23.jpg"
                    title = "DDD For Small Organizations"
                    description = "Most DDD talks target topics specifically for larger organizations. But what about the rest of us who work with small organizations like startups or smaller product companies? Does DDD work for us too?

                                    In this session, you'll learn about some misconceptions around DDD and how it really can help smaller organizations, when and how to start introducing DDD concepts to your team, what DDD tools work well to start with, how to mentor your colleagues when trying out these new approaches, how to improve time-to-market when there are horrid legacy systems in your way, etc.

                                    If you're an engineering leader in a small product organization that wants to make an impact, then this one is for you!"
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270527279/"}
                        { label = "YouTube" ; url = "https://youtu.be/Xw_eh9vLAio" }
                    ]
                  }
                  ( Some {
                    sessiontype = RecordedTalk
                    time = "19:00 - 19:45 GMT"
                    host = "Diana Montalion"
                    speakerimg = "https://sessionize.com/image?f=dbbd1913952a84d727d62f29ca169039,200,200,1,0,2e-579f-4653-8dad-5779557fd386.304ff4c6-933f-45e0-aaa8-11f507042cb8.jpeg"
                    title = "Speaking truth to power: a foundational skillset"
                    description = "As complexity increases, are you (too often) shouting into the wind? Do you see icebergs ahead yet fail to convince others to avoid them? Are your architecture-focused discussions more exhausting than productive? Does the accountant understand the value of your work?

                            The thinking and communication skills we've developed on the job often fail us when we face more-complex challenges. That is why we are learning DDD. Rather than double down on code-specific solutions, we are developing different, more effective conceptual approaches.

                            Yet, there is an underlying skillset the nourishes and supports our ability to practice DDD or any approach that challenges traditional 'power' structures. In this workshop, we'll focus on that skillset.

                            We'll explore the four fundamental truths:

                            - Conway was right: communication architects software and systems

                            - Uncertainty is always a factor

                            - Fred Brooks was right: conceptual integrity matters most

                            - Continuous learning is essential: the modern hero is the person who weaves everyone else's expertise into a cohesive, trustworthy whole

                            And we'll explore four fundamental practices:

                            - Argumentation: creating strong and valid solutions based on sound reasoning

                            - Structuring collective reasoning: thinking well together

                            - Recognizing conceptual fallacies

                            - Cultivating the right types of energy: aka thoughts are only part of communication

                            In this talk, I'll link to practice materials to try at home.
                            "
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270527364/"}
                        { label = "YouTube" ; url = "https://youtu.be/zPvYqrASCRA" }
                    ]
                    })
                  
                slot 
                  {
                    sessiontype = Panel
                    time = "20:00 - 21:30 GMT"
                    host = "Rebecca Wirfs-Brock, Woody Zuill, Paul Rayner & Julie Lerman"
                    speakerimg = "https://exploreddd.com/2017/img/speakers/Rebecca-Wirfs-Brock-ON.png"
                    title = "Ending panel, topic TBA"
                    description = "To be announced"
                    links = [
                        { label = "Meetup" ; url = "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/270527311/"}
                        { label = "Zoom" ; url = "https://us02web.zoom.us/j/85618676523" }
                        { label = "YouTube" ; url = "https://youtu.be/GimWdjmJGek" }
                    ]
                  }
                  None

                pause 
                  "(21:30) The End"

              ]
            ]
          ]
        ]
      ]
    ]