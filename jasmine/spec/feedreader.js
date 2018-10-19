/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have adefined url and it is not empty', function() {
            allFeeds.forEach(function(feed) {
                // Check that feed url is defined
                expect(feed.url).toBeDefined();
                // Check that feed url is not empty
                expect(feed.url.trim().length).toBeGreaterThan(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have adefined name and it is not empty', function() {
            allFeeds.forEach(function(feed) {
                // Check that feed name is defined
                expect(feed.name).toBeDefined();
                // Check that feed name is not empty
                expect(feed.name.trim().length).toBeGreaterThan(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        // Menu is hidden by default if body element has menu-hidden css class
        it('should be hidden by default', function() {
            // Determine if body element has a menu-hidden css class
            var menuHidden = $('body').hasClass('menu-hidden');
            // Check if menuHidden variable is true
            expect(menuHidden).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          // This test simulates the behavior to show and hide a menu
          // When body element has menu-hidden css class, the menu is hidden
          // When body element doesn't have menu-hidden class, the meny is showing
         it('should change visibility when menu icon is clicked', function() {
             var menuIcon = $('.menu-icon-link');

             // fire the menu icon click
             menuIcon.trigger('click');
             // Check that body element doesn't have menu-hidden class
             expect($('body').hasClass('menu-hidden')).toBe(false);

             // fire the menu icon click
             menuIcon.trigger('click');
             // Check that body element has menu-hidden class
             expect($('body').hasClass('menu-hidden')).toBe(true);

         });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        // Before each test, feeds should be loaded
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('should complete its work and there is at least a single element', function(done) {
            // Check that leadFeed function is completed
            expect(loadFeedsComplete).toBe(true);
            // Check that there are feed entries.
            expect($('.feed .entry-link').length).not.toBe(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var feedContent1 = '';
        var feedContent2 = '';

        // Before each test, feeds should be loaded
        beforeEach(function(done) {
            loadFeed(0, function() {
                feedContent1 = $('.feed').html();
                loadFeed(1, done);
            });
        })
         /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('should change the feeds content', function(done) {
            // Get content from the current feed
            feedContent2 = $('.feed').html();

            // Chaeck that feeds content change when selected feed change
            expect(feedContent1).not.toBe(feedContent2);
            done();
        });
    });
}());
