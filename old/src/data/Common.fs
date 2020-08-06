namespace VDDD.Data

module Common =

    open VDDD
        
    let level l =
        match l with
        | Introductory -> "Introductory"
        | Intermediate -> "Intermediate"
        | Advanced -> "Advanced"
        | Expert -> "Expert"