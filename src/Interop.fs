module App.Interop

open Fable.Core

[<Emit("scrollIntoView($0)")>]
let scrollIntoView (t : string) = jsNative
