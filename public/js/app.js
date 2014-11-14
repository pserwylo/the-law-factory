'use strict';

// Default configuration - do not change here
// Configuration id to be set in public/js/config.js
angular.module('theLawFactory.config', []).constant('API_ROOT_URL', 'http://www.lafabriquedelaloi.fr/api/').constant('GOOGLE_ANALYTICS_ID','').constant('HOST_FOR_GOOGLE','');

// Declare app level module which depends on filters, and services
angular.module('theLawFactory', [
  'theLawFactory.config',
  'theLawFactory.controllers',
  'theLawFactory.services',
  'theLawFactory.directives',
  'theLawFactory.analytics',
  'pascalprecht.translate'
]).
config(function ($routeProvider, $locationProvider, $translateProvider) {
  $routeProvider

    .when('/',           {templateUrl: 'templates/home.html', controller: 'mainCtrl'})
    .when('/a-propos.html',           {templateUrl: 'templates/about.html', controller: 'mainCtrl'})
    .when('/lois.html',       {template: '<div mod0 class="mod0"></div>', controller: 'mainCtrl'})
    .when('/articles.html',           {template: '<div mod1 class="mod1"></div>', controller: 'mainCtrl'})
    .when('/amendements.html',   {template: '<div mod2 class="mod2"></div>', controller: 'mainCtrl'})
    .when('/debats.html',        {template: '<div mod2b class="mod2"></div>', controller: 'mainCtrl'})
    .when('/mod0',  {redirectTo: '/lois.html'})
    .when('/mod1',  {redirectTo: '/articles.html'})
    .when('/mod2',  {redirectTo: '/amendements.html'})
    .when('/mod2b', {redirectTo: '/debats.html'})
    .when('/loi.html',   {redirectTo: '/articles.html'})
    .when('/loi',   {redirectTo: '/articles.html'})
    .when('/amendements',  {redirectTo: '/amendements.html'})
    .when('/debats', {redirectTo: '/debats.html'})
    .otherwise(     {redirectTo: '/'});
    $locationProvider.html5Mode(true);

    $translateProvider.translations('en', {
      HOME: {
        TITLE: "How do Parlimentarians affect the law?",
        SUBTITLE: "Explore the evolution of the law over parliamentary procedure with the Factory Act",
        EXPLORE_LEGISLATION: "Explore more than 290 pieces of legislation",
        EXPLORE_LEGISLATION_OUT_OF: "out of 415 enacted since 2010",
        RECENT_DEBATES: "Recent debates",
        EXPLORE_MOST_AMENDED: "Most amended legislation",
        EXPLORE_RECENT_LEGISLATION: "View recent debates",
        EXPLORE_MOST_AMENDED_LEGISLATION: "View most amended legislation",
        NUM_AMENDMENTS: "{{number}} amendments",
        EXAMPLE: {
          TIMELINE: {
            TITLE: "See the timeline of parliamentary bus",
            DESCRIPTION: "All legislation is compared over time or in their organization. Sorting and filters by the number of amendments, topics or dates of study."
          },
          CHANGES: {
            TITLE: "Dive into the amendments voted on by the Parliament",
            DESCRIPTION: "At each step of the procedure, each item constituting the legislation is shown with amendments made by the Parliament. Additions and deletions made in the legislation are available in detail as well as the full text of the legislation."
          },
          COMPARE: {
            TITLE: "Compare amendments",
            DESCRIPTION: "The amendments are available at each stage so you can quickly identify the political groups of the authors who adopted or denied help, and those that have not been discussed."
          },
          INTERVENTIONS: {
            TITLE: "Explore interventions",
            DESCRIPTION: "The flow of interventions by the parliamentary group is shown at each stage of the discussion. Links to <a href='http://nosdeputes.fr/'>NosDéputés.fr</a> and <a href='http://nossenateurs.fr/'>NosSénateurs.fr</a> let you read the debates associated with each stage of the discussion."
          }
        }
      },
      CATEGORIES: {
        ECONOMIC: "Economy",
        GEOLOCATION: "Geolocation",
        COUNTERFEIT: "Counterfeit",
        SAME_SEX_MARRIAGE: "Same sex marriage",
        LOCAL_COUNCILS: "Local councils",
        ELECTIONS: "Elections and changes to the electoral calendar"
      }
    });
    $translateProvider.translations('fr', {
      HOME: {
        TITLE: "Les parlementaires font-ils la loi?",
        SUBTITLE: "Explorez l'évolution de la loi au fil de la procédure parlementaire avec La Fabrique de la Loi",
        EXPLORE_LEGISLATION: "Explorer plus de 290 textes de lois",
        EXPLORE_LEGISLATION_OUT_OF: "parmi 415 promulgués depuis 2010<br/>faute d'OpenData officielle",
        RECENT_DEBATES: "Les derniers textes débattus",
        EXPLORE_MOST_AMENDED: "Les textes les plus amendés",
        EXPLORE_RECENT_LEGISLATION: "Explorer les textes récents",
        EXPLORE_MOST_AMENDED_LEGISLATION: "Explorer les textes les plus amendés",
        NUM_AMENDMENTS: "{{number}} amendements",
        EXAMPLE: {
          TIMELINE: {
            TITLE: "Consultez la chronologie de la navette parlementaire",
            DESCRIPTION: "L'ensemble des textes est comparable dans le temps ou dans leur organisation. Des tris et des filtres sont proposés sur le nombre d'amendements, les thèmes ou les dates d'études."
          },
          CHANGES: {
            TITLE: "Plongez dans les modifications votées par les parlementaires",
            DESCRIPTION: "À chaque étape de la procédure, chaque article constituant les textes est présenté avec ses modifications apportées par le parlement. Les ajouts et suppressions réalisés sur le texte sont consultables dans leurs détails tout comme le texte complet."
          },
          COMPARE: {
            TITLE: "Comparez les amendements",
            DESCRIPTION: "Les amendements déposés à chaque étape sont consultables pour pouvoir identifier rapidement en fonction des groupes politiques de leurs auteurs ceux qui ont été adoptés ou réfusés et ceux qui n'ont pas été discutés."
          },
          INTERVENTIONS: {
            TITLE: "Explorez les interventions",
            DESCRIPTION: "Le flot d'interventions par groupe parlementaire est affiché à chaque étape de la discussion. Des liens vers NosDéputés.fr et NosSénateurs.fr permettent de lire les débats associés à chaque étape de la discussion."
          }
        }
      },
      CATEGORIES: {
        _TODO: "Are these official names of legislation, or general broad cateegories of legislation? The answer will determine how they are translated I guess.",
        ECONOMIC: "Économie réelle",
        GEOLOCATION: "Géolocalisation",
        COUNTERFEIT: "Contrefaçon",
        SAME_SEX_MARRIAGE: "Mariage pour couples de personnes du même sexe",
        LOCAL_COUNCILS: "Collectivités territoriales",
        ELECTIONS: "Élection et modification du calendrier électoral"
      }
    });
    $translateProvider.preferredLanguage('en');
});


//angular.module('theLawFactory', ["angucomplete"]);
