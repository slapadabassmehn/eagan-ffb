/*   STEP 1   */
export const leagueID = "1055729872682852352"; // your league ID
export const leagueName = "Eagan FFB"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
<p>Established with your mom </p>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sortable Table</title>
    <style>
        body {
            font-family: 'Avenir', sans-serif;
            background-color: #1177cc;
            color: #00884;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #1177cc;
            padding: 20px;
            text-align: center;
        }
        header h1 {
            font-size: 2.5em;
            margin: 0;
        }
        .container {
            padding: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 10px;
            border: 1px solid #444;
            text-align: left;
        }
        th {
            cursor: pointer;
            background-color: #555;
        }
        th:hover {
            background-color: #08844;
        }
    </style>
</head>
<body>
    <header>
        <h1>Standings</h1>
    </header>
    <div style="text-align: center;">
        <p> Every effor will be made to keep the below standings up to date.
            However, <a href="https://sites.google.com/view/effb-sup/standings">here</a> are the official standings.
        </p>
    </div>

    <div class="container">
        <table id="sortableTable">
            <thead>
                <tr>
                    <th onclick="sortTable(0)">Player</th>
                    <th onclick="sortTable(1)"data-sort-default="desc">VP</th>
                    <th onclick="sortTable(2)">Wins</th>
                    <th onclick="sortTable(3)">Loss</th>
                    <th onclick="sortTable(4)">Points For</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Tim</td><td>34</td><td>2</td><td>500</td><td>300</td></tr>
                <tr><td>EVB</td><td>37</td><td>4</td><td>450</td><td>350</td></tr>
                <tr><td>Vollmuth</td><td>28</td><td>6</td><td>400</td><td>400</td></tr>
                <tr><td>Charlie</td><td>33</td><td>8</td><td>350</td><td>450</td></tr>
                <tr><td>Tyler</td><td>21</td><td>10</td><td>300</td><td>500</td></tr>
                <tr><td>Smithers</td><td>17</td><td>10</td><td>300</td><td>500</td></tr>
                <tr><td>John</td><td>10</td><td>10</td><td>300</td><td>500</td></tr>
                <tr><td>Josh</td><td>44</td><td>10</td><td>300</td><td>500</td></tr>
                <tr><td>Lindberg</td><td>32</td><td>10</td><td>300</td><td>500</td></tr>
                <tr><td>Anders</td><td>28</td><td>10</td><td>300</td><td>500</td></tr>
                <tr><td>Gorman</td><td>17</td><td>10</td><td>300</td><td>500</td></tr>
                <tr><td>Henry</td><td>8</td><td>10</td><td>300</td><td>500</td></tr>
            </tbody>
        </table>
    </div>
    <script>
        function sortTable(columnIndex, ascending = false) {
            const table = document.getElementById("sortableTable");
            const rows = Array.from(table.rows).slice(1);
            const isNumeric = !isNaN(rows[0].cells[columnIndex].innerText);
            
            rows.sort((row1, row2) => {
                const cell1 = row1.cells[columnIndex].innerText;
                const cell2 = row2.cells[columnIndex].innerText;
                
                let comparison;
                if (isNumeric) {
                    comparison = parseFloat(cell1) - parseFloat(cell2);
                } else {
                    comparison = cell1.localeCompare(cell2);
                }
                
                return ascending ? comparison : -comparison;
                localStorage.setItem('sortColumnIndex', columnIndex);
                localStorage.setItem('sortAscending', ascending);
            });
            
            rows.forEach(row => table.appendChild(row));
        }

        document.addEventListener("DOMContentLoaded", () => {
            const defaultSortHeader = document.querySelector('th[data-sort-default]');
            if (defaultSortHeader) {
                const columnIndex = Array.from(defaultSortHeader.parentNode.children).indexOf(defaultSortHeader);
                const sortOrder = defaultSortHeader.getAttribute('data-sort-default') === 'desc' ? false : true;
                sortTable(columnIndex, sortOrder);
            }
        });
    </script>
</body>
</html>

irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "managerID": "76934747653554176",
      "name": "Smithers",
      // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Rosemount", // (optional)
      "bio": "The last of the OGs. Between himself and John, he is what is left of the first league established in 2008.<br>Breaking into the scene with a #1 regular season finish, he finally captured his 1st Schwanz in 2021, but faltered at his attempt to achieve the Lindberg retirement portfolio (LRP (™)) the following year. Attempting to recapture greatness, the injury bug derailed his season resulting in a complete Gorman-esque firesale to begin the 2024 season.<br><br>The Commissioner is an avid trader, if you haven’t received a trade from him, you probably aren't worthy… of anything. The biggest feather in his cap is probably <b>86.98% line up accuracy score</b>, good for first in the league and something he can strive for while rebuilding.<br> The commissioner isn’t the best drafter. To be fair, he’s only had first rounder in two drafts, but those 1st include: Jalen Reagor, Ladd McConkey, and Brian Thomas. While 2nd rounders+ don’t usually have a high hit rate, many of these players don’t have any fantasy impact. He lives on the waiver wire with 286 waiver moves a year.<br>It will be interesting to see, given the plethora of picks he has acquired, if he can get his drafts straight and get back within range of the Schwanz quicker than anticipated.",
      "photo": "/managers/smithers.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2009, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Trade his way to relevance, with a sprinkle of waiver success",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "455471147224395776",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Anders",
      // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Eagan", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/anders.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1111, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 2, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "455488143940907008",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Charlie",
      // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "San Diego?", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/charlie.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 9226, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        "managerID": "455488749686484992",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "John",
        // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": "Rochester", // (optional)
        "bio": "Not really sure what to put here as a test<br>There is a break though",
        "photo": "/managers/john.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2009, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: 6, // manager array number within this array, or null to link back to all managers page
          image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 4179, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Your fantasy team's philosophy",
        "tradingScale": 10, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "455492628645933056",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Lindberg",
        // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": "Burnsville", // (optional)
        "bio": "Lorem ipsum...",
        "photo": "/managers/lindberg.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: 6, // manager array number within this array, or null to link back to all managers page
          image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 4017, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Your fantasy team's philosophy",
        "tradingScale": 10, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "455493031966011392",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Gorman",
        "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": "Minneapolis", // (optional)
        "bio": "Lorem ipsum...",
        "photo": "/managers/gorman.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: 6, // manager array number within this array, or null to link back to all managers page
          image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 6943, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Your fantasy team's philosophy",
        "tradingScale": 10, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "455981978773090304",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Vollmuth",
        // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": "Seattle", // (optional)
        "bio": "Lorem ipsum...",
        "photo": "/managers/vollmuth.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Everyone", // Can be anything (usually your rival's name)
          link: 6, // manager array number within this array, or null to link back to all managers page
          image: "/managers/_everyone.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 6797, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "idk", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Your fantasy team's philosophy",
        "tradingScale": 8, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "456209254974484480",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "TimTom",
        // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": "Minneapolis", // (optional)
        "bio": "Lorem ipsum...",
        "photo": "/managers/tim.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: 6, // manager array number within this array, or null to link back to all managers page
          image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Your fantasy team's philosophy",
        "tradingScale": 3, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "545823705639251968",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Tyler",
        "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": "Rochester", // (optional)
        "bio": "Took over for the now defunct Tyler Nelson's team",
        "photo": "/managers/tyler.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: 6, // manager array number within this array, or null to link back to all managers page
          image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 8146, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Dynasty", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Your fantasy team's philosophy",
        "tradingScale": 8, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "725717640638738432",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Josh",
        "tookOver": 2021, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": "Eagan?", // (optional)
        "bio": "Took over for the now defunct Selby team in 2021",
        "photo": "/managers/reno.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2021, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: 6, // manager array number within this array, or null to link back to all managers page
          image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 7543, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "Missionary", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Your fantasy team's philosophy",
        "tradingScale": 6, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "1096469765155180544",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Henry",
        "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": "Mendota Heights", // (optional)
        "bio": "Took over for the now defunct Garrett by way of Zack",
        "photo": "/managers/henry.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: 6, // manager array number within this array, or null to link back to all managers page
          image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 11560, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Your fantasy team's philosophy",
        "tradingScale": 10, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "managerID": "455914869548380160",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "EVB",
        // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
        "location": "Seattle", // (optional)
        "bio": "Took over for the now defunct Garrett by way of Zack",
        "photo": "/managers/evb.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Rival", // Can be anything (usually your rival's name)
          link: 6, // manager array number within this array, or null to link back to all managers page
          image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Your fantasy team's philosophy",
        "tradingScale": 10, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
