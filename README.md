# Project REST-Rant

REST-Rant is an app where users can review restaurants.
| Method   | Path        | Purpose                   |
|:---------|:------------|:--------------------------|
|GET       |/            |Home page                  |
|GET       |/places      |Places index page          |
|POST      |/places      |Create new placce          |
|GET   |/places/new |Form page for creating new place|
|GET   |/places/:id |Details about a particular place|
|PUT       |/places/:id  |Update a particular place  |
|GET   |/places/:id/edit  |Form page for editing an existing place|
|DELETE    |/places/:id  |Delete a particular place
|POST  |/places/:id/rant  |Create a rant (comment) about a particular place|
|DELETE|/places/:id/rant/:rantId |Delete a rant (comment) about a particular place|
|GET   |*  |404 page (matched any route not defined above)|
**places**
-name (string)
-city (string)
-state (string)
-cuisines (string)
-pic (string)