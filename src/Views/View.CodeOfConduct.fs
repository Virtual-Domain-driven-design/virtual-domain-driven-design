module App.Views.CodeOfConduct

open Fable.Helpers.React
open Fable.Helpers.React.Props


let codeofconduct model dispatch =
    div [ Class "content" ; Id "codeofconduct"]
      [ div [ Class "w-4/5 md:w-1/2 lg:w-1/2 xl:w-1/3" ]
          [ h2 [ ]
              [ str "Code of conduct"]
            p [ ]
              [ str "All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct. Organisers will enforce this code throughout the event. We expect cooperation from all participants to help ensure a safe environment for everybody." ]
            h4 [ Class "mt-4" ]
              [ str "Need Help?" ]
            p [ Class "mt-2" ]
              [ str "You have our contact details in the emails we've sent." ]
            h4 [ Class "mt-4" ]
              [ str "The Quick Version" ]
            p [ Class "mt-2" ]
              [ str "Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers." ]
            h4 [ Class "mt-4" ]
              [ str "The Less Quick Version" ]
            p [ Class "mt-2" ]
              [ str "Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention." ]
            p [ Class "mt-2" ]
              [ str "Participants asked to stop any harassing behavior are expected to comply immediately." ]
            p [ Class "mt-2" ]
              [ str "Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment." ]
            p [ Class "mt-2" ]
              [ str "If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund." ]
            p [ Class "mt-2" ]
              [ str "If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified as they'll be wearing branded clothing and/or badges." ]
            p [ Class "mt-2" ]
              [ str "Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance." ]
            p [ Class "mt-2" ]
              [ str "We expect participants to follow these rules at conference and workshop venues and conference-related social events." ] ] ] 
