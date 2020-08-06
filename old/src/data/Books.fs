namespace VDDD.Data

module Books =

  open VDDD

  let books = 
      [
          {
                title = "Domain-Driven Design Tackling Complexity in the Heart of Software"
                author = "Eric Evans"
                img = "/img/books/domain-driven-design.jpg"
                tags = ["essential"]
          }
          
          {
                title = "Implementing Domain-driven design"
                author = "Vaughn Vernon"
                img = "/img/books/implementing-domain-driven-design.jpg"
                tags = ["essential" ; "java"]
          }
          
          {
                title = "Patterns, Principles and Practices of Domain-Driven Design"
                author = "Scott Millett, Nick Tune"
                img = "/img/books/patterns_principles_practices.jpg"
                tags = ["essential" ; "csharp"]
          }
          
          {
                title = "Domain-driven design distilled"
                author = "Vaughn Vernon"
                img = "/img/books/domain-driven-design-distilled.jpg"
                tags = ["essential"]
          }
          
          {
                title = "Hands-On Domain-Driven Design with .NET Core"
                author = "Alexey Zimarev"
                img = "/img/books/hands-on-domain-driven-design-with-dotnet-core.jpg"
                tags = ["essential" ; "dotnet core" ; "cqrs" ; "event sourcing" ; "cqrs/es"]
          }
          
          {
                title = "Domain Modeling Made Functional"
                author = "Scott Wlaschin"
                img = "/img/books/domain-modeling-made-functional.jpg"
                tags = ["essential" ; "fsharp"]
          }
          
          {
                title = "Applying Domain-driven design and Patterns"
                author = "Jimmy Nilsson"
                img = "/img/books/Applying-Domain-Driven-Design-and-Patterns-by-Jimmy-Nilsson.jpg"
                tags = ["essential" ; "csharp" ; "dotnet"]
          }
      ]
