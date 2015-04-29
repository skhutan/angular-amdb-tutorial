#Angular.js AMDB Tutorial

You will be creating AMDB Single Page App - the Angular Movie DataBase.  Bootstrap 3 is included so feel free to use it if you wish.

The lecture notes can be accessed at [Slides.com](http://slides.com/skhutan/deck).

The lab starter code can be accessed at [CodePen](http://codepen.io/hw-angular/pen/dPQxwM).

You can fork this codepen and create your own version, saving changes as you go.
Or alternatively, you can download the source code (Share -> Export .zip) and unzip it into your public_html directory and work on the lab locally.

##Basic

1. You have some movies stored in $scope.movies.  Add at least 3 more in the same format.

2. Display your list of movies in the view with the ng-repeat directive (hint: use a table).

3. Refactor your list of movies by moving their creation to a factory service.

4. Add a search bar at the top of the app.  Use this to filter your list of movies by title and/or rating.

5. Add a form that allows you to add a movie (with title and rating).  By clicking on the table heading, allow the user to sort the table (e.g by title or by rating).  Hint: use the orderBy filter with ng-click.

##Advanced

1. Add a ‘favourite movies’ feature which adds a star next to each movie title in the table.  Clicking the star should add/remove a movie as a favourite. Hint: combine ng-click with ng-show/hide.  You can also use the star icons (with classes glyphicon-star-empty and glyphicon-star) from the bootstrap framework.

2. Edit the star feature to use a custom directive element called favourite.  

3. Edit your new custom directive to use an isolate scope. Hint: You will need to pass in the favourite boolean variable to your directive in order to display the correct star, as well as your star toggle function.  You would invoke the directive as follows (or similar):  
```
<favourite movie="movie" toggle="toggleStar(movie)"></favourite>
```

