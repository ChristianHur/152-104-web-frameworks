<?php
    $name = "Your Name here"; // Replace this string with your name
    $logo = "images/logomark.min.svg"; // Replace with your own logo
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>@yield('title','My Personal Site')</title>
        <link href="css/main.css" rel="stylesheet">
    </head>
    <body>
        <div class="main-container">
            @include('partials.nav',['name'=>$name, 'logo'=>$logo])
            @yield('content')
            @include('partials.footer',['name'=>$name])
        </div>
    </body>
</html>
