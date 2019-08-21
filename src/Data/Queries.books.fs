module App.Data.Queries_books

open App.Types

let books = 
    [
        Book {
              title = "Domain-Driven Design Tackling Complexity in the Heart of Software"
              author = "Eric Evans"
              img = "/img/books/domain-driven-design.jpg"
              tags = ["essential"]
        }
        
        Book {
              title = "Implementing Domain-driven design"
              author = "Vaughn Vernon"
              img = "/img/books/implementing-domain-driven-design.jpeg"
              tags = ["essential, java"]
        }
        
        Book {
              title = "Applying Domain-driven design and Patterns"
              author = "Jimmy Nilsson"
              img = "/img/books/Applying-Domain-Driven-Design-and-Patterns-by-Jimmy-Nilsson.jpeg"
              tags = ["essential, csharp, dotnet"]
        }
        
        Book {
              title = "Patterns, Principles, and Practices of Domain-Driven Design"
              author = "Scott Millett, Nick Tune"
              img = "/img/books/patterns-principles-and-practices-of-domain-driven-design.jpeg"
              tags = ["essential, csharp"]
        }
        
        Book {
              title = "Domain-driven design distilled"
              author = "Vaughn Vernon"
              img = "/img/books/domain-driven-design-distilled.jpeg"
              tags = ["essential"]
        }
        
        Book {
              title = "Hands-On Domain-Driven Design with .NET Core"
              author = "Alexey Zimarev"
              img = "/img/books/hands-on-domain-driven-design-with-dotnet-core.jpeg"
              tags = ["essential, dotnet core, cqrs, event sourcing, cqrs/es"]
        }
        
        Book {
              title = "Domain Modeling Made Functional"
              author = "Scott Wlaschin"
              img = "/img/books/domain-modeling-made-functional.jpeg"
              tags = ["essential, fsharp"]
        }
    ]
