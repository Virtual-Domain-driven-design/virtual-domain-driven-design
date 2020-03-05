module VDDD.Data.Common

open VDDD.Types

let level l =
    match l with
    | Introductory -> "Introductory"
    | Intermediate -> "Intermediate"
    | Advanced -> "Advanced"
    | Expert -> "Expert"