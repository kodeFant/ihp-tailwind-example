module Web.View.Static.Welcome where

import Web.View.Prelude

data WelcomeView = WelcomeView

instance View WelcomeView where
    html WelcomeView =
        [hsx|
         <div class="bg-red-700 text-yellow-200">
              Hello Tailwind
         </div> 
|]