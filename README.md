#Restaurant Reviewer

Allows to browse restaurants using Foursquare API. Search by name, cousine and
location is available. For each restaurant there are list of tips and a form
that will add a tip.

##Challenges

* Redux is used at bigger scale than in
[the first project](https://github.com/growtofill/nd802p1-meet-up-event-planner).
* Action creators and reducer written if functional style using Ramda.
* Code is validate with ESLint.

##Drawbacks
Five-star rating for a review is a stub. Review
submitted via form is only visible to the user and is not stored persistently.

##Build Instructions
```
npm run build
npm run server
open http://127.0.0.1:8080
