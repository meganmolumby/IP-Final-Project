<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Full Body Split</title>
        <script type="text/javascript" src="script.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
            body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif}
            .w3-bar,h1,button {font-family: "Montserrat", sans-serif}

            table         { text-align: left ;
                border-collapse:collapse;
                background-color: #f8f4ff
                table-layout: fixed;
            }
            table, td, th, tr{ border:1px solid black;
                padding: 4px;
                valign ="top";}
            th            { text-align: center;
                color: white;
                background-color: #3a3aff;
                font-size: large;}
            tr.oddrow     { background-color: white;}
            p.thick  {   font-weight: bold;
                text-align: left;
                padding: 4px;

            }
            p.stuff{
                text-indent: 15%;
            }
        </style>
    </head>
    <body>
        <table id="table">
            <th>Full Body Day</th>
            <?php
                for ($i = 1; $i <= 15; $i++) {
                   //print("<tr>");
                    printf("<tr valign='top' id='row%u'></tr>", $i);
                    //print("</tr>");
                }
             ?>
        </table>
    </body>
</html>
